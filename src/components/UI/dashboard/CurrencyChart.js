import { useState, useEffect } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

import classes from './CurrencyChart.module.css';

const CurrencyChart = () => {
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState('EUR');
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState('PLN');

  const currencies = [
    { name: 'EUR', code: 'EUR' },
    { name: 'USD', code: 'USD' },
    { name: 'PLN', code: 'PLN' },
    { name: 'GBP', code: 'GBP' }
  ];

  const filteredCurrencies = currencies.filter(
    (currency) => currency.code !== firstSelectedCurrency
  );

  return (
    <Card
      className={`lg:m-4 sm:m-3 p-2 ${classes.ChartCard}`}
      title="Let's see things in more details">
      <div className={`w-8`}>
        <Dropdown
          inputId="dd-first-currency"
          value={firstSelectedCurrency}
          onChange={(e) => setFirstSelectedCurrency(e.value)}
          options={currencies}
          optionLabel="name"
          optionValue="code"
          className="mt-2 w-1"
        />
        <i className="pi pi-angle-right mr-" style={{ color: 'var(--primary-500)' }}></i>
        <Dropdown
          inputId="dd-second-currency"
          value={secondSelectedCurrency}
          onChange={(e) => setSecondSelectedCurrency(e.value)}
          options={filteredCurrencies}
          optionLabel="name"
          className="mt-2 w-1"
        />
      </div>
    </Card>
  );
};

export default CurrencyChart;
