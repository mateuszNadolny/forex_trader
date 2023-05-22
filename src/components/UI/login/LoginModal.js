const LoginModal = () => {
  return (
    <div className="text-center mt-7 flex flex-column align-items-center">
      <h2 className="w-10 xl:w-7 mb-4">
        In order to save your progress, you'll need to log in via Google Account. This way, you can
        easily pick up where you left off and keep track of your accomplishments.
      </h2>
      <p className="w-10 xl:w- mb-4">
        Alternatively, if you're just checking things out, feel free to use the demo version of our
        app. This allows you to explore all the features and see how everything works. However,
        please note that progress within the demo version won't be saved.
      </p>
      <p className="w-10 xl:w-">
        We appreciate your understanding and are excited for you to start your journey with us.
        Please, log in or try our demo to get started. Happy exploring!
      </p>
      <button>Sign in with Google</button>
      <button>Check demo version</button>
    </div>
  );
};

export default LoginModal;
