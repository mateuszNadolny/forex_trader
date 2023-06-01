import { useState, useEffect, useRef, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Image from 'next/image';

import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';

import { setIsLoggedIn } from '../../redux/slices/user-slice';

import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import classes from './UserPanel.module.css';

const UserPanel = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const op = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    dispatch(setIsLoggedIn(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, set the user object
        setCurrentUserData({
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        });
      } else {
        // User is signed out
        setCurrentUserData(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const confirmLogOut = () => {
    confirmDialog({
      message: 'Are you sure you want to log out?',
      header: 'Log out Confirmation',
      icon: 'pi pi-info-circle',
      accept: signUserOut
    });
  };

  const confirmDelete = () => {
    confirmDialog({
      message: 'Are you sure you want to delete your account? Your progress will be lost',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger'
    });
  };

  const profilePicLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={classes.userPanel}>
      {user.isDemo ? (
        <div className="px-2 lg:px-4 ">
          <p
            className="cursor-pointer hover:text-yellow-400 transition-duration-200"
            onClick={() => {
              window.location.reload();
            }}>
            Click here to log in
          </p>
        </div>
      ) : (
        <div className="flex align-items-center px-2 lg:px-4 gap-4 mb-6 ">
          <p className="md:block hidden">{currentUserData.displayName}</p>
          <Image
            className="border-round-2xl cursor-pointer"
            src={currentUserData.photoURL}
            alt={`${currentUserData.displayName}'s profile pic`}
            width={25}
            height={25}
            loader={profilePicLoader}
            unoptimized
            placeholder="empty"
            onClick={(e) => op.current.toggle(e)}
          />
          <OverlayPanel ref={op}>
            <div className="flex flex-column gap-4">
              <ConfirmDialog />
              <Button label="Log out" icon="pi pi-power-off" onClick={confirmLogOut} />
              <Button
                label="Delete account"
                severity="danger"
                outlined
                icon="pi pi-times"
                onClick={confirmDelete}
              />
            </div>
          </OverlayPanel>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
