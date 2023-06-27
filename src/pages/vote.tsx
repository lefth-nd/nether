import React from "react";
import Image from "next/image";
import { api } from "~/utils/api";

export default function Vote() {
  const main =
    "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ff0b0b] to-[#116675]";

  const btn =
    "rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20 mt-8";

  const first = "/images/basic-nugget.png";

  const second = "/images/pizza.png";

  const name = api.foods.food.useQuery();
  console.log(name.data);

  return (
    <div className={main}>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Chicken <span className="text-[hsl(49,86%,58%)] ">Nugget</span> App
        </h1>
      </div>
      <div className="">
        <h1 className="tracking-tigt text-2xl font-bold text-white sm:text-[2rem]">
          Choose your favourite!
        </h1>
      </div>
      <div className="mt-11 grid grid-cols-2 grid-rows-1 gap-4">
        <div className="text-center">
          <div className="">
            <Image src={first} width={320} height={320} alt="nugget"></Image>
          </div>
          <button className={btn}>Vote</button>
        </div>
        <div className="text-center">
          <div className="">
            <Image src={second} width={320} height={320} alt="other"></Image>
          </div>
          <p>{}</p>
          <button className={btn}>Vote</button>
        </div>
      </div>
    </div>
  );
}
