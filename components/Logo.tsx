import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <Image
        src="/faredgecollection.png"
        alt="logo"
        width={200}
        height={100}
        className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-auto object-contain"
      />
    </div>
  );
};

export default Logo;
