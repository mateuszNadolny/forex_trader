import Link from 'next/link';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import { useRouter } from 'next/router';
import { useState } from 'react';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link
              href="/"
              className={router.pathname === '/' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              Dashboard
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              href="/trading"
              className={router.pathname === '/trading' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              Trading
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              href="/my-wallet"
              className={router.pathname === '/my-wallet' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              My wallet
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              href="/history"
              className={router.pathname === '/history' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              History
            </Link>
          </li>
        </ul>
        <div>
          <button className={`${classes.accountBtn} mt-5`}>My account</button>
        </div>
      </Sidebar>
      <Button
        icon="pi pi-align-justify"
        className="m-2"
        rounded
        text
        onClick={() => setVisible(true)}
      />
    </>
  );
};

export default MainHeader;
