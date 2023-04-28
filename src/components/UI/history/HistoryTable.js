import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';

const HistoryTable = () => {
  const transactionsHistory = useSelector((state) => state.transactionsHistory);
  const [filters, setFilters] = useState({
    representative: { value: null, matchMode: FilterMatchMode.IN }
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transactionsHistory);
  }, [transactionsHistory]);

  const currencySoldBodyTemplate = (rowData) => {
    const currency = rowData.currencySold;

    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={currency}
          src={`https://github.com/mateuszNadolny/forex_trader/blob/main/public/${currency}.png?raw=true`}
          width={32}
        />
        <span>{currency}</span>
      </div>
    );
  };

  const currencyReceivedBodyTemplate = (rowData) => {
    const currency = rowData.currencyReceived;

    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={currency}
          src={`https://github.com/mateuszNadolny/forex_trader/blob/main/public/${currency}.png?raw=true`}
          width={32}
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
        body={currencySoldBodyTemplate}
        filter
        filterPlaceholder="Search by currency"
        filterField="currencySold"
        style={{ width: '15%' }}
      />
      <Column field="currencySoldAmount" header="Amount sold" sortable style={{ width: '15%' }} />
      <Column
        field="currencyReceived"
        header="Currency Received"
        body={currencyReceivedBodyTemplate}
        style={{ width: '15%' }}
      />
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
