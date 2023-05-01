import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';

const HistoryTable = () => {
  const transactionsHistory = useSelector((state) => state.transactionsHistory);
  const [filters, setFilters] = useState({
    currencySold: { value: null, matchMode: FilterMatchMode.IN },
    currencyReceived: { value: null, matchMode: FilterMatchMode.IN }
  });
  const [data, setData] = useState([]);
  const [currencies] = useState(['EUR', 'PLN', 'USD', 'GBP']);

  useEffect(() => {
    setData(transactionsHistory);
  }, [transactionsHistory]);

  const currencyBodyTemplate = (rowData, field) => {
    const currency = rowData[field];

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

  const currencyItemTemplate = (option) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{option}</span>
      </div>
    );
  };

  const currencyFilterTemplate = (options, field) => {
    return (
      <MultiSelect
        options={currencies}
        value={options.value}
        itemTemplate={currencyItemTemplate}
        onChange={(e) => {
          options.filterApplyCallback(e.value);
          setFilters({
            ...filters,
            [field]: { value: e.value, matchMode: FilterMatchMode.IN }
          });
        }}
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
        style={{ minWidth: '5rem' }}
      />
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
      filters={filters}
      filterDisplay="row"
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
      className="mx-5 mt-2">
      <Column
        field="currencySold"
        header="Currency Sold"
        filterField="currencySold"
        showFilterMenu={false}
        filterMenuStyle={{ width: '14rem' }}
        style={{ width: '15%' }}
        body={(rowData) => currencyBodyTemplate(rowData, 'currencySold')}
        filter
        filterElement={(options) => currencyFilterTemplate(options, 'currencySold')}
      />
      <Column field="currencySoldAmount" header="Amount sold" sortable style={{ width: '15%' }} />
      <Column
        field="currencyReceived"
        header="Currency Received"
        filterField="currencyReceived"
        showFilterMenu={false}
        filterMenuStyle={{ width: '14rem' }}
        style={{ width: '15%' }}
        body={(rowData) => currencyBodyTemplate(rowData, 'currencyReceived')}
        filter
        filterElement={(options) => currencyFilterTemplate(options, 'currencyReceived')}
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
