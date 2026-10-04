import Image from "next/image";
import Hero from "./_components/pages/Hero";
import Features from "./_components/pages/Features";
import HowItWroks from "./_components/pages/HowItWroks";
import Example from "./_components/pages/Example";
import ShowDeshBoard from "./_components/pages/ShowDeshBoard";
import UseCases from "./_components/pages/useCases";
import Why from "./_components/pages/why";
import Pricing from "./_components/pages/Pricing";
import FAQ from "./_components/pages/FAQ";
import Contact from "./_components/pages/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWroks/>
      <Example/>
      <ShowDeshBoard/>
      <UseCases/>
      <Why/>
      <Pricing/>
      <FAQ/>
      <Contact/>
    </>
  );
}
