import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import Image from 'next/image';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const user = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const profilePicLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        {!user.isDemo && (
          <div className="flex px-4 gap-4 mb-6">
            <Image
              className="border-round-2xl"
              src={user.photoURL}
              alt={`${user.displayName}'s profile pic`}
              width={30}
              height={30}
              loader={profilePicLoader}
              unoptimized
            />
            <p>{user.displayName}</p>
          </div>
        )}
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link
              href="/"
              className={router.pathname === '/' ? `${classes.active}` : ''}
              onClick={() => {
                setVisible(false);
              }}>
              Dashboard
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              href="/history"
              className={router.pathname === '/history' ? `${classes.active}` : ''}
              onClick={() => {
                setVisible(false);
              }}>
              History
            </Link>
          </li>
          {user.isDemo && (
            <li className={`${classes.liLogin} mt-8 hover:opacity-60`}>
              <Link
                href="/"
                className="mt-5"
                onClick={() => {
                  setVisible(false);
                  window.location.reload();
                }}>
                Click here to log in
              </Link>
            </li>
          )}
        </ul>
        {!user.isDemo && (
          <div>
            <button className={`${classes.accountBtn} mt-5`}>My account</button>
          </div>
        )}
      </Sidebar>
      <div>
        <Button
          icon="pi pi-align-justify"
          className="m-2"
          rounded
          text
          onClick={() => setVisible(true)}
        />
      </div>
    </>
  );
};

export default MainHeader;
