import hero from "../assets/carousel-1.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full ">
      <div
        className="w-full relative bg-no-repeat pt-10 "
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/80"></div>
        <div className="container grid sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          <div className="text-left z-50">
            <h1 className="text-xl text-sky-500 mb-4 font-semibold">
              Get In Touch
            </h1>
            <ul className="flex flex-col gap-3">
              <li>123 Street, Chlef, Algeria</li>
              <li>+213 656643018</li>
              <li>mokninemoknine@gmail.com</li>
            </ul>
            <div className="flex gap-3 mt-3">
              <div className="w-10 h-10 cursor-pointer hover:bg-sky-500 border-white border-2 group rounded-full text-white justify-center flex items-center">
                <FaFacebook />
              </div>
              <div className="w-10 h-10 cursor-pointer hover:bg-sky-500 border-white border-2 group rounded-full text-white justify-center flex items-center">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 cursor-pointer hover:bg-sky-500 border-white border-2 group rounded-full text-white justify-center flex items-center">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 cursor-pointer hover:bg-sky-500 border-white border-2 group rounded-full text-white justify-center flex items-center">
                <FaSkype />
              </div>
            </div>
          </div>
          <div className="text-left z-50">
            <h1 className="text-xl text-sky-500  mb-4 font-semibold">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>About Us</li>

              <li>Classes </li>
              <li>Contact Us </li>
            </ul>
          </div>
          <div className="text-left z-50">
            <h1 className="text-xl text-sky-500 mb-4 font-semibold">Popular</h1>
            <ul className="flex flex-col gap-3">
              <li>Cardio Flash</li>
              <li>Beast Power</li>
              <li>Crossfit</li>
              <li>Iron Body</li>
            </ul>
          </div>
          <div className="text-left z-50">
            <h1 className="text-xl text-sky-500  mb-4 font-semibold">
              Opening Hours
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <p>Monday-Friday</p>
                <p>8.00 AM - 8.00 PM</p>
              </li>
              <li>
                <p>Saturday-Sunday</p>
                <p>2.00 PM - 8.00 PM</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container z-50 mx-auto mt-6 text-center py-3">
          <hr />
          <p className=" z-50 relative flex items-center justify-center pt-3 ">
            Copyright ©2023 All rights reserved | This template is made with
            <BsFillHeartFill className="text-sky-500 mx-1" />
            by
          </p>
          <span className="text-sky-500 relative block z-10">Moknine</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
