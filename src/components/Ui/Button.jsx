import React from "react";

const Button = ({ lebel }) => {
  return (
    <button
      href="#_"
      className="cursor-pointer inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
    >
      {lebel}
    </button>
  );
};

export default Button;
