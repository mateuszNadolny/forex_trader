import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIsLoggedIn } from '@/redux/slices/user-slice';

import CurrencyDashboard from '../components/UI/dashboard/CurrencyDashboard';
import LoginPage from '../components/UI/login/LoginPage';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = cookies.get('auth-token');
    dispatch(setIsLoggedIn(!!authToken));
  }, [dispatch]);

  return <>{user.isLoggedIn ? <CurrencyDashboard /> : <LoginPage />}</>;
};

export default HomePage;
