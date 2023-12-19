import React, { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  function onOfButton() {
    setToggle(!toggle);
  }
  return (
    <div className="flex justify-center">
      <div
        onClick={onOfButton}
        className={`flex text-4xl justify-center w-20 items-center ${
          toggle ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {toggle ? "On" : "Off"}
      </div>
    </div>
  );
};
