import React from "react";
import Style from "../../styles/Projects/projects.module.scss";
import { Image } from "next/image";

export default function projects() {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className="flex justify-between bg-red-300 items-center w-full">
          <a
            className="w-2/4 self-center text-center"
            target="_blank"
            href="https://anish-ecommerce.netlify.app"
          >
            <Image src="/anishPotrait.jpg" height="500px" width="600px" />
            Ecommerce
          </a>
          <a
            className="w-2/4 self-center text-center"
            target="_blank"
            href="https://news-portal-hd39p6rd6-shresthanishcom.vercel.app/specificnews/2022-04-21T03:30:27Z"
          >
            NewsPortal
          </a>
        </div>
      </div>
    </>
  );
}
