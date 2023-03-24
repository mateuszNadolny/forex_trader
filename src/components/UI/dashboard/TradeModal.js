import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

import { Button } from 'primereact/button';

// refractor this shit using this https://www.primefaces.org/primeflex/formlayout

const TradeModal = () => {
  return (
    <Card className="border-round-xl w-12 lg:w-4 font-light bg-primary">
      <p className="col-12 text-2xl mb-2 p-0 ">Shall we trade?</p>
      <div className="mb-4 grid">
        <div className="flex-auto col-12 xl:col-5 mr-2">
          <label htmlFor="amountToExchange" className="block text-sm opacity-60">
            Amount
          </label>
          <InputNumber inputId="amountToExchange" maxFractionDigits={2} className="w-full" />
        </div>
        <div className="flex-auto col-5 xl:col-2">
          <label htmlFor="fromCurrency" className="block text-sm opacity-60">
            From
          </label>
          <Dropdown inputId="fromCurrency" className="w-full" />
        </div>
        <div className="flex-auto col-5 xl:col-2">
          <label htmlFor="toCurrency" className="block text-sm opacity-60">
            To
          </label>
          <Dropdown inputId="toCurrency" className="w-full" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-12 xl:justify-content-between justify-content-center">
        <div className="flex w-8 justify-content-center sm:justify-content-start text-lg">
          <p className="align-self-center mr-3">Receive: </p>
          <p className="font-bold align-self-center">1234 EUR</p>
        </div>

        <Button
          icon="pi pi-arrow-right-arrow-left"
          className="border-solid border-0"
          label="Exchange"></Button>
      </div>
    </Card>
  );
};

export default TradeModal;
