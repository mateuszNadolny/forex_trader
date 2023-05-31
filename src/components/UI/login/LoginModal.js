import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth, provider } from '../../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';

import { setIsLoggedIn, setIsDemo, setUserData } from '../../../redux/slices/user-slice';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import LoginErrorMessage from './LoginErrorMessage';
import { Button } from 'primereact/button';

const LoginModal = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', result.user.refreshToken);
      dispatch(setIsLoggedIn(true));
      dispatch(
        setUserData({ displayName: result.user.displayName, photoURL: result.user.photoURL })
      );
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  const handleDemo = () => {
    dispatch(setIsDemo(true));
  };

  return (
    <div className="text-center px-2 py-4 flex flex-column align-items-center justify-content-end bg-primary border-round-md md:h-full">
      <h2 className="md:mb-6 md:text-6xl mb-5">Get started</h2>
      {isError && <LoginErrorMessage err={`We're having issues signin you in!`} />}
      <Button
        rounded
        icon="pi pi-google"
        label="Sign in with Google"
        className="surface-0 text-white-alpha-90 mb-5"
        onClick={signInWithGoogle}
      />
      <Button
        rounded
        label="Check demo version"
        severity="secondary"
        className="mb-5 md:mb-6"
        onClick={handleDemo}
      />
      <p className="w-10 md:w-10 mb-4 text-xs">
        In order to save your progress, you will need to log in via Google Account. This way, you
        can easily pick up where you left off and keep track of your accomplishments.
      </p>
      <p className="w-10 md:w-10 mb-4 text-xs">
        Alternatively, if you are just checking things out, feel free to use the demo version of our
        app. This allows you to explore all the features and see how everything works. However,
        please note that progress within the demo version will not be saved.
      </p>
      <p className="w-10 md:w-10 md:mb-8 text-xs ">
        We appreciate your understanding and are excited for you to start your journey with us.
        Please, log in or try our demo to get started. Happy exploring!
      </p>
    </div>
  );
};

export default LoginModal;
