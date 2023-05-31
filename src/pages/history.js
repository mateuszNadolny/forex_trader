import Link from 'next/link';
import dynamic from 'next/dynamic';

import HistoryTable from '../components/UI/history/HistoryTable';

import { useSelector } from 'react-redux';

const HistoryPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isLoggedIn ? (
        <div className="fadein animation-duration-500">
          <h2 className="text-center mb-4 text-yellow-400">Check your transactions history</h2>
          <HistoryTable />
        </div>
      ) : (
        <div className="flex flex-column align-items-center mt-8">
          <h1>You must be logged in to see this page!</h1>
          <Link href="/" className="mt-5 hover:opacity-60">
            <p>Click here to log in</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(HistoryPage), { ssr: false });
