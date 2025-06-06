"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Follow from "./(section)/Follow";
import Special from "./(section)/(special)/Special";
import Menu from "./(section)/Menu";
import Reviews from "./(section)/Review";
import Map from "./(section)/Map";
import Story from "./(section)/Story";
import Unique from "./(section)/Unique";
import Reserve from "./(section)/Reserve";
import Humo from "./(section)/Humo";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Story />
        <Unique />
        <Special />
        <Menu />
        <Reserve />
        <Humo />
        <Reviews />
        <Follow />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
