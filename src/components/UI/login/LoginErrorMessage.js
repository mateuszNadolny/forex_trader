import { useRef } from 'react';

import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

const LoginErrorMessage = (props) => {
  const msgs = useRef(null);

  useMountEffect(() => {
    msgs.current.show([
      {
        sticky: true,
        severity: 'error',
        detail: props.err,
        closable: true
      }
    ]);
  });

  return (
    <div className="card w-full">
      <Messages ref={msgs} />
    </div>
  );
};

export default LoginErrorMessage;
