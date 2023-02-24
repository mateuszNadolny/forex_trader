import { useState, useEffect } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

const CurrencyChart = () => {
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState('EUR');
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState('PLN');

  const currencies = [
    { name: 'EUR', code: 'EUR' },
    { name: 'USD', code: 'USD' },
    { name: 'PLN', code: 'PLN' },
    { name: 'GBP', code: 'GBP' }
  ];

  const filteredCurrencies = currencies.filter(
    (currency) => currency.code !== firstSelectedCurrency
  );

  return (
    <Card
      className="mx-3 lg:mx-4 px-1  border-round-xl"
      style={{ fontWeight: 'var(--font-regular)' }}>
      <div className="w-full grid px-2">
        <p className="col-12 text-xl md:text-2xl lg:text-4xl mb-3 md:mb-4 p-0">{`Let's see things in more details`}</p>
        <Dropdown
          className="w-6rem"
          inputId="dd-first-currency"
          value={firstSelectedCurrency}
          onChange={(e) => setFirstSelectedCurrency(e.value)}
          options={currencies}
          optionLabel="name"
          optionValue="code"
        />
        <i
          className="pi pi-angle-right align-self-center"
          style={{ color: 'var(--primary-500)' }}></i>
        <Dropdown
          className="w-6rem"
          inputId="dd-second-currency"
          value={secondSelectedCurrency}
          onChange={(e) => setSecondSelectedCurrency(e.value)}
          options={filteredCurrencies}
          optionLabel="name"
        />
        <p className="col-12 opacity-50">1 EUR = 4.48 PLN</p>
      </div>
    </Card>
  );
};

export default CurrencyChart;
