import { Card } from 'primereact/card';
import Image from 'next/image';

import EURpic from '../../../../public/EUR.png';
import USDpic from '../../../../public/USD.png';
import PLNpic from '../../../../public/PLN.png';
import GBPpic from '../../../../public/GBP.png';

const MyCurrenciesModal = () => {
  return (
    <Card
      className="px-1 border-round-xl w-12 lg:w-4"
      style={{ fontWeight: 'var(--font-regular)' }}>
      <p className="col-12 text-2xl mb-4 p-0">My currencies:</p>
      <ul>
        <li className="flex align-items-center mt-2">
          <Image src={PLNpic} width={30} height={30} alt={'Polish flag'} />
          <p className="ml-3 opacity-70">
            Polish Zloty: <span className="font-semibold">2593.23 ZŁ</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <Image src={EURpic} width={30} height={30} alt={'European Union flag'} />
          <p className="ml-3 opacity-70">
            Euro: <span className="font-semibold">2593.23 €</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <Image src={USDpic} width={30} height={30} alt={'Polish flag'} />
          <p className="ml-3 opacity-70">
            American Dollar: <span className="font-semibold">2593.23 $</span>
          </p>
        </li>
        <li className="flex align-items-center mt-2">
          <Image src={GBPpic} width={30} height={30} alt={'Polish flag'} />
          <p className="ml-3 opacity-70">
            British Pound: <span className="font-semibold">2593.23 £</span>
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default MyCurrenciesModal;
