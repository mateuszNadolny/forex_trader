import { useSelector } from 'react-redux';

import Image from 'next/image';

import classes from './UserPanel.module.css';

const UserPanel = () => {
  const user = useSelector((state) => state.user);

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
          <p className="md:block hidden">{user.displayName}</p>
          <Image
            className="border-round-2xl"
            src={user.photoURL}
            alt={`${user.displayName}'s profile pic`}
            width={25}
            height={25}
            loader={profilePicLoader}
            unoptimized
          />
        </div>
      )}
    </div>
  );
};

export default UserPanel;
