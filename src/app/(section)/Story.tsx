import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 md:h-screen md:py-24">
      <div className="absolute right-[15%] top-[74%] hidden md:block">
        <Link href={"/table-booking"}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-10 uppercase"
              variant="imageoutline"
            >
              Book Now
            </Button>
          </motion.div>
        </Link>
      </div>

      <div className="absolute -top-60 left-0 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <Image
            src={"/images/home/reservation/bg2.png"}
            width={281}
            height={74}
            alt="image"
            className="h-[1200px] w-full"
          />
        </motion.div>
      </div>

      <div className="absolute left-[25%] top-[5%]">
        <motion.h6
          className="hidden text-center font-open_sans text-[500px] font-[400] uppercase md:block"
          style={{
            background: "linear-gradient(180deg, #FFA744 0.01%, #000 127.14%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, rotate: 45 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          H
        </motion.h6>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 md:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        >
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
            THE HEART BEHIND OUR PLATES
          </h6>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 md:ml-[20%] md:flex-row md:items-start md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <p className="w-full max-w-[350px] font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-lg">
            Nestled in the heart of Watford, Humo is a vibrant firehouse
            restaurant that brings the bold flavours of Spain to your plate. Our
            name, meaning smoke in Spanish, reflects our passion for open-flame
            cooking. At Humo, every dish is crafted over wood and charcoal,
            infusing meats, seafood, and seasonal vegetables with rich, smoky
            depth and irresistible aroma. We blend tradition with innovation,
            offering a menu that celebrates Spanish culinary heritage—from
            perfectly crisp croquettes to chargrilled delicacies and signature
            tapas.
          </p>
          <div className="flex items-center justify-center md:hidden">
            <Link href={"/table-booking"}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
              >
                <Button
                  className="relative z-50 mt-4 flex items-center justify-center gap-3 px-10 py-10 uppercase"
                  variant="imageoutline"
                >
                  Book Now
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
