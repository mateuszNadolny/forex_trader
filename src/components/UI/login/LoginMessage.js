import { Accordion, AccordionTab } from 'primereact/accordion';

const LoginMessage = () => {
  return (
    <div>
      <h1 className="mt-4 mb-5 px-2 text-center">
        Welcome to the <span className="text-yellow-400">Forex Trader</span> app!
      </h1>
      <div className="w-full flex justify-content-around">
        <Accordion activeIndex={0} className="w-10 xl:w-9">
          <AccordionTab header="About the app">
            <p className="m-0">
              Welcome to our Forex Trading Simulator – a web application designed to provide a
              realistic trading experience using fictional representations of real-world currencies.
              Whether you are a budding trader, a seasoned professional seeking a risk-free trading
              arena, or just curious about the mechanics of forex trading, our platform offers an
              intuitive and engaging learning opportunity.
            </p>
          </AccordionTab>
          <AccordionTab header="How does it work">
            <p className="m-0 ">
              Upon logging in via your Google account (or test account), you will be credited with
              10,000 PLN in virtual currency for your trading endeavors. With this, you can begin
              your trading journey, buying and selling the four currencies available on our
              platform: Euro (EUR), Polish Złoty (PLN), US Dollar (USD), and British Pound (GBP).{' '}
              <br />
              <br />
              You can track your trading progress through our comprehensive transaction history
              feature. This feature allows you to review and filter your past transactions, enabling
              you to identify trends, learn from past decisions, and improve your trading
              strategies.
            </p>
          </AccordionTab>
          <AccordionTab header="How you can benefit from this app">
            <p className="m-0">
              Our platform mirrors the dynamic nature of the real-world forex market by fetching
              actual, real-time exchange rates via a reliable currency API. You can make trades
              based on these real-life rates, offering a realistic trading experience without any of
              the financial risk. <br />
              <br />
              Beyond trading, our platform offers the ability to delve into historical currency
              rates, providing a wealth of information for those who wish to understand currency
              trends and fluctuations over time. With our app, not only can you trade, but you can
              also refine your analytical skills, preparing you for the actual trading world.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default LoginMessage;
