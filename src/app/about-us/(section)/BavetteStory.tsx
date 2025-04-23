import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <h2 className="text-center font-pathway text-5xl text-[#fff] md:left-[15%] md:text-8xl">
          The Humo
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-pathway text-5xl text-[#fff] md:text-start md:text-7xl">
              From Flame
              <br />
              to Fine Dining
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#9C9E9F] md:text-start">
              What began as a passion for open-fire cooking has evolved into{" "}
              <strong>Humo</strong>—a bold culinary concept where smoke, flavor,
              and finesse converge. Born from a desire to elevate traditional
              grilling into an art form, Humo was created to reimagine the
              dining experience through fire and innovation.
              <br />
              <br />
              Every dish is a tribute to flame — delicately smoked, charred to
              perfection, and infused with depth. From intimate dinners to
              lively gatherings, Humo offers more than just a meal—it offers a
              sensory journey.
              <br />
              <br />
              As we continue to refine our craft, our commitment remains: to
              ignite palates, spark connection, and bring guests a truly
              unforgettable experience—where every moment is touched by fire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
