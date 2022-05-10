import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <div className="w-full h-20  flex justify-around items-center">
        <div className="logo w-1/3">Anish Shrestha ® 2022</div>
        <div className="social-media grid sm:flex items-center justify-around w-2/3 ">
          <div className="twitter hover:text-blue-600">
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </div>
          <div className="facebook hover:text-blue-300">
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </div>
          <div className="instagram hover:text-orange-200">
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </div>
        </div>
      </div>
    </>
  );
}
