import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const LoginForm = () => {
  const {
    isLogIn,
    passwordInput,
    setPasswordInput,
    handleSubmit,
  } = useGlobalContext();

  return (
    !isLogIn && (
      <>
        <form
          className=" p-4 w-96   m-auto flex flex-col "
          onSubmit={handleSubmit}
        >
          <label className="p-1 pl-2 text-gray-100 text-sm">Password:</label>
          <div className="flex justify-center items-center">
            <input
              className="focus:outline-none text-lg p-1"
              type="password"
              placeholder="enter the password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />
            <button
              className="btn text-gray-100 hover:bg-gray-100 hover:text-gray-600 transition-all  ml-4 py-1 px-4 border-2"
              type="submit"
              data-testid="login-button"
            >
              Login
            </button>
          </div>
          <p className="pl-2 text-center text-sm mt-3 text-gray-100">
            password123
          </p>
        </form>
      </>
    )
  );
};

export default LoginForm;
