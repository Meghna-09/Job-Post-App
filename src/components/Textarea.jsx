import React from "react";

const Textarea = (props) => {
  return (
    <div className="w-full">
      <label className="block text-gray-500 text-sm font-semibold mb-1">
        {props.title}
      </label>
      <textarea
        className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-fit"
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
