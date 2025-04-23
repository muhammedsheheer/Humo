// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Sidebar from "./SideBar";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const Navbar = ({
//   position = "static",
// }: {
//   position?: "static" | "fixed" | "absolute";
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   useEffect(() => {
//     const d = localStorage.getItem("positiond");
//     if (d !== null) {
//       setPositiond(d);
//     }
//   }, []);
//   const [positiond, setPositiond] = useState<string>("");
//   useEffect(() => {
//     if (positiond) {
//       localStorage.setItem("positiond", positiond);
//     }
//   }, [positiond]);
//   const pathname = usePathname();
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav
//       className={cn(
//         `${position} top-5 z-50 h-[10vh] w-full pt-4 md:top-0 md:-mt-4`,
//         pathname === "/menu" && "bg-menubackground pt-4",
//         pathname !== "/" && `${position} top-5 z-50 h-[10vh] w-full pt-4`,
//       )}
//     >
//       {/*big screen */}
//       <div
//         className={
//           // pathname === "/"
//           //   ?
//             "hidden px-4 pt-0 md:block md:px-0"
//             // : "px-4 pt-0 md:px-[50px] 2xl:px-[140px]"
//         }
//       >
//         <div
//           className={
//             // pathname === "/"
//             //   ?
//                "flex flex-row items-center justify-between bg-[#67431C] px-12 py-3"
//               // : "flex flex-row items-center justify-center"
//           }
//         >
//           <Image
//             src="/images/logo.png"
//             width={552}
//             height={261}
//             alt="logo"
//             className="w-24 bg-black p-3"
//           />
//           <div
//             className={
//               pathname === "/"
//                 ?
//                 "mt-2 flex flex-row items-center justify-center gap-14"
//                 : "mt-2 flex flex-row items-center justify-center gap-14"
//             }
//           >
//             <Link
//               href={"/"}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               Home
//             </Link>
//             <Link
//               href={"/menu"}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               Menu
//             </Link>
//             <Link
//               href={"/about-us"}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               About
//             </Link>
//             <Link
//               href={""}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               Food & Drinks
//             </Link>
//             <Link
//               href={"/table-booking"}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               Reservation
//             </Link>
//             {/* <Link
//               href={"/contact"}
//               className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
//             >
//               <Image
//                 src={"/images/home/hero/dot.svg"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="h-5 w-2"
//               />{" "}
//               Contact Us
//               </Link> */}
//           </div>
//           <Link href="/contact">
//             <Button className="rounded-none bg-black px-6 py-6 hover:bg-black">
//               Contact Us
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/*mobile screen */}
//       <div className="block px-4 md:hidden md:px-20">
//         <div className="flex flex-row items-center justify-between">
//           <div>
//             <Link href={"/"}>
//               <Image
//                 src={"/images/home/hero/logo.png"}
//                 width={281}
//                 height={74}
//                 alt="logo"
//                 className="w-20"
//               />
//             </Link>
//           </div>
//           <div>
//             <Sidebar>
//               <Button
//                 variant="ghost"
//                 className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
//               >
//                 <div className="flex flex-row gap-2">
//                   <EqualizerIcon />
//                 </div>
//               </Button>
//             </Sidebar>{" "}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// const EqualizerIcon: React.FC = () => {
//   return (
//     <div className="equalizer-icon rotate text-[#fff]">
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//   );
// };

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "fixed",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        `fixed top-0 z-50 w-full transition-all duration-300 ease-in-out`,
        scrollY > 50 ? "bg-black shadow-md" : "bg-transparent",
        pathname === "/menu" && "bg-menubackground pt-4",
      )}
    >
      <div className="hidden px-4 pt-0 md:block md:px-0">
        <div className="flex flex-row items-center justify-between bg-[#662200] px-12 py-3">
          <Image
            src="/images/logo.png"
            width={552}
            height={261}
            alt="logo"
            className="w-24 bg-black p-3"
          />
          <div className="mt-2 flex flex-row items-center justify-center gap-14">
            <NavLink href="/" label="Home" />
            <NavLink href="/menu" label="Menu" />
            <NavLink href="/about-us" label="About" />
            <NavLink href="" label="Food & Drinks" />
            <NavLink href="/table-booking" label="Reservation" />
          </div>
          <Link href="/contact">
            <Button className="rounded-none bg-black px-6 py-6 hover:bg-black">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="block px-4 py-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src="/images/home/hero/logo.png"
              width={281}
              height={74}
              alt="logo"
              className="w-20"
            />
          </Link>
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <div className="flex flex-row gap-2">
                <EqualizerIcon />
              </div>
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
  >
    <Image
      src="/images/home/hero/dot.svg"
      width={281}
      height={74}
      alt="dot"
      className="h-5 w-2"
    />
    {label}
  </Link>
);

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#fff]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
