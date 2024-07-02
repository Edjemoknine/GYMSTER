import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Our from "../components/Our";
import HeroImg from "../assets/img/carousel-2.jpg";
import ExercicesList from "../components/ExercicesList";
import SectionHead from "../components/SectionHead";
import { AnimatePresence } from "framer-motion";
const Home = ({ term }) => {
  return (
    <AnimatePresence>
      <Hero
        desc={"Gym & Fitness Center"}
        title={"Get Body In Shape"}
        image={HeroImg}
        height={"100vh"}
      />
      <div className="w-full bg-green-500">
      
      <AboutSection />
      </div>
      <div className="container mx-auto">
        <SectionHead par={"Exercises"} title={"Most Popular Exercices"} />
        <ExercicesList term={term} max={8} pagi={false} />
      </div>
      <Our />
    </AnimatePresence>
  );
};

export default Home;
