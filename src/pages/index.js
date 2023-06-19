import Head from "next/head";

import HeroSection from "@/components/heroSection";
import Gfx from "@/components/uiux";
import ContactSection from "@/components/contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

import DevProjects from "@/components/dev";
import Blog from "@/components/blog";
import UXResearch from "../components/uxResearch"
  
export default function Home() {
  const { asPath } = useRouter();
  useEffect(() => {
    if (asPath.includes("scrollToContact")) {
      scroller.scrollTo("contact", {
        delay: 150,
        duration: 1500,
        smooth: "easeInOutQuint",
      });
    }
  });
  return (
    <>
      <main>
        <HeroSection />
        <DevProjects />
        <UXResearch />
        <Gfx />
        {/* <Gfx /> */}

        {/* <Blog /> */}
        <ContactSection />
      </main>
    </>
  );
}
