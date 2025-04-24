"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] py-12">
      <div className="absolute inset-0">
        <Image
          src={"/images/home/reservation/bg1.png"}
          width={281}
          height={74}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-[8%] top-16 z-40 hidden md:block">
        <Link href={"/menu"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-10 uppercase text-[#fff]"
            variant="imageInverted"
          >
            View Menu
          </Button>
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.h6
                className="text-center font-pathway text-4xl font-[400] uppercase tracking-[8px] md:text-5xl md:tracking-[14px]"
                style={{
                  background:
                    "linear-gradient(357deg, #000 -56.07%, #FFA744 129.41%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                HUMO IS SMOKE
              </motion.h6>
              <Link href={"/menu"}>
                <Button
                  className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-10 uppercase text-[#fff] md:hidden"
                  variant="imageInverted"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-40 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
