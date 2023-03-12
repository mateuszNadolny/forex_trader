import { Card } from 'primereact/card';

const TradeModal = () => {
  return (
    <Card
      className="px-1 border-round-xl w-12 lg:w-10"
      style={{ fontWeight: 'var(--font-regular)' }}>
      <p className="col-12 text-2xl mb-3 p-0">My currencies:</p>
      <ul>
        <li className="flex align-items-center mt-2">
          <p className="ml-3 opacity-70">
            Polish Zloty: <span className="font-semibold">2593.23 ZŁ</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3 opacity-70">
            Euro: <span className="font-semibold">2593.23 €</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3 opacity-70">
            American Dollar: <span className="font-semibold">2593.23 $</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <p className="ml-3 opacity-70">
            British Pound: <span className="font-semibold">2593.23 £</span>
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default TradeModal;
