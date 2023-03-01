// USE THIS FOR CURRENCY API
// https://app.freecurrencyapi.com/request-playground

import { useState, useEffect } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

const CurrencyChart = () => {
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState('PLN');
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState('EUR');
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState([]);

  // dropdown behaviour and data

  const currencies = [
    { name: 'EUR', code: 'EUR' },
    { name: 'USD', code: 'USD' },
    { name: 'PLN', code: 'PLN' },
    { name: 'GBP', code: 'GBP' }
  ];

  const filteredCurrencies = currencies.filter(
    (currency) => currency.code !== firstSelectedCurrency
  );

  // chart labels behaviour and data
  const today = new Date();
  let weekDates = [];
  for (let i = 6; i >= 0; i--) {
    let date = new Date(today);
    date.setDate(today.getDate() - i);
    weekDates.push(date.toLocaleDateString());
  }

  useEffect(() => {
    const gridColor = 'rgba(126, 126, 128, 0.3)';
    const labelColor = 'rgba(126, 126, 128)';

    const data = {
      labels: weekDates,
      datasets: [
        {
          label: 'test',
          data: [4.13, 4.28, 4.25, 4.3, 4.36, 4.23, 4.2],
          fill: true,
          borderColor: 'rgba(242, 239, 82, 1)',
          tension: 0,
          backgroundColor: 'rgba(242, 239, 82, 0.4)'
        }
      ]
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: labelColor
          },
          grid: {
            color: gridColor
          }
        },
        y: {
          ticks: {
            color: labelColor
          },
          grid: {
            color: gridColor
          }
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  useEffect(() => {
    if (firstSelectedCurrency === secondSelectedCurrency) {
      setSecondSelectedCurrency(filteredCurrencies[1].name);
    }
  }, [firstSelectedCurrency]);

  return (
    <Card
      className="mx-3 lg:mx-4 px-1 border-round-xl"
      style={{ fontWeight: 'var(--font-regular)' }}>
      <div className="w-full grid px-2 mb-7">
        <p className="col-12 text-xl md:text-2xl lg:text-4xl mb-3 md:mb-6 p-0">{`Let's see things in more details`}</p>
        <Dropdown
          className="w-6rem"
          inputId="dd-first-currency"
          value={firstSelectedCurrency}
          onChange={(e) => setFirstSelectedCurrency(e.value)}
          options={currencies}
          optionLabel="name"
          optionValue="code"
        />
        <i
          className="pi pi-angle-right align-self-center"
          style={{ color: 'var(--primary-500)' }}></i>
        <Dropdown
          className="w-6rem"
          inputId="dd-second-currency"
          value={secondSelectedCurrency}
          onChange={(e) => setSecondSelectedCurrency(e.value)}
          options={filteredCurrencies}
          optionLabel="name"
          optionValue="code"
        />
        <p className="col-12 opacity-50">
          {`1 ${firstSelectedCurrency} = 23 ${secondSelectedCurrency}`}
        </p>
      </div>
      <Chart type="line" data={chartData} options={chartOptions} className="p-0 m-0 md:m-2"></Chart>
    </Card>
  );
};

export default CurrencyChart;
