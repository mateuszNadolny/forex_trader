import Link from 'next/link';

import { useRouter } from 'next/router';
import { useState } from 'react';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const router = useRouter();

  return (
    <header className={classes.header}>
      <button
        className={`${classes.modalButton} ${classes.openButton}`}
        onClick={() => {
          setShowMobileMenu(true);
        }}>
        ≡
      </button>
      <nav className={showMobileMenu ? '' : classes.navHidden}>
        <button
          className={`${classes.modalButton} ${classes.closeButton}`}
          onClick={() => {
            setShowMobileMenu(false);
          }}>
          X
        </button>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname === '/' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/my-wallet"
              className={router.pathname === '/my-wallet' ? `${classes.active}` : ''}
              onClick={() => {
                setShowMobileMenu(false);
              }}>
              My wallet
            </Link>
          </li>
          <li>
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
          <button>My account</button>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
