import React from "react";
import { BiError } from "react-icons/bi";

const ErrorSnackBar = ({ errorText }) => {
  return (
    <div className='flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-center w-12 bg-red-500'>
        <BiError className='w-6 h-6 text-white fill-current' />
      </div>

      <div className='px-4 py-2 -mx-3'>
        <div className='mx-3'>
          <span className='font-semibold text-red-500 dark:text-red-400'>
            Error
          </span>
          <p className='text-sm text-gray-600 dark:text-gray-200'>
            {errorText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorSnackBar;
