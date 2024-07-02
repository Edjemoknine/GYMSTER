import start from "../assets/about.jpg";
import { GiWeightLiftingUp, GiAbdominalArmor, GiBiceps } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { FaAward, FaHandshake, FaNutritionix } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";

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
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const AboutSection = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="container mx-auto relative h-96 bg-red-500"
      >
        <motion.div
          variants={stagger}
          className="flex h-2/3 flex-col md:flex-row relative md:absolute   md:-top-0  -top-20"
        >
          <motion.div
            variants={fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
            className="p-6 text-right flex flex-col justify-center  bg-sky-500 text-white"
          >
            <h1 className="text-5xl font-bold mb-3">Body Building</h1>
            <p className="text-sm mb-4 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              fugit asperiores quaerat repellat quas ratione sint sit totam
              numquam asperiores quaerat repellat quas ratione sint sit totam
              numquam illo.
            </p>
            <a
              className="border-white hover:bg-white hover:text-sky-500 w-fit ml-auto border-2 py-1 px-3"
              href="/"
            >
              Join Now
            </a>
            <GiAbdominalArmor className="text-[150px] absolute left-4 bottom-3 opacity-20" />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            className="p-6 relative text-left flex flex-col justify-center bg-black text-white"
          >
            <h1 className="text-5xl font-bold mb-3">Muscle Building</h1>
            <p className="text-sm mb-4 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              fugit asperiores quaerat repellat quas ratione sint sit totam
              numquam asperiores quaerat repellat quas ratione sint sit totam
              numquam illo.
            </p>
            <a
              className="border-white hover:bg-white hover:text-sky-500 w-fit border-2 py-1 px-3"
              href="/"
            >
              Join Now
            </a>
            <GiBiceps className="text-[150px] absolute right-4 bottom-3 opacity-20" />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        // viewport={{ once: true }}
        whileInView="animate"
        className="container gap-6   pb-10 mx-auto grid md:grid-cols-2"
      >
        <div className="h-[600px]">
          <motion.img
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            ease={easeIn}
            viewport={{ once: true }}
            whileInView="animate"
            loading="lazy"
            className="w-full h-full object-cover"
            src={start}
            alt="start"
          />
        </div>
        <motion.div
          // viewport={{ once: true }}
          whileInView="animate"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          ease={easeIn}
          className="flex flex-col gap-6 px-3"
        >
          <p className="text-sky-500 uppercase">About Us</p>
          <h1 className="text-5xl font-bold">Welcome To Gymster</h1>
          <h3 className="text-gray-500 font-bold text-3xl">
            10 Years Experience
          </h3>
          <p>
            Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
            dolore takima ipsum lorem rebum
          </p>
          <div className="flex justify-between gap-6">
            <div className="pr-6">
              <GiWeightLiftingUp className="text-sky-500 text-6xl mb-2" />
              <h4 className="font-bold">Certified GYM Center</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
            <div className="pr-6">
              <FaAward className="text-sky-500 text-6xl mb-2" />
              <h4 className="font-bold">Award Winning</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
          </div>
          <a
            href="/"
            className="px-6 py-2 hover:text-white hover:bg-sky-500 transition-all duration-300 border-sky-500 border-2 w-fit text-sky-500"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={stagger} className=" grid md:grid-cols-3">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            className="flex min-h-[250px] bg-sky-500 text-white p-6 gap-3 items-center"
          >
            <FaHandshake className="text-7xl" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Support</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in hic omnis veniam vel consectetur earum facere
                placeat error. Aliquam nihil quidem fugiat culpa, quo voluptatem
                eligendi iusto facere vero!
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            className="flex min-h-[200px] bg-black text-white p-6 gap-3 items-center"
          >
            <IoMdFitness className="text-7xl" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Workout</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in hic omnis veniam vel consectetur earum facere
                placeat error. Aliquam nihil quidem fugiat culpa, quo voluptatem
                eligendi iusto facere vero!
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            className="flex min-h-[200px] bg-sky-500 text-white p-6 gap-3 items-center"
          >
            <FaNutritionix className="text-7xl" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Nutrition</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in hic omnis veniam vel consectetur earum facere
                placeat error. Aliquam nihil quidem fugiat culpa, quo voluptatem
                eligendi iusto facere vero!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutSection;
