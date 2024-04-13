import React from "react";

const Input = (props) => {
  return (
    <div className="w-full">
      <label className="block text-gray-500 text-sm font-semibold mb-1">
        {props.title}
      </label>
      <input
        className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-fit"
        {...props}
      />
    </div>
  );
};

export default Input;
