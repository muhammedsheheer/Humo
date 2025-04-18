import Image from "next/image";
import React from "react";

const Humo: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px]">
          <h1 className="pb-6 text-center font-pathway text-3xl font-[400] uppercase tracking-[7px] text-[#EB9A3F] md:pb-16 md:text-5xl md:tracking-[14px]">
            Humo
          </h1>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="relative w-full md:w-[25%]">
              <div className="absolute bottom-8 left-2 right-2">
                <h1 className="font-passion_one text-center text-5xl font-[400] uppercase tracking-[10px] text-[#FFC015] md:text-6xl md:tracking-[14px]">
                  £21 <br /> WEEKEND <br />
                  LUNCH
                </h1>
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
                <h1 className="font-passion_one text-center text-9xl font-[400] uppercase tracking-[-7px] text-[#FFC015] md:text-[130px] md:tracking-[-9px]">
                  DJ
                </h1>
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
                <h1 className="font-passion_one text-right text-4xl font-[400] uppercase tracking-[7px] text-[#FFC015] md:text-6xl md:tracking-[7px]">
                  <span className="text-3xl text-[#fff] md:text-5xl">
                    £29.90
                  </span>{" "}
                  <br />
                  TUES-THURSDAY <br />
                  DINNERS
                </h1>
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
                <h1 className="font-passion_one text-center text-6xl font-[400] uppercase tracking-[5px] text-[#FFC015] md:text-7xl md:tracking-[5px]">
                  Private <br />
                  booking
                </h1>
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
                <h1 className="font-passion_one text-center text-6xl font-[400] uppercase tracking-[7px] text-[#FFC015] md:text-7xl md:tracking-[7px]">
                  THE <br />
                  TEXISH <br />
                  BBQ
                </h1>
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
                <h1 className="font-passion_one text-center text-6xl font-[400] uppercase tracking-[7px] text-[#FFC015] md:text-7xl md:tracking-[7px]">
                  CORKAGE <br />
                  MONDAYS
                </h1>
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
