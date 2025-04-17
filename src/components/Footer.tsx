"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-black px-4 pt-12 lg:px-10 lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <div className="w-full border-b-[1px] border-b-white md:w-[45%]" />
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
          <div className="w-full border-b-[1px] border-b-white md:w-[45%]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Our Food
              </Link>
              <Link
                href={"/drinks"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Drinks menu{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Private DINING{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                What’s on{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Our policy{" "}
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Blog{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Press{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Contact us{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Career{" "}
              </Link>
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Find us{" "}
              </Link>
            </div>
          </div>
          <div className="mr-28 hidden h-[100px] w-full border-r-[1px] border-r-white md:block md:h-[200px] md:w-[10%]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-white"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href={""}
                  target="_blank"
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  2 Kendal Ave, London W3 0PA
                </Link>
                <Link
                  href={"mailto:info@novaparkroyal.com"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  info@novaparkroyal.com{" "}
                </Link>
                <Link
                  href={"tele:+442035001710"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  +44 20 3500 1710
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Opening hours
              </Link>
              <p className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start">
                Mon-Thurs 4pm-1am <br />
                Fri-Sat 12pm-3am <br />
                Sun 12pm-1am
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10">
          <Link href={""} target="_blank" className="text-white">
            <Icons.instagram />
          </Link>
          <Link href={""} target="_blank" className="text-white">
            <Icons.google />
          </Link>
          <Link href={""} target="_blank" className="text-white">
            <Icons.unknown />
          </Link>
          <Link href={""} target="_blank" className="text-white">
            <Icons.facebook />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="w-full border-b-[1px] border-b-white" />
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-white md:text-start">
              © 2025 Humo , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-white md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
