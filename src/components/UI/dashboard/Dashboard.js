import Chart from './chart';
import TradeModal from './TradeModal';
import CurrenciesModal from './CurrenciesModal';

const Dashboard = () => {
  return (
    <>
      <Chart />
      <CurrenciesModal />
      <TradeModal />
    </>
  );
};

export default Dashboard;
