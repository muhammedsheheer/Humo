import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  return (
    <section
      className="relative h-full w-full bg-[#FFF] pt-12 md:pt-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(153,96,32,0.60) -77.68%, #33200B 100%)",
      }}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h6 className="text-center font-pathway text-4xl font-[400] uppercase tracking-[8px] text-[#fff] md:text-5xl md:tracking-[14px]">
            OUR MENU
          </h6>
        </div>{" "}
        <div className="flex w-full flex-col gap-4 px-4 pt-8 md:flex-row md:px-0">
          <div className="w-full rounded-t-full bg-[#000] md:mt-14 md:w-[30%]">
            <motion.img
              src={"/images/home/story/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="py-6">
              <h1 className="text-center font-inter text-xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[4px]">
                cocktails & spirits
              </h1>
            </div>
          </div>

          <div className="w-full rounded-t-full bg-[#000] pl-6 pr-6 pt-6 md:w-[40%] md:pl-12 md:pr-12 md:pt-12">
            <motion.img
              src={"/images/home/story/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full md:mt-8"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="py-6 md:mt-6">
              <h1 className="text-center font-inter text-xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[4px]">
                Wine list
              </h1>
            </div>
          </div>
          <div className="w-full rounded-t-full bg-[#000] md:mt-14 md:w-[30%]">
            <motion.img
              src={"/images/home/story/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="py-6">
              <h1 className="text-center font-inter text-xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[4px]">
                A la carte
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
