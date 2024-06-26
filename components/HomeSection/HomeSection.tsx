import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SeeMore from "./SeeMore";

function HomeSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center relative">
      <div className="bg-primary w-[200px] absolute h-full -left-[100px]  blur-[200px] opacity-50" />
      <div className="bg-primary w-[200px] absolute h-full -right-[100px]  blur-[200px] opacity-50" />
      <div className="container flex flex-col gap-10 h-screen items-center justify-center relative">
        <h1 className="w-[90%] sm:w-auto text-[48px] md:text-[52px] lg:text-[72px] leading-[120%] md:tracking-[-2.16px] tracking-[-1.44px] text-center">
          Leading the Crypto Revolution with{" "}
          <span className="text-gradient">AI Solutions</span>
        </h1>
        <div className="flex justify-center">
          <p className="w-[90%] sm:w-auto text-gray max-w-[577px] text-center md:text-[24px] text-[18px]">
            Start building the future of cryptocurrency today with our AI
            solutions
          </p>
        </div>
        <div className="flex justify-center gap-8 relative flex-col sm:flex-row w-full  items-center">
          <button className="custom_gradient_box relative p-2 w-[90%] sm:w-auto">
            <Link
              href="/build"
              className=" btn z-10 flex gap-2 relative items-center justify-center text-[14px] !text-center leading-8 md:text-lg"
            >
              Start Building <FaArrowRight />
            </Link>
          </button>
          <button className="w-[90%] sm:w-auto">
            <Link
              href="/explore"
              className="btn flex gap-2 items-center border-white border-2 justify-center !bg-transparent !text-white text-[14px] leading-8 md:text-lg"
            >
              Explore <FaArrowRight />
            </Link>
          </button>
        </div>
        <div>
          <SeeMore />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
