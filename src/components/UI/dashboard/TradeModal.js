import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

import { Button } from 'primereact/button';

const TradeModal = () => {
  return (
    <Card className="px-1 border-round-xl w-12 lg:w-4 font-light bg-primary">
      <p className="col-12 text-2xl mb-2 p-0 ">Shall we trade?</p>
      <div className="border-round-3xl font-light mb-4">
        <div className="flex-auto mb-1">
          <label htmlFor="amountToExchange" className="block text-sm opacity-60">
            Amount
          </label>
          <InputNumber inputId="amountToExchange" maxFractionDigits={2} className="w-12" />
        </div>
        <div className="flex align-content-center">
          <div className="flex-auto">
            <label htmlFor="fromCurrency" className="block mb-1 text-sm opacity-60">
              From
            </label>
            <Dropdown inputId="fromCurrency" maxFractionDigits={2} />
          </div>
          <div className="flex-auto">
            <label htmlFor="toCurrency" className="block mb-1 text-sm opacity-60">
              To
            </label>
            <Dropdown inputId="toCurrency" maxFractionDigits={2} className />
          </div>
          <Button icon="pi pi-arrow-right-arrow-left flex align-self-center" rounded />
        </div>
      </div>
    </Card>
  );
};

export default TradeModal;
