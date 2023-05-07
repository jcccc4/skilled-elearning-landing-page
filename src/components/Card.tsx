import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  title: string;
  url: string;
  font: any;
  font2: any;
  font3: any;
}

export default function App(props: CardProps) {
  return (
    <div className=" mt-10 h-70.75  rounded-mid relative md:m-0 w-85.75 md:w-85 lg:w-87.5 lg:h-86.5">
      <div className="bg-white absolute px-7 top-6 left-0 h-64.75 w-85.75 md:w-85 rounded-mid lg:w-87.5 lg:h-80.5 lg:rounded-dsk" />
      <div className="absolute top-0 left-7 lg:w-72.5">
        <Image
          height={56}
          width={56}
          src={props.url}
          alt={"logo"}
          className="z-10"
        />
        <div
          className={`${props.font.variable} font-jakarta mt-6 lg:mt-8 lg:text-32`}
        >
          {props.title}
        </div>
        <div
          className={`${props.font2.variable} font-jakarta mt-4 lg:mt-6 lg:text-18 text-gray text-16v2 z-20`}
        >
          {props.children}
        </div>
        <div
          className={`${props.font3.variable} font-jakarta mt-6 lg:mt-8 lg:text-18 text-pink text-18 z-20 lg:absolute lg:top-63.5`}
        >
          Get Started
        </div>
      </div>
    </div>
  );
}
