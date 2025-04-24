import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] py-12 md:py-24">
      <div className="flex h-full w-full justify-center bg-[url('/images/home/reservation/bg.png')] bg-cover bg-center bg-no-repeat">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 rounded-t-full bg-[#000] px-8 py-20 md:mt-20 md:gap-6 md:px-28 md:py-48"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-center font-pathway text-xl font-[400] uppercase tracking-[5px] text-[#FFA746] md:text-3xl md:tracking-[8px]">
            Reserve <br />
            Your Table
          </h1>
          <p className="max-w-[450px] text-center font-inter text-sm font-[300] text-[rgba(255,255,255,0.60)] md:text-base">
            Ready to experience the fire and flavor of Humo? Book your table
            today and enjoy a unique dining experience where Spanish-inspired
            cuisine meets flame-grilled perfection. Whether it`s a casual
            dinner, a weekend celebration, or a night out with friends, we’ve
            got the perfect spot waiting for you.
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-10 uppercase"
                variant="imageoutline"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
