import React from "react";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export const RotatingImage = () => {
  return (
    <div className="relative hover:animate-spin">
      <Image
        src="/images/more-nuggets.png"
        width={620}
        height={480}
        alt="nugget"
      ></Image>
    </div>
  );
};
