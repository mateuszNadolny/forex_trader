import { Card } from 'primereact/card';
import CurrencyCard from './CurrencyCard';

import EURpic from '../../../../public/EUR.png';
import USDpic from '../../../../public/USD.png';
import PLNpic from '../../../../public/PLN.png';
import GBPpic from '../../../../public/GBP.png';

const MyCurrenciesModal = () => {
  return (
    <Card className="px-1 border-round-xl w-12 lg:w-8 font-light border-solid border-yellow-300 surface-ground">
      <div className="lg:flex justify-content-between">
        <p className="lg:w-7 sm:w-12 text-2xl mb-2 lg:mb-4 p-0">My wallet</p>
        <p className="lg:w-3 sm:w-12 text-lg mb-2 p-0 text-yellow-200 font-medium">Total value:</p>
      </div>
      <div className="flex gap-3 overflow-x-auto ">
        <CurrencyCard img={PLNpic} title={'Polish Złoty'} value={2532.0} sign={'ZŁ'} />
        <CurrencyCard img={EURpic} title={'Euro'} value={2432.0} sign={'€'} />
        <CurrencyCard img={USDpic} title={'American Dollar'} value={11.23} sign={'$'} />
        <CurrencyCard img={GBPpic} title={'British Pound'} value={59.12} sign={'£'} />
      </div>
    </Card>
  );
};

export default MyCurrenciesModal;
