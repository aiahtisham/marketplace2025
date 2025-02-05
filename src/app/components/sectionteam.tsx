import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function sectionteam(){
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0 mb-20">
        <div className="flex flex-col items-center">
          <img
            src="image/t1.png"
            alt="Team Member"
            className="w-full max-w-xs mb-4"
          />
          <p className="font-bold">Username</p>
          <p className="text-gray-500">Profession</p>
          <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
            <FaFacebook className="text size-5 mr-3"/>
            <FaInstagram className="text size-5 mr-3 ml-2"/>
            <FaTwitter className="text size-5 mr-3"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="image/t2.jpg"
            alt="Team Member"
            className="w-full max-w-xs mb-4"
          />
          <p className="font-bold">Username</p>
          <p className="text-gray-500">Profession</p>
          <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
            <FaFacebook className="text size-5 mr-3"/>
            <FaInstagram className="text size-5 mr-3 ml-2"/>
            <FaTwitter className="text size-5 mr-3"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="image/t3.png"
            alt="Team Member"
            className="w-full max-w-xs mb-4"
          />
          <p className="font-bold">Username</p>
          <p className="text-gray-500">Profession</p>
          <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
            <FaFacebook className="text size-5 mr-3"/>
            <FaInstagram className="text size-5 mr-3 ml-2"/>
            <FaTwitter className="text size-5 mr-3"/>
          </div>
        </div>
      </div>
    </div>
  )
}