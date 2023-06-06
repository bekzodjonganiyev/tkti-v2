import React from "react";

export const Loader = () => {
  return (
    <div className="container w-full mx-auto py-6 ">
      <div className="animate-pulse space-y-6 mb-10">
        <div className="h-6 bg-gray-400 rounded w-1/2"></div>
        <div className="h-6 bg-gray-400 rounded w-2/3"></div>
        <div className="h-6 bg-gray-400 rounded w-full"></div>
      </div>
      <div className="animate-pulse space-y-6 mb-10">
        <div className="h-6 bg-gray-400 rounded w-1/2"></div>
        <div className="h-6 bg-gray-400 rounded w-2/3"></div>
        <div className="h-6 bg-gray-400 rounded w-full"></div>
      </div>
      <div className="animate-pulse space-y-6">
        <div className="h-6 bg-gray-400 rounded w-1/2"></div>
        <div className="h-6 bg-gray-400 rounded w-2/3"></div>
        <div className="h-6 bg-gray-400 rounded w-full"></div>
      </div>
    </div>
  );
};