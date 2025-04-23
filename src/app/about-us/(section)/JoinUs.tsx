import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/4.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-pathway text-5xl text-[#fff] md:leading-[60px]">
            Experience Fire, Flavor & Elegance
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#ffff]">
            Whether you`re gathering for a romantic evening or a vibrant
            celebration, <strong>Humo</strong> invites you to indulge in a
            dining experience fueled by fire and crafted with care. Each dish is
            a celebration of smoke, flame, and refined technique—bringing
            together bold flavors and thoughtful presentation.
            <br />
            Join us and discover where passion meets the plate, and every bite
            ignites the senses.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
