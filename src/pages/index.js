import CurrencyDashboard from '../components/UI/dashboard/CurrencyDashboard';

import LoginSection from '@/components/UI/login/LoginSection';

import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return <>{user.isLoggedIn ? <CurrencyDashboard /> : <LoginSection />}</>;
};

export default HomePage;
