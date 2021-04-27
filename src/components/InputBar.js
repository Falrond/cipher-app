import React from 'react';
import { useGlobalContext } from '../context/context';

const InputBar = () => {
  const {
    isLogIn,
    taskType,
    setTaskType,
    valueInput,
    setValueInput,
    handleCipher,
  } = useGlobalContext();
  return (
    isLogIn && (
      <>
        <form className=" p-4 w-96   m-auto flex flex-col ">
          <div className="flex p-4 text-gray-100">
            <div className="px-2">
              <input
                checked={taskType === 'encrypt'}
                onChange={e => setTaskType(e.target.value)}
                type="radio"
                value="encrypt"
              />{' '}
              Encrypt
            </div>
            <div className="px-2">
              <input
                checked={taskType === 'decrypt'}
                onChange={e => setTaskType(e.target.value)}
                type="radio"
                value="decrypt"
              />{' '}
              Decrypt
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              className="focus:outline-none text-lg p-1 "
              type="text"
              placeholder={
                taskType === 'encrypt' ? 'plain text' : 'encrypted text '
              }
              value={valueInput}
              onChange={e => setValueInput(e.target.value)}
            />
            <button
              className="btn text-gray-100  ml-4 py-1 px-4 border-2 hover:bg-gray-100 hover:text-gray-600 transition-all "
              type="submit"
              onClick={handleCipher}
            >
              {taskType === 'encrypt' ? 'Encrypt' : 'Decrypt'}
            </button>
          </div>
        </form>
      </>
    )
  );
};

export default InputBar;
