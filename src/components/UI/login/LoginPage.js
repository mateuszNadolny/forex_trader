import LoginWelcomeMessage from './LoginWelcomeMessage';
import LoginModal from './LoginModal';

const LoginPage = () => {
  return (
    <div className="flex flex-column md:flex-row-reverse px-4 fadein animation-duration-1000">
      <div className="w-12 md:w-4 md:h-screen flex align-items-center py-4 flex flex-column justify-content-center ">
        <h1 className="text-center md:text-5xl mb-5 md:hidden">
          Welcome to the <span className="text-yellow-400">Forex Trader</span> app!
        </h1>
        <LoginModal />
      </div>
      <div className="w-12 md:w-8 md:h-screen md:px-4 px-1 flex flex-column justify-content-center ">
        <h1 className="text-center md:text-5xl mb-5 hidden md:block">
          Welcome to the <span className="text-yellow-400">Forex Trader</span> app!
        </h1>
        <LoginWelcomeMessage />
      </div>
    </div>
  );
};

export default LoginPage;
