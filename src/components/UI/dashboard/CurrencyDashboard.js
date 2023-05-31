import CurrencyChart from './CurrencyChart';
import MyCurrenciesModal from './MyCurrenciesModal';
import TradeModal from './TradeModal';

const CurrencyDashboard = () => {
  return (
    <div className="w-full max-w-screen lg:max-h-screen h-full lg:mt-2 fadein animation-duration-1000">
      <div className="mx-3 lg:mx-4 flex flex-column lg:flex-row gap-4 justify-content-between mb-4 lg:mb-6">
        <TradeModal />
        <MyCurrenciesModal />
      </div>
      <CurrencyChart />
    </div>
  );
};

export default CurrencyDashboard;
