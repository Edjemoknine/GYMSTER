import { FaFacebook, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";
import { motion } from "framer-motion";
const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const TrainerCard = ({ name, image }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="cursor-pointer group mb-6"
    >
      <div className="h-72 relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/50 scale-0 transition-all duration-300 group-hover:scale-100"></div>
        <div className="flex gap-3 mt-3 group-hover:scale-100 scale-0 transition-all duration-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 group hover:bg-sky-500 transition-all duration-300 border-white border-2 group rounded-full text-white justify-center flex items-center">
            <FaFacebook />
          </div>
          <div className="w-10 h-10 group hover:bg-sky-500 transition-all duration-300 border-white border-2 group rounded-full text-white justify-center flex items-center">
            <FaInstagram />
          </div>
          <div className="w-10 h-10 group hover:bg-sky-500 transition-all duration-300 border-white border-2 group rounded-full text-white justify-center flex items-center">
            <FaSkype />
          </div>
          <div className="w-10 h-10 group hover:bg-sky-500 transition-all duration-300 border-white border-2 group rounded-full text-white justify-center flex items-center">
            <FaTwitter />
          </div>
        </div>
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={image}
          alt="trainer"
        />
      </div>
      <div className="text-center p-3 bg-black">
        <h2 className="text-sky-500 font-semibold text-xl ">{name}</h2>
        <p>Tranier</p>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
