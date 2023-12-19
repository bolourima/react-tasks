import React from "react";

export const Counter = (props) => {
  return (
    <div className="h-[750px] text-5xl flex gap-3 justify-center items-center">
      <button className="mr-12 h-16 w-16 bg-orange-400 " onClick={props.plus}>+</button>
      <p className="flex items-center justify-center">{props.count}</p>
      <button className="ml-12 h-16 w-16 bg-orange-400" onClick={props.minus}>-</button>
    </div>
  );
};
