import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[120px]">
          <h1 className="pb-6 text-center font-pathway text-3xl font-[400] uppercase tracking-[7px] text-[#EB9A3F] md:pb-16 md:text-5xl md:tracking-[14px]">
            SCROLL OUR STORY
          </h1>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              />
              <div>
                <Link
                  href={""}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#EB9A3F] md:text-xl"
                >
                  @humowatford
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
