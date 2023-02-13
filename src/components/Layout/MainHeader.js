import Link from 'next/link';

import { useRouter } from 'next/router';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={router.pathname === '/' ? `${classes.active}` : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/my-wallet"
              className={router.pathname === '/my-wallet' ? `${classes.active}` : ''}>
              My wallet
            </Link>
          </li>
          <li>
            <Link
              href="/history"
              className={router.pathname === '/history' ? `${classes.active}` : ''}>
              History
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <button>My account</button>
      </div>
    </header>
  );
};

export default MainHeader;
