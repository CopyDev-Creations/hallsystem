"use client"
import { Footer, HeroSection, LoadingContext, Section1, Section2 } from "@/components";
import { useContext, useEffect } from "react";

export default function Home() {
  let { stopLoading } = useContext(LoadingContext);

  useEffect(() => {
    stopLoading();
  }, [])

  return (
    <>
      <HeroSection />
      <main>
        <Section1 />
        <Section2 />
        {/* <h1>Lorem, ipsum.</h1>
        <h2>Lorem, ipsum.</h2>
        <h3>Lorem, ipsum.</h3>
        <h4>Lorem, ipsum.</h4>
        <p>Lorem, ipsum.</p>
        <i>Lorem, ipsum.</i><br />
        <b>Lorem, ipsum.</b> */}
      </main>
      <Footer />
    </>
  );
}
