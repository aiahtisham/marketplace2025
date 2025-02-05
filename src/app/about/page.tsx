import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Btsection from "../components/btsection";
import Footer from "../components/footer";
import Logosection from "../components/logosection";
import Topsection from "../components/topsection";
import Navbar2 from "../components/navbar2";

export default function about() {
  return (
    <div>
      <header>
        <Navbar2 />
      </header>
      <div className="mb-14">
        <Topsection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4">
        <div className="text-white">
          <p className="text-[14px] text-[#E74040] mb-4">Problem trying</p>
          <h2 className="text-[20px] md:text-[24px] text-[#252B42] font-bold">Met minim Mollie non desert</h2>
          <h2 className="text-[20px] md:text-[24px] text-[#252B42] font-bold">Alamo est sit cliquey dolor do</h2>
          <h2 className="text-[20px] md:text-[24px] text-[#252B42] font-bold mb-6">met sent.</h2>
        </div>
        <div>
          <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between the two major realms of</p>
          <p className="text-[14px] text-[#737373]">Classical physics: Newtonian mechanics</p>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center mt-20 mb-20">
        <div>
          <h3 className="text-[48px] md:text-[58px] font-bold text-[#252B42]">15K</h3>
          <p className="text-[#737373] font-bold text-[16px]">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-[48px] md:text-[58px] font-bold text-[#252B42]">150K</h3>
          <p className="text-[#737373] font-bold text-[16px]">Monthly Visitors</p>
        </div>
        <div>
          <h3 className="text-[48px] md:text-[58px] font-bold text-[#252B42]">15</h3>
          <p className="text-[#737373] font-bold text-[16px]">Countries Worldwide</p>
        </div>
        <div>
          <h3 className="text-[48px] md:text-[58px] font-bold text-[#252B42]">100+</h3>
          <p className="text-[#737373] font-bold text-[16px]">Top Partners</p>
        </div>
      </section>

      <div className="text-center py-12">
        <img
          src="image/vc.png"
          alt="Mountain Video"
          className="mx-auto rounded-[20px] shadow-md w-full md:w-[989px] h-auto"
        />
      </div>

      <section className="text-center py-12">
        <h3 className="text-[32px] md:text-[40px] font-bold text-[#252B42]">Meet Our Team</h3>
        <p className="text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>
        <p className="text-[#737373] text-[14px] mb-8">the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="image/t1.png"
              alt="Team Member"
              className="mb-4"
            />
            <p className="font-bold">Username</p>
            <p className="text-gray-500">Profession</p>
            <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
              <FaFacebook className="text-lg mr-3" />
              <FaInstagram className="text-lg mr-3 ml-2" />
              <FaTwitter className="text-lg mr-3" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="image/t2.jpg"
              alt="Team Member"
              className="mb-4"
            />
            <p className="font-bold">Username</p>
            <p className="text-gray-500">Profession</p>
            <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
              <FaFacebook className="text-lg mr-3" />
              <FaInstagram className="text-lg mr-3 ml-2" />
              <FaTwitter className="text-lg mr-3" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="image/t3.png"
              alt="Team Member"
              className="mb-4"
            />
            <p className="font-bold">Username</p>
            <p className="text-gray-500">Profession</p>
            <div className="flex flex-row justify-center mt-2 gap-4 text-[#23A6F0]">
              <FaFacebook className="text-lg mr-3" />
              <FaInstagram className="text-lg mr-3 ml-2" />
              <FaTwitter className="text-lg mr-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-12 bg-[#FAFAFA] w-full h-auto">
        <h3 className="text-[32px] md:text-[40px] font-bold text-[#252B42]">Big Companies Are Here</h3>
        <p className="text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>
        <p className="text-[#737373] text-[14px] mb-8">the two major realms of Classical physics: Newtonian mechanics</p>

        <Logosection />
      </section>

      <Btsection />

      <Footer />
      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <p>Made With Love By Finland | All Rights Reserved</p>
      </footer>
    </div>
  );
}
