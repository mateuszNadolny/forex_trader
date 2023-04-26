import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { Image } from 'next/image';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';

import EURpic from '../../../../public/EUR.png';
import USDpic from '../../../../public/USD.png';
import PLNpic from '../../../../public/PLN.png';
import GBPpic from '../../../../public/GBP.png';

const HistoryTable = () => {
  const transactionsHistory = useSelector((state) => state.transactionsHistory);
  const [filters, setFilters] = useState({
    representative: { value: null, matchMode: FilterMatchMode.IN }
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transactionsHistory);
  }, [transactionsHistory]);

  const currencyReceivedBodyTemplate = () => {
    const currency = transactionsHistory[transactionsHistory.length - 1].currencySold;

    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={currency}
          src={`https://github.com/mateuszNadolny/forex_trader/blob/main/public/${currency}.png?raw=true`}
          width="32"
        />
        <span>{currency}</span>
      </div>
    );
  };

  return (
    <DataTable
      value={data}
      emptyMessage="No transactions found."
      showGridlines
      removableSort
      stripedRows
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
      className="mx-5 mt-2">
      <Column
        field="currencySold"
        header="Currency Sold"
        body={currencyReceivedBodyTemplate}
        filter
        filterPlaceholder="Search by currency"
        filterField="currencySold"
        style={{ width: '15%' }}
      />
      <Column field="currencySoldAmount" header="Amount sold" sortable style={{ width: '15%' }} />
      <Column field="currencyReceived" header="Currency Received" style={{ width: '15%' }} />
      <Column
        field="currencyReceivedAmount"
        header="Amount received"
        sortable
        style={{ width: '15%' }}
      />
      <Column field="exchangeRate" header="Exchange rate" sortable style={{ width: '15%' }} />
      <Column field="date" header="Date" sortable style={{ width: '15%' }} />
    </DataTable>
  );
};

export default HistoryTable;
