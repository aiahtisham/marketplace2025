import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

export default function topsection2() {
  return (
    <div>
      <section
        className="bg-cover bg-center h-[882px] flex items-center"
        style={{ backgroundImage: 'url(/image/bgcontact.png)' }}
      >
        <div className="container mx-auto px-8">
          <div className="ml-10 lg:ml-40 text-white">
            <h5 className="text-[16px] text-[#252B42] font-bold mb-4">
              CONTACT US
            </h5>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] text-[#252B42] font-bold">
              GET IN TOUCH TODAY
            </h1>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] text-[#252B42] font-bold mb-6">
              TODAY !
            </h1>
            <h4 className="text-[16px] sm:text-[20px] text-[#252B42]">
              We know how large objects will act,
            </h4>
            <h4 className="text-[16px] sm:text-[20px] text-[#252B42] mb-4">
              but things on a small scale
            </h4>
            <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#252B42] font-bold mb-2">
              Phone ; +451 215 215
            </p>
            <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#252B42] font-bold mb-10">
              fax ; +451 215 215
            </p>
            <div className="flex gap-6 sm:gap-8 mb-10">
              <FaTwitter className="text-[#252B42] w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
              <IoLogoFacebook className="text-[#252B42] w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
              <FaInstagram className="text-[#252B42] w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
              <TiSocialLinkedin className="bg-[#252B42] text-white w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
