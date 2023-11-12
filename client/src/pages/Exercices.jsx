import { bodyParts } from "../Api/Api";
import { carousel1 } from "../assets";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import ExercicesList from "../components/ExercicesList";
import { waist, Back, arms, legs, neck, chest } from "../assets/index";

const Body = [waist, Back, arms, waist, Back, Back, arms, legs, neck, chest];
const Exercices = ({ term, setTerm }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search || search === "") return;
    setTerm(search);
    setSearch("");
  };
  return (
    <div>
      <Hero
        desc={"Gym & Fitness Center"}
        title={"GYM CLASSES"}
        image={carousel1}
        height={"700px"}
        // mdHeight={"h-screen"}
      />
      <div className="py-6 container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl mb-6 font-semibold">
          Best Gym Exercices
        </h1>
        <form
          onSubmit={handleSubmit}
          className="md:w-[70%] w-[80%]  flex  mb-10 mx-auto bg-red-300"
        >
          <input
            type="text"
            placeholder="Search "
            value={search}
            className="p-2 w-full outline-none border-none text-white "
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-6 py-2 text-white  bg-sky-500 cursor-pointer hover:bg-sky-600"
            type="submit"
          >
            Search
          </button>
        </form>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={20}
          // slidesPerView={5}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {bodyParts.map((part, i) => (
            <SwiperSlide
              className=" h-44 p-2 hover:border-sky-500 cursor-pointer flex flex-col items-center justify-center border-gray-700 border-2 rounded-xl gap-3"
              key={part}
              onClick={() => setTerm(part)}
            >
              <img className="w-24 " src={Body[i]} alt="bodypart" />
              <h3 className="md:text-xl  font-semibold">{part}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className="md:text-4xl text-3xl mt-10 font-semibold border-l-sky-500 mb-6 border-l-8 pl-3">
          Show Exercices Results
        </h1>
        <ExercicesList term={term} max={12} pagi={true} />
      </div>
    </div>
  );
};

export default Exercices;
