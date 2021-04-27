import React from 'react';
import { useGlobalContext } from '../context/context';

const Result = () => {
  const { isLogIn, convertedValue } = useGlobalContext();
  return (
    isLogIn && (
      <div className="w-96 m-auto mt-8">
        <p className="text-lg text-gray-100">Result:</p>
        <p className="text-lg text-gray-100">{convertedValue}</p>
      </div>
    )
  );
};

export default Result;
