import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="mt-1 ml-1">
      <Image
        src="/qadron-merch-logo.svg"
        alt="qadron merch"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Logo;
