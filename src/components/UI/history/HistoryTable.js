import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from 'next/image';

import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../../config/firebase-config';

import { FilterMatchMode, FilterOperator } from 'primereact/api';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';

const HistoryTable = () => {
  const transactionsHistory = useSelector((state) => state.transactionsHistory);
  const user = useSelector((state) => state.user);
  const [filters, setFilters] = useState({
    currencySold: { value: null, matchMode: FilterMatchMode.IN },
    currencyReceived: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
    },
    currencySoldAmount: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    currencyReceivedAmount: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    exchangeRate: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    }
  });
  const [data, setData] = useState([]);
  const [currencies] = useState(['EUR', 'PLN', 'USD', 'GBP']);

  useEffect(() => {
    // setting data for table for when user picks demo mode
    if (user.isDemo) {
      const updatedTransactionsHistory = transactionsHistory.map((transaction) => {
        return { ...transaction, date: new Date(transaction.date) };
      });

      setData(updatedTransactionsHistory);
      console.log(updatedTransactionsHistory);
    }

    // setting data for table for when user logs in via google
    const unsubscribeAuth = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser && !user.isDemo) {
        const transactionsRef = collection(db, 'transactions');

        const queryTransactions = query(
          transactionsRef,
          where('user', '==', firebaseUser.displayName)
        );

        const unsubscribeSnapshot = onSnapshot(queryTransactions, (snapshot) => {
          let transactions = [];
          snapshot.forEach((doc) => {
            transactions.push({ ...doc.data(), id: doc.id, date: new Date(doc.data().date) });
          });
          setData(transactions);
        });

        // Cleanup for snapshot listener
        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    // Cleanup for auth state change listener
    return () => {
      unsubscribeAuth();
    };
  }, [transactionsHistory]);

  // setting body templates and filters for columns with currencies

  const currencyBodyTemplate = (rowData, field) => {
    const currency = rowData[field];

    const githubLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
      <div className="flex align-items-center gap-2">
        <Image
          alt={currency}
          src={`https://github.com/mateuszNadolny/forex_trader/blob/main/public/${currency}.png?raw=true`}
          width={30}
          height={30}
          loader={githubLoader}
          unoptimized
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

  // setting body template and filter for columns with numeric values

  const numericBodyTemplate = (rowData, field) => {
    const amount = +rowData[field];
    return (
      <div className="flex align-items-center gap-2">
        <span>{amount}</span>
      </div>
    );
  };

  const numericFilterTemplate = (options, field) => {
    return (
      <InputNumber
        maxFractionDigits={2}
        value={options.value}
        onChange={(e) => {
          options.filterApplyCallback(e.value); // Convert number to string here
          setFilters({
            ...filters,
            [field]: {
              operator: FilterOperator.AND,
              constraints: [{ value: e.value, matchMode: FilterMatchMode.EQUALS }]
            }
          });
        }}
      />
    );
  };

  // setting body templates and filters for column with date

  const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date);
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="dd/mm/yy"
        placeholder="dd/mm/yyyy"
        mask="99/99/9999"
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
      // filterDisplay="menu"
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
      className="mx-5 mt-2">
      <Column
        field="currencySold"
        header="Currency Sold"
        filterField="currencySold"
        showFilterMatchModes={false}
        filterMenuStyle={{ width: '14rem' }}
        style={{ width: '15%' }}
        body={(rowData) => currencyBodyTemplate(rowData, 'currencySold')}
        filter
        filterElement={(options) => currencyFilterTemplate(options, 'currencySold')}
      />
      <Column
        field="currencySoldAmount"
        header="Amount sold"
        sortable
        body={(rowData) => numericBodyTemplate(rowData, 'currencySoldAmount')}
        filterField="currencySoldAmount"
        dataType="numeric"
        filter
        filterElement={(options) => numericFilterTemplate(options, 'currencySoldAmount')}
        filterMatchMode="custom"
        filterFunction={(value, filter) => {
          if (filter === null || filter === undefined) {
            return true;
          } else {
            return value === filter;
          }
        }}
        style={{ width: '15%' }}
      />
      <Column
        field="currencyReceived"
        header="Currency Received"
        filterField="currencyReceived"
        showFilterMatchModes={false}
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
        body={(rowData) => numericBodyTemplate(rowData, 'currencyReceivedAmount')}
        filterField="currencyReceivedAmount"
        dataType="numeric"
        filter
        filterElement={(options) => numericFilterTemplate(options, 'currencyReceivedAmount')}
        filterMatchMode="custom"
        filterFunction={(value, filter) => {
          if (filter === null || filter === undefined) {
            return true;
          } else {
            return value === filter;
          }
        }}
        style={{ width: '15%' }}
      />
      <Column
        field="exchangeRate"
        header="Exchange rate"
        sortable
        body={(rowData) => numericBodyTemplate(rowData, 'exchangeRate')}
        filterField="exchangeRate"
        dataType="numeric"
        filter
        filterElement={(options) => numericFilterTemplate(options, 'exchangeRate')}
        filterMatchMode="custom"
        filterFunction={(value, filter) => {
          if (filter === null || filter === undefined) {
            return true;
          } else {
            return value === filter;
          }
        }}
        style={{ width: '15%' }}
      />
      <Column
        field="date"
        header="Date"
        sortable
        filterField="date"
        dataType="date"
        body={dateBodyTemplate}
        filter
        filterElement={dateFilterTemplate}
        style={{ width: '15%' }}
      />
    </DataTable>
  );
};

export default HistoryTable;
