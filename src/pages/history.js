import HistoryTable from '../components/UI/history/HistoryTable';

import { useSelector } from 'react-redux';

const HistoryPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isLoggedIn ? (
        <HistoryTable />
      ) : (
        <div className="flex justify-content-center">
          <h1>You must be logged in to see this page!</h1>
        </div>
      )}
    </>
  );
};

export default HistoryPage;
