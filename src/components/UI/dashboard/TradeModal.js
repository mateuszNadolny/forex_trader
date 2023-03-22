import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

import classes from './TradeModal.module.css';

const TradeModal = () => {
  return (
    <Card
      className="px-1 border-round-xl w-12 lg:w-4 font-light text-black-alpha-90"
      style={{ backgroundColor: 'var(--primary-yellow)' }}>
      <p className="col-12 text-2xl mb-3 p-0 ">Shall we trade?</p>
      <div>
        <div className="border-round-xl p-0 flex gap-2 w-auto">
          <InputNumber className="border-round-2xl" />
          <Dropdown className="border-round-3xl" />
        </div>
        <div className="border-round-xl border-solid p-2 flex gap-2 w-7">
          <Dropdown />
        </div>
      </div>
    </Card>
  );
};

export default TradeModal;
