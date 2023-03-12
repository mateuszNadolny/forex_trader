import { Card } from 'primereact/card';

import classes from './TradeModal.module.css';

const TradeModal = () => {
  return (
    <Card
      className={`px-1 border-round-xl w-12 lg:w-10 font-light text-black-alpha-90 ${classes.card}`}
      style={{ fontWeight: 'var(--font-regular)' }}>
      <p className="col-12 text-2xl mb-3 p-0 ">Shall we trade?</p>
      <ul>
        <li className="flex align-items-center mt-2">
          <p className="ml-3">
            Polish Zloty: <span className="font-semibold">2593.23 ZŁ</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3">
            Euro: <span className="font-semibold">2593.23 €</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3">
            American Dollar: <span className="font-semibold">2593.23 $</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3">
            British Pound: <span className="font-semibold">2593.23 £</span>
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default TradeModal;
