import Image from "next/image";
import { Inter } from "next/font/google";
import { Counter } from "@/Components/Counter";
import { useState } from "react";
import { Toggle } from "@/Components/Toggle";
import { Stopwatch } from "@/Components/Stopwatch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [count, setCount] = useState(0);

  // function handlePlus() {
  //   setCount(count + 1);
  // }

  // function handleMinus() {
  //   if (count === 0) {
  //     return;
  //   } else {
  //     setCount(count - 1);
  //   }
  // }

  return (
    <div>
      <Stopwatch />
      {/* <div>
        <Counter count={count} plus={handlePlus} minus={handleMinus} />
      </div>
      <div>
        <Toggle />
      </div> */}
      <div>hididihefoisfhodjfs;gi</div>
    </div>
  );
}
