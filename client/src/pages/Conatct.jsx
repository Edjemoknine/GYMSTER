import HeroImg from "../assets/carousel-2.jpg";
import Hero from "../components/Hero";
import { GiPositionMarker, GiSmartphone } from "react-icons/gi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Conatct = () => {
  return (
    <div>
      <Hero
        desc={"We'll Your Leaders"}
        title={"Contact Us"}
        image={HeroImg}
        height={"500px"}
      />
      <div className="container mx-auto">
        <div className=" grid gap-6 md:grid-cols-2 py-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sky-500 mb-3 ">Contact Us</h2>
            <h2 className="text-white text-3xl font-bold mb-6 ">
              Get In Touch
            </h2>
            <div className="flex flex-col gap-6">
              {" "}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full text-sky-500 bg-slate-300 flex justify-center items-center">
                  {" "}
                  <GiPositionMarker size={30} />
                </div>
                <p>
                  333 Middle Winchendon Rd, Rindge, <br />
                  NH 03461
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full text-sky-500 bg-slate-300 flex justify-center items-center">
                  <GiSmartphone size={30} />
                </div>
                <p>125-711-811 | 125-668-886</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full text-sky-500 bg-slate-300 flex justify-center items-center">
                  <BsFillEnvelopeAtFill size={30} />
                </div>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Comment"
            ></textarea>
            <button
              type="submit"
              className="btn font-semibold text-white btn-outlin btn-info"
            >
              Submit
            </button>
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102940.60824793002!2d1.320562082356497!3d36.2663521385766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128412c966c9239b%3A0xdd4cdebe4da20083!2sLabiod%20Medjadja!5e0!3m2!1sfr!2sdz!4v1699696723358!5m2!1sfr!2sdz"
            loading="lazy"
            style={{ width: "100%", height: "500px" }}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Conatct;
