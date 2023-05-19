import CurrencyDashboard from '../components/UI/dashboard/CurrencyDashboard';

import LoginMessage from '@/components/UI/login/LoginMessage';

import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <LoginMessage />
      {/* <CurrencyDashboard /> */}
    </>
  );
};

export default HomePage;
