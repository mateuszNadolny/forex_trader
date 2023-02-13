import Link from 'next/link';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/my-wallet">My wallet</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
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
