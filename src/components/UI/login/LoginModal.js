import { Button } from 'primereact/button';

const LoginModal = () => {
  return (
    <div className="text-center mt-7 flex flex-column align-items-center bg-primary">
      <Button
        rounded
        icon="pi pi-google"
        label="Sign in with Google"
        className="surface-0 text-white-alpha-90 mb-4"></Button>
      <p className="w-10 xl:w-7 mb-4 text-xs">
        In order to save your progress, you will need to log in via Google Account. This way, you
        can easily pick up where you left off and keep track of your accomplishments.
      </p>
      <p className="w-10 xl:w-7 mb-4 text-xs">
        Alternatively, if you are just checking things out, feel free to use the demo version of our
        app. This allows you to explore all the features and see how everything works. However,
        please note that progress within the demo version will not be saved.
      </p>
      <p className="w-10 xl:w-7 text-xs">
        We appreciate your understanding and are excited for you to start your journey with us.
        Please, log in or try our demo to get started. Happy exploring!
      </p>
      <Button>Check demo version</Button>
    </div>
  );
};

export default LoginModal;
