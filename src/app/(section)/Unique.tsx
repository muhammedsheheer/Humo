import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Unique: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] py-12 md:py-28">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <h6
            className="text-center font-pathway text-4xl font-[400] uppercase tracking-[8px] md:text-5xl md:tracking-[14px]"
            style={{
              background:
                "linear-gradient(357deg, #000 -56.07%, #FFA744 129.41%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            from humo to you
          </h6>
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <p className="w-full max-w-[570px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-base">
              Whether you`re joining us for a laid-back lunch, a curated
              three-course weekday dinner, or one of our lively DJ nights, Humo
              promises an unforgettable dining experience full of warmth,
              flavour, and fire.
            </p>
          </div>
        </div>{" "}
        <div className="flex w-full flex-col gap-4 px-4 pt-8 md:flex-row md:px-10">
          <motion.div
            className="w-full md:w-[28%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full md:h-full"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-[44%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full md:h-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[28%]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full md:h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
