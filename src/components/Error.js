import React from "react";

function Error({ error }) {
  return (
    <div className="bg-red-600 text-white p-6 my-4  shadow-md">
      <div className="flex items-center">
        <p className="font-semibold">{error}</p>
      </div>
    </div>
  );
}

export default Error;
