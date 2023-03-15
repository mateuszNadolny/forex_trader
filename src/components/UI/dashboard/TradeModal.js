import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const TradeModal = () => {
  return (
    <Card
      className="px-1 border-round-xl w-12 lg:w-4 font-light text-black-alpha-90"
      style={{ backgroundColor: 'var(--primary-yellow)' }}>
      <p className="col-12 text-2xl mb-3 p-0 ">Shall we trade?</p>
      <div>
        <div className="border-round-xl border-solid p-2 flex gap-2 lg:w-7 w-full">
          <InputNumber className="" />
          <Dropdown className="" />
        </div>
        <i className="pi pi-arrow-circle-down" style={{ fontSize: '1.125rem' }}></i>
        <div className="border-round-xl border-solid p-2 flex gap-2 w-7">
          <InputNumber />
          <Dropdown />
        </div>
      </div>
    </Card>
  );
};

export default TradeModal;
