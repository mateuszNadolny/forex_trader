import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWalletCurrencies } from '../../../redux/slices/my-wallet-slice';
import { addTransaction } from '../../../redux/slices/transactions-history-slice';
import { useGetLatestRateQuery } from '../../../redux/api/apiSlice';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../../config/firebase-config';

import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const TradeModal = () => {
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState('PLN');
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState('EUR');
  const [amountToExchange, setAmountToExchange] = useState(0);
  const [amountToReceive, setAmountToReceive] = useState(0);
  const toast = useRef(null);
  const myWallet = useSelector((state) => state.myWallet);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const transactionsRef = collection(db, 'transactions');
  const walletsRef = collection(db, 'wallets');

  const firstDropdownOptions = [
    { name: 'EUR', code: 'EUR' },
    { name: 'USD', code: 'USD' },
    { name: 'PLN', code: 'PLN' },
    { name: 'GBP', code: 'GBP' }
  ];

  const secondDropdownOptions = firstDropdownOptions.filter(
    (currency) => currency.code !== firstSelectedCurrency
  );

  const { data, error, isLoading, isError } = useGetLatestRateQuery({
    firstCurrency: firstSelectedCurrency,
    secondCurrency: secondSelectedCurrency
  });

  const showToast = (obj) => {
    toast.current.show({ severity: obj.severity, summary: obj.summary, detail: obj.message });
  };

  const exchangeCurrencyHandler = async () => {
    if (myWallet[firstSelectedCurrency] < amountToExchange) {
      const toastParams = {
        severity: 'error',
        summary: 'Error',
        message: 'Sorry, insufficient funds!'
      };
      showToast(toastParams);
      return;
    } else if (amountToExchange === 0) {
      const toastParams = {
        severity: 'error',
        summary: 'Error',
        message: `You can't exchange 0 units!`
      };
      showToast(toastParams);
      return;
    } else if (isError) {
      const toastParams = { severity: 'error', summary: 'Error', message: error.message };
      showToast(toastParams);
    }
    dispatch(
      setWalletCurrencies({
        currencyToSell: firstSelectedCurrency,
        currencyToBuy: secondSelectedCurrency,
        amountToSell: +amountToExchange,
        amountToBuy: +amountToReceive
      })
    );
    dispatch(
      addTransaction({
        currencySold: firstSelectedCurrency,
        currencySoldAmount: +amountToExchange,
        currencyReceived: secondSelectedCurrency,
        currencyReceivedAmount: +amountToReceive,
        exchangeRate: data.data[secondSelectedCurrency].toFixed(2),
        date: new Date().toISOString()
      })
    );
    if (!user.isDemo) {
      await addDoc(transactionsRef, {
        currencySold: firstSelectedCurrency,
        currencySoldAmount: +amountToExchange,
        currencyReceived: secondSelectedCurrency,
        currencyReceivedAmount: +amountToReceive,
        exchangeRate: data.data[secondSelectedCurrency].toFixed(2),
        date: new Date().toISOString(),
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName
      });
      await addDoc(walletsRef, {
        currencyToSell: firstSelectedCurrency,
        currencyToBuy: secondSelectedCurrency,
        amountToSell: +amountToExchange,
        amountToBuy: +amountToReceive,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName
      });
    }
    setAmountToExchange(0);
    setAmountToReceive(0);
    const toastParams = {
      severity: 'success',
      summary: 'Success',
      message: 'Exchange submitted successfully!'
    };
    showToast(toastParams);
  };

  useEffect(() => {
    if (data && !isLoading && !isError && secondSelectedCurrency) {
      const rate = data.data[secondSelectedCurrency];
      const newAmountToReceive = (amountToExchange * rate).toFixed(2);
      setAmountToReceive(newAmountToReceive);
    }
  }, [amountToExchange, data, isLoading, isError, secondSelectedCurrency]);

  useEffect(() => {
    if (firstSelectedCurrency === secondSelectedCurrency) {
      setFirstSelectedCurrency('EUR');
      setSecondSelectedCurrency('PLN');
    }
  }, [firstSelectedCurrency, secondSelectedCurrency]);

  let content;
  if (isLoading) {
    content = <ProgressSpinner className="max-w-3rem max-h-3rem" />;
  } else if (isError || !data) {
    content = <p>{error.message}</p>;
  } else if (data.data[secondSelectedCurrency]) {
    content = (
      <p>
        As of today, 1 {firstSelectedCurrency} is equivalent to {''}
        {data.data[secondSelectedCurrency].toFixed(2)} {secondSelectedCurrency}
      </p>
    );
  }

  return (
    <Card className="border-round-xl w-12 lg:w-4 font-light bg-primary">
      <Toast ref={toast} position="top-left" />
      <p className="col-12 text-2xl mb-2 p-0 ">Shall we trade?</p>
      <div className="mb-3 grid">
        <div className="flex-auto col-12 xl:col-5 mr-2">
          <label htmlFor="amountToExchange" className="block text-sm opacity-60">
            Amount
          </label>
          <InputNumber
            inputId="amountToExchange"
            maxFractionDigits={2}
            min={0}
            max={10000}
            className="w-full"
            value={amountToExchange}
            onValueChange={(e) => {
              setAmountToExchange(e.value);
            }}
          />
        </div>
        <div className="flex-auto col-5 xl:col-2">
          <label htmlFor="fromCurrency" className="block text-sm opacity-60">
            From
          </label>
          <Dropdown
            inputId="fromCurrency"
            className="w-full"
            value={firstSelectedCurrency}
            onChange={(e) => {
              setFirstSelectedCurrency(e.target.value);
            }}
            options={firstDropdownOptions}
            optionLabel="name"
            optionValue="code"
          />
        </div>
        <div className="flex-auto col-5 xl:col-2">
          <label htmlFor="toCurrency" className="block text-sm opacity-60">
            To
          </label>
          <Dropdown
            inputId="toCurrency"
            className="w-full"
            value={secondSelectedCurrency}
            onChange={(e) => {
              setSecondSelectedCurrency(e.target.value);
            }}
            options={secondDropdownOptions}
            optionLabel="name"
            optionValue="code"
          />
        </div>
      </div>
      <div className="flex mb-3 text-sm justify-content-center sm:justify-content-start">
        {content}
      </div>
      <div className="flex flex-wrap gap-3 w-12 xl:justify-content-between justify-content-center">
        <div className="flex w-8 justify-content-center sm:justify-content-start text-lg border-y-2 p-2">
          <p className="align-self-center mr-3">Receive: </p>
          <p className="font-bold align-self-center">
            {amountToReceive} {secondSelectedCurrency}
          </p>
        </div>
        <Button
          icon="pi pi-arrow-right-arrow-left"
          className="border-solid border-0"
          label="Exchange"
          onClick={() => {
            exchangeCurrencyHandler();
          }}
        />
      </div>
    </Card>
  );
};

export default TradeModal;
