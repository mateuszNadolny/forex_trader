import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const HistoryTable = () => {
  const transactionsHistory = useSelector((state) => state.transactionsHistory);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transactionsHistory);
  }, [transactionsHistory]);

  return (
    <DataTable value={data} emptyMessage="No transactions found." className="mx-5 mt-2">
      <Column field="currencySold" header="Currency Sold" sortable style={{ width: '20%' }} />
      <Column field="currencySoldAmount" header="Amount sold" sortable style={{ width: '20%' }} />
      <Column
        field="currencyReceived"
        header="Currency Received"
        sortable
        style={{ width: '20%' }}
      />
      <Column
        field="currencyReceivedAmount"
        header="Amount received"
        sortable
        style={{ width: '20%' }}
      />
      <Column field="date" header="Date" sortable style={{ width: '20%' }} />
    </DataTable>
  );
};

export default HistoryTable;
