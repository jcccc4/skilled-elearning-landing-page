import Image from "next/image";
import Card from "../components/Card";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-jakarta",
});
const jakarta_extraBold = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-jakarta",
});
const jakarta_medium = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-jakarta",
});
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="h-12 flex items-center justify-between mt-4 mx-4 md:mt-6 md:mx-10 lg:mx-41.25 lg:mt-11.25">
        <Image
          height={35}
          width={89}
          src={"skilled-elearning-landing-page/assets/logo-dark.svg"}
          alt={"logo"}
          className="lg:hidden"
        />
        <div
          className={`hidden lg:block ${jakarta_extraBold.variable} font-jakarta text-4xl`}
        >
          skilled
        </div>
        <button
          type="submit"
          className={`${jakarta.variable} font-jakarta text-18 h-full w-35 rounded-full bg-dark-blue text-white lg:h-14 lg:w-41.75`}
        >
          Get Started
        </button>
      </div>
      <div className="md:w-99.5">
        <div
          className={`${jakarta_extraBold.variable} font-jakarta mt-9.5 text-40 mx-4 md:mt-25 md:w-81.5 md:m-10 lg:mx-41.25 lg:text-56 lg:w-114.25 lg:mt-44.5`}
        >
          Maximize skill, minimize budget
        </div>
        <div
          className={`${jakarta_medium.variable} font-jakarta mt-6.5 text-16v2 text-gray mx-4 md:ml-10 md:mr-0 lg:mx-41.25 lg:w-114.25 lg:text-18 lg:mt-7.25`}
        >
          Our modern courses across a range of <br className="md:hidden" />
          in-demand skills will give you the knowledge you need to live{" "}
          <br className="hidden lg:inline" />
          the life you want.
        </div>
        <button
          className={`${jakarta.variable} font-jakarta mt-6 h-14 w-41.75 bg-gradient-to-t from-gradient-start-a to-gradient-end-a rounded-full text-white mx-4 md:mx-10 lg:mt-10 lg:mx-41.25`}
        >
          Get Started
        </button>
      </div>
      <Image
        height={301}
        width={327}
        src={"skilled-elearning-landing-page/assets/image-hero-mobile@2x.png"}
        alt={"hero"}
        className="m-auto mt-11.5 md:hidden"
      />

      <Image
        height={640}
        width={640.71}
        src={"skilled-elearning-landing-page/assets/image-hero-tablet@2x.webp"}
        alt={"hero"}
        className="hidden md:inline md:absolute md:top-pic-y md:left-pic-x lg:hidden "
      />
      <Image
        height={936.92}
        width={991.63}
        src={"skilled-elearning-landing-page/assets/image-hero-desktop@2x.webp"}
        alt={"hero"}
        className="hidden lg:inline lg:absolute lg:top-pic-y-dsk left-pic-x-dsk"
      />
      <div className="bg-gradient-to-b from-white to-light-blue w-screen pb-20 md:pb-21.5 lg:pb-35">
        <div className=" flex flex-col items-center md:flex-row md:mx-0 md:justify-center  md:flex-wrap md:gap-x-2.5 md:gap-y-8 md:mt-46.5 lg:mx-41.25 lg:w-277.5  ">
          <div
            className={`${jakarta_extraBold.variable} font-jakarta bg-gradient-to-t from-gradient-start-a to-gradient-end-a h-30 rounded-mid text-white text-24 pt-6 px-7 w-85.75 md:w-85 md:mt-6 md:h-64.75 lg:w-87.5 lg:h-80.5 lg:text-32 lg:pt-16 lg:px-8 lg:rounded-dsk`}
          >
            Check out our most popular courses!
          </div>
          <Card
            title="Animation"
            url="skilled-elearning-landing-page/assets/icon-animation.svg"
            font={jakarta_extraBold}
            font2={jakarta_medium}
            font3={jakarta}
          >
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </Card>
          <Card
            title="Design"
            url="skilled-elearning-landing-page/assets/icon-design.svg"
            font={jakarta_extraBold}
            font2={jakarta_medium}
            font3={jakarta}
          >
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </Card>
          <Card
            title="Photography"
            url="skilled-elearning-landing-page/assets/icon-photography.svg"
            font={jakarta_extraBold}
            font2={jakarta_medium}
            font3={jakarta}
          >
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </Card>
          <Card
            title="Crypto"
            url="skilled-elearning-landing-page/assets/icon-crypto.svg"
            font={jakarta_extraBold}
            font2={jakarta_medium}
            font3={jakarta}
          >
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </Card>
          <Card
            title="Business"
            url="skilled-elearning-landing-page/assets/icon-business.svg"
            font={jakarta_extraBold}
            font2={jakarta_medium}
            font3={jakarta}
          >
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </Card>
        </div>
      </div>
      <footer className="h-30 bg-dark-blue  flex items-center justify-between px-4  md:px-10 lg:mt-35 lg:px-41.25">
        <Image
          height={35}
          width={89}
          src={"skilled-elearning-landing-page/assets/logo-light.svg"}
          alt={"logo"}
          className="lg:hidden"
        />
<div
          className={`hidden lg:block ${jakarta_extraBold.variable} font-jakarta text-4xl text-white  `}
        >
          skilled
        </div>
        <button
          className={`${jakarta.variable} font-jakarta bg-gradient-to-b from-gradient-start-b to-gradient-end-b rounded-full text-white h-12 w-35 lg:h-14 lg:w-41.75`}
        >
          Get Started
        </button>
      </footer>
    </main>
  );
}
