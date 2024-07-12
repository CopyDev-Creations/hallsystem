"use client"
import { HeroSection, LoadingContext, Section1, Section2, Section3, Section4 } from "@/components";
import { useContext, useEffect } from "react";

export default function Home() {
  let { stopLoading } = useContext(LoadingContext);

  useEffect(() => {
    stopLoading();
  }, [])

  return (
    <>
      <main>
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}
