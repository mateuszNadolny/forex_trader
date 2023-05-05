import { Card } from 'primereact/card';
import Image from 'next/image';

const CurrencyCard = (props) => {
  const githubLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Card className="px-1 border-round-xl w-3 min-w-max">
      <div className="flex align-content-center justify-content0">
        <Image
          src={`https://github.com/mateuszNadolny/forex_trader/blob/main/public/${props.img}.png?raw=true`}
          width={25}
          height={25}
          alt={props.alt}
          loader={githubLoader}
          unoptimized
        />
        <p className="lg:mx-3 mx-3 opacity-70 overflow-visible">{props.title}</p>
      </div>
      <p className="font-semibold mt-3 lg:ml-2 align-self-center">{`${props.value} ${props.sign}`}</p>
    </Card>
  );
};

export default CurrencyCard;
