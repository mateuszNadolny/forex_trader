import CurrencyChart from './CurrencyChart';
import MyCurrenciesModal from './MyCurrenciesModal';
import TradeModal from './TradeModal';

const CurrencyDashboard = () => {
  return (
    <div className="md:max-h-screen">
      <CurrencyChart className="col-12 md:col-7" />
      <MyCurrenciesModal className="col-12 md:col-3" />
      <TradeModal className="col-12 md:col-3" />
    </div>
  );
};

export default CurrencyDashboard;
