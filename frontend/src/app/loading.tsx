import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <span className="loading loading-ring loading-xl"></span>
      <h1 className="text-4xl py-10">Loading.....</h1>
    </div>
  );
};

export default Loading;
