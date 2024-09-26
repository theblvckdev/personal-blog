import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link
        href={"/"}
        className="no-underline text-blue-500 text-3xl font-semibold"
      >
        Lexio Labs
      </Link>
    </>
  );
};

export default Logo;
