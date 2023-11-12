import Hero from "../components/Hero";
import { hero } from "../assets/index";
import AboutSection from "../components/AboutSection";
import SectionHead from "../components/SectionHead";
import { motion } from "framer-motion";
import TrainerCard from "../components/TrainerCard";
import {
  other3,
  team1,
  team2,
  team3,
  women,
  womenGym,
  king,
  Lift,
} from "../assets/index";
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delay: 0.5,
    },
  },
};
import Testimonial from "../components/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  const stats = [
    { id: 1, name: "Exercises", value: "1300" },
    { id: 2, name: "Clients", value: "119 " },
    { id: 3, name: "Rewards", value: "7" },
  ];
  const trainers = [
    { name: "KAKA", image: other3, brand: Lift },
    { name: "John", image: team1, brand: women },
    { name: "Donald", image: team2, brand: womenGym },
    { name: "Mia", image: team3, brand: king },
  ];
  return (
    <div>
      <Hero
        desc={"Gym & Fitness Center"}
        title={"Get Body In Shape"}
        image={hero}
        height={"600px"}
      />
      <AboutSection />

      <div className="container mx-auto">
        <div className=" py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto border-b-8 pb-2 cursor-pointer border-sky-500 flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-white">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Swiper
          // breakpoints={{
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },

          //   768: {
          //     width: 768,
          //     slidesPerView: 2,
          //   },
          // }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {trainers.map((client) => (
            <SwiperSlide key={client.name}>
              <Testimonial client={client} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SectionHead par={"Our Trainers"} title={"Meet Our Expert Trainers"} />
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 my-6"
        >
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              name={trainer.name}
              image={trainer.image}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
