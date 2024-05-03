"use client";
import axios, { AxiosResponse } from "axios";

import Welcome from "@/containers/home-page/welcome";

const fetchData = async (): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.get("/api");
    console.log(response.data);
  } catch (error: any) {
    console.error("Error fetching data:", error);
  }
};

export default function Home() {
// this is where the page loads on
  return (
    <main>
      <Welcome />
    </main>

  );
}
