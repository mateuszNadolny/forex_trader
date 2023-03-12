import CurrencyChart from './CurrencyChart';
import MyCurrenciesModal from './MyCurrenciesModal';
import TradeModal from './TradeModal';

const CurrencyDashboard = () => {
  return (
    <div className="w-full max-w-screen lg:max-h-screen h-full lg:mt-2">
      <section className="mx-3 lg:mx-4 flex flex-column lg:flex-row gap-4 justify-content-between mb-4 lg:mb-4">
        <MyCurrenciesModal />
        <TradeModal />
      </section>
      <CurrencyChart />
    </div>
  );
};

export default CurrencyDashboard;
