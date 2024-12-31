import React from "react";
import Navbar from "./Navbar";
import { Header } from "./Header";

export const BgVideo = () => {
  return (
    <>
      <video
        src={video}
        className=" h-[100%] w-[100%]  mix-blend-soft-light absolute md:block hidden p-0"
        autoPlay
        muted
        loop
    
      ></video>
      <Navbar />
      <Header />
    </>
  );
};

