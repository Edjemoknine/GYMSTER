import { easeIn, motion } from "framer-motion";

const Hero = ({ desc, title, image, height }) => {
  return (
    <div style={{ height: `${height}` }} className={`w-full relative`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <div
        className="w-full h-full bg-no-repeat flex justify-center items-center flex-col"
        style={{
          background: `url(${image}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="text-center z-10">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: easeIn }}
            className="text-sky-500 font-semibold text-2xl md:text-3xl  mb-7"
          >
            {desc}
          </motion.p>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.2, ease: easeIn }}
            className="text-4xl mb-10 md:text-7xl font-bold text-white"
          >
            {title}
          </motion.h1>
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 100, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1, ease: easeIn }}
            className="px-6 py-2  hover:bg-sky-500 border-2 hover:text-white border-sky-500 text-sky-500"
            href="/"
          >
            Join Us Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
