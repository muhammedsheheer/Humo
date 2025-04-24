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
        {/*big screen */}
        <div className="hidden flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            {/* <div className="flex flex-col items-center gap-3 md:items-start">
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
            </div> */}
            <div className="flex flex-col items-center justify-center gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                About{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Booking{" "}
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
                  href={"https://maps.app.goo.gl/5USFZV98LGhcRN5A8"}
                  target="_blank"
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  HUMO WATFORD 9 KING STREET <br />
                  WATFORD WD18 0BW
                </Link>
                <Link
                  href={"mailto:info@humowatford.com"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  info@humowatford.com
                </Link>
                <Link
                  href={"tele:+44(0)1923586128"}
                  className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  +44(0)1923586128
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
                Mon-Thu 17:00 to 22:30
                <br />
                Fri 17:00 to 00:30
                <br />
                Sat 12:00 to 00:00
              </p>
            </div>
          </div>
        </div>
        {/* mobile screen */}

        <div className="flex flex-col items-start justify-start gap-4 md:hidden md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-col items-start justify-start gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            {/* <div className="flex flex-col items-start gap-3 md:items-start">
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
            </div> */}
            <div className="flex flex-col items-start justify-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                About{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Booking{" "}
              </Link>
            </div>
          </div>
          <div className="mr-28 hidden h-[100px] w-full border-r-[1px] border-r-white md:block md:h-[200px] md:w-[10%]" />
          <div className="flex w-full flex-col items-end justify-end gap-8 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-end gap-3 md:items-start">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-white"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Link
                  href={"https://maps.app.goo.gl/5USFZV98LGhcRN5A8"}
                  target="_blank"
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  HUMO WATFORD 9 KING STREET <br />
                  WATFORD WD18 0BW
                </Link>
                <Link
                  href={"mailto:info@humowatford.com"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  info@humowatford.com
                </Link>
                <Link
                  href={"tele:+44(0)1923586128"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start"
                >
                  +44(0)1923586128
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white"
              >
                Opening hours
              </Link>
              <p className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-white md:text-start">
                Mon-Thu 17:00 to 22:30
                <br />
                Fri 17:00 to 00:30
                <br />
                Sat 12:00 to 00:00
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/humowatford/?hl=en-gb"}
            target="_blank"
            className="text-[#fff]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://maps.app.goo.gl/5USFZV98LGhcRN5A8"}
            target="_blank"
            className="text-white"
          >
            <Icons.google />
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
