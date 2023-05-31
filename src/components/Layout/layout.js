import MainHeader from './MainHeader';

import { useSelector } from 'react-redux';

const Layout = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.isLoggedIn || user.isDemo ? <MainHeader /> : <></>}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
