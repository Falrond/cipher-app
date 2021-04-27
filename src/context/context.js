import React, { useState, useContext, useEffect } from 'react';
import { Encrypt } from '../utils/base64';
import { Decrypt } from '../utils/base64';

const AppContext = React.createContext();

const getLocalStorage = () => {
  let login = localStorage.getItem('isLogIn');
  if (login) {
    return JSON.parse(localStorage.getItem('isLogIn'));
  } else {
    return false;
  }
};

const AppProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [taskType, setTaskType] = useState('encrypt');
  const [passwordInput, setPasswordInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const password = 'password123';

  const handleSubmit = e => {
    e.preventDefault();
    if (!passwordInput) {
      showAlert(true, 'red', 'Please enter the password.');
    }
    if (passwordInput.length > 0 && passwordInput !== password) {
      showAlert(true, 'red', 'Please enter correct password.');
    }
    if (passwordInput === password) {
      setIsLogIn(true);
      showAlert(true, 'green', 'You are logged in. ');
      setPasswordInput('');
    }
    console.log('hello');
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const handleCipher = e => {
    e.preventDefault();
    if (taskType === 'encrypt') {
      const value = Encrypt(valueInput);
      setConvertedValue(value);
    }
    if (taskType === 'decrypt') {
      const value = Decrypt(valueInput);
      setConvertedValue(value);
    }
    setValueInput('');
  };

  const handleLogout = () => {
    setIsLogIn(false);
    showAlert(true, 'red', 'You logged out.');
    setConvertedValue('');
    setValueInput('');
  };

  useEffect(() => {
    localStorage.setItem('isLogIn', JSON.stringify(isLogIn));
  }, [isLogIn]);

  return (
    <AppContext.Provider
      value={{
        isLogIn,
        setIsLogIn,
        password,
        alert,
        setAlert,
        handleSubmit,
        passwordInput,
        setPasswordInput,
        showAlert,
        taskType,
        setTaskType,
        handleLogout,
        convertedValue,
        valueInput,
        setValueInput,
        setConvertedValue,
        handleCipher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
