import { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../redux/slices/user-slice';
import { useSelector } from 'react-redux';

import HistoryTable from '../components/UI/history/HistoryTable';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const HistoryPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = cookies.get('auth-token');
    dispatch(setIsLoggedIn(!!authToken));
  }, [dispatch]);

  return (
    <>
      {user.isLoggedIn || user.isDemo ? (
        <div className="fadein animation-duration-1000">
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

export default HistoryPage;
