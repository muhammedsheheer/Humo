import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-pathway text-5xl font-semibold text-[#fff] md:leading-[66px] lg:text-6xl">
                Welcome to Humo <br />
                An Elevated Flame-Fired Experience
              </h1>
              <p className="font-manrope font-normal text-[#9C9E9F]">
                Discover Humo — a refined fusion of bold, smoky flavours and
                modern culinary artistry. Inspired by the primal beauty of open
                flame cooking, our menu is crafted with precision, passion, and
                a reverence for exceptional ingredients. Whether you`re sipping
                signature cocktails or savouring our flame-grilled creations,
                every moment at Humo is designed to be unforgettable.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
