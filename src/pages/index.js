import CurrencyDashboard from '../components/UI/dashboard/CurrencyDashboard';

import LoginPage from '../components/UI/login/LoginPage';

import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return <>{user.isLoggedIn ? <CurrencyDashboard /> : <LoginPage />}</>;
};

export default HomePage;
