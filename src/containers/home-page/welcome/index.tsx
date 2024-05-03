
import { Button } from "@mui/material";
import React, { FC } from "react";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className=" flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="flex flex-col items-center w-full md:max-w-[800px] text-center gap-8">
          <div className="relative flex">
            <h1 className="text-2xl md:text-6xl text-black font-bold">
              Welcome to Wobble
            </h1>
          </div>
          <div>
            <p className="text-textColor text-sm md:text-lg">
              We love music and stats. If you do too <Button variant="text">sign in</Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;