
import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import axios from 'axios';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {

    const handleSpotifyAuth = async () => {
      try {

        const response = await axios.get('http://localhost:8456/auth/login');
        window.location.href = response.data;
      } catch (error) {
        // Handle errors
        console.error('Error fetching data from backend:', error);
      }
    }


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
              {/* We love music and stats. If you do too <Button variant="text" onClick={login}>sign in</Button> */}
              We love music and stats. If you do too <Button variant="text" onClick={handleSpotifyAuth}>Login into Spotify</Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;