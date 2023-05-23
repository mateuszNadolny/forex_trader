import LoginMessage from './LoginMessage';
import LoginModal from './LoginModal';

const LoginSection = () => {
  return (
    <div className="flex flex-column md:flex-row">
      <div className="w-12 md:w-6 md:h-screen px-4 flex flex-column justify-content-center">
        <h1 className="text-center md:text-5xl mb-5">
          Welcome to the <span className="text-yellow-400">Forex Trader</span> app!
        </h1>
        <LoginMessage />
      </div>
      <div className="w-12 md:w-6 md:h-screen flex align-items-center">
        <LoginModal />
      </div>
    </div>
  );
};

export default LoginSection;
