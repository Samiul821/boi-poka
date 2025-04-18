import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-[100px] font-extrabold text-red-500">404</h1>
      <p className="text-2xl text-gray-700 mb-2">😕 Oops! Page Not Found</p>
      <p className="text-lg text-gray-600 mb-6">
        🚧 The page you're looking for doesn't exist.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="cursor-pointer px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
      >
        🔙 Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
