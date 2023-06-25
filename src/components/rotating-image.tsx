import React from "react";
import Image from "next/image";

export const RotatingImage = () => {
  return (
    <div className="relative hover:animate-spin">
      <Image
        src="/images/more-nuggets.png"
        width={420}
        height={280}
        alt="nugget"
      ></Image>
    </div>
  );
};
