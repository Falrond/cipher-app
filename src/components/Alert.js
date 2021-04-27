import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Alert = () => {
  const { alert, showAlert } = useGlobalContext();
  const { msg, type } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div className={`text-${type}-500 w-96 p-1 text-center m-auto`}>{msg}</div>
  );
};

export default Alert;
