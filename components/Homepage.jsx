import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

import Style from "../styles/Homepage.module.scss";

export default function HomePage() {
  return (
    <>
      <div className="image-container flex justify-between">
        <div className="text-container self-center">
          <Parallax translateX={["-100px", "200px"]}>
            <h1 className="text-4xl md:text-7xl">Hi! I am Anish Shrestha. </h1>
          </Parallax>
        </div>
        <Image
          src="/anishPotrait.png"
          alt="anish photo"
          height="500px"
          width="300px"
        />
      </div>
      <ParallaxBanner
        layers={[{ image: "/jamichen.jpg", speed: -25 }]}
        className="aspect-[2/1]"
        style={{ height: "100%" }}
      ></ParallaxBanner>
    </>
  );
}
