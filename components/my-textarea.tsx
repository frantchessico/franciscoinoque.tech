import React, { TextareaHTMLAttributes } from 'react';

interface MyTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const MyTextArea: React.FC<MyTextAreaProps> = ({ label, ...textareaProps }) => {
  return (
    <div>
      <label htmlFor={textareaProps.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        {...textareaProps}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default MyTextArea;
