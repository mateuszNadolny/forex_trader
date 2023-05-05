import { useSelector } from 'react-redux';

import { Card } from 'primereact/card';
import CurrencyCard from './CurrencyCard';

import EURpic from '../../../../public/EUR.png';
import USDpic from '../../../../public/USD.png';
import PLNpic from '../../../../public/PLN.png';
import GBPpic from '../../../../public/GBP.png';

const MyCurrenciesModal = () => {
  const myWallet = useSelector((state) => state.myWallet);

  return (
    <Card className="px-1 border-round-xl w-12 lg:w-8 font-light border-solid border-yellow-300 surface-ground">
      <div className="lg:flex justify-content-between">
        <p className="lg:w-7 sm:w-12 text-2xl mb-2 lg:mb-4 p-0">My wallet</p>
      </div>
      <div className="flex gap-3 overflow-x-auto ">
        <CurrencyCard
          img={'PLN'}
          alt={'image of PLN zloty'}
          title={'Polish Złoty'}
          value={myWallet.PLN}
          sign={'ZŁ'}
        />
        <CurrencyCard
          img={'EUR'}
          alt={'image of EURO'}
          title={'Euro'}
          value={myWallet.EUR}
          sign={'€'}
        />
        <CurrencyCard
          img={'USD'}
          alt={'image of US Dollar'}
          title={'American Dollar'}
          value={myWallet.USD}
          sign={'$'}
        />
        <CurrencyCard
          img={'GBP'}
          alt={'image of GB Pound'}
          title={'British Pound'}
          value={myWallet.GBP}
          sign={'£'}
        />
      </div>
    </Card>
  );
};

export default MyCurrenciesModal;
