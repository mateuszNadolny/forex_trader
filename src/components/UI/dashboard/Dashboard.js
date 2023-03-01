import Chart from './chart';
import TradeModal from './TradeModal';
import CurrenciesModal from './CurrenciesModal';

const Dashboard = () => {
  return (
    <>
      <Chart className="p-2 m-3" />
      <CurrenciesModal />
      <TradeModal />
    </>
  );
};

export default Dashboard;
