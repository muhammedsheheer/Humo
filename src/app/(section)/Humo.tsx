import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Humo: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px]">
          <h1 className="pb-6 text-center font-pathway text-3xl font-[400] uppercase tracking-[7px] text-[#662200] md:pb-16 md:text-5xl md:tracking-[14px]">
            Humo
          </h1>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="relative w-full md:w-[25%]">
              <div className="absolute bottom-8 left-2 right-2">
                <motion.h1
                  className="text-center font-passion_one text-5xl font-[400] uppercase tracking-[10px] text-[#662200] md:text-6xl md:tracking-[14px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  £21 <br /> WEEKEND <br />
                  LUNCH
                </motion.h1>
              </div>
              <Image
                src={"/images/home/humo/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>

            <div className="relative w-full md:w-[25%]">
              <div className="absolute bottom-16 left-2 right-2 md:bottom-28">
                <motion.h1
                  className="text-center font-passion_one text-9xl font-[400] uppercase tracking-[-7px] text-[#662200] md:text-[130px] md:tracking-[-9px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  DJ
                </motion.h1>
              </div>{" "}
              <Image
                src={"/images/home/humo/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>
            <div className="relative w-full md:w-[50%]">
              <div className="absolute bottom-1 right-0">
                <motion.h1
                  className="text-right font-passion_one text-4xl font-[400] uppercase tracking-[7px] text-[#662200] md:text-6xl md:tracking-[7px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <span className="text-3xl text-[#662200] md:text-5xl">
                    £29.90
                  </span>{" "}
                  <br />
                  TUES-THURSDAY <br />
                  DINNERS
                </motion.h1>
              </div>{" "}
              <Image
                src={"/images/home/humo/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="relative flex w-full items-center justify-center md:w-[25%]">
              <div className="absolute bottom-1 left-2 right-2">
                <motion.h1
                  className="text-center font-passion_one text-6xl font-[400] uppercase tracking-[5px] text-[#662200] md:text-7xl md:tracking-[5px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Private <br />
                  booking
                </motion.h1>
              </div>{" "}
              <Image
                src={"/images/home/humo/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>
            <div className="relative w-full md:w-[50%]">
              <div className="absolute bottom-1 right-0 md:bottom-10">
                <motion.h1
                  className="text-center font-passion_one text-6xl font-[400] uppercase tracking-[7px] text-[#662200] md:text-7xl md:tracking-[7px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  THE <br />
                  TEXISH <br />
                  BBQ
                </motion.h1>
              </div>{" "}
              <Image
                src={"/images/home/humo/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
              />
            </div>

            <div className="relative md:w-[25%]">
              <div className="absolute bottom-1 right-0">
                <motion.h1
                  className="text-center font-passion_one text-6xl font-[400] uppercase tracking-[7px] text-[#662200] md:text-7xl md:tracking-[7px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  CORKAGE <br />
                  MONDAYS
                </motion.h1>
              </div>{" "}
              <Image
                src={"/images/home/humo/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-auto w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humo;
