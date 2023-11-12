import Hero from "../assets/blog-3.jpg";
import SectionHead from "./SectionHead";
import BlogCard from "./BlogCard";
import { blog1, blog2, blog3 } from "../assets/index";
// import { EquipmentList } from "../Api/Api";
import { motion } from "framer-motion";
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delay: 0.5,
    },
  },
};
const blogs = [
  { date: "Mai", title: "Wourkout with Most Popular Equipement", image: blog1 },
  { date: "Oct", title: "Best Exercice for Weight Loose", image: blog2 },
  {
    date: "Nov",
    title: "Most Benifitial Muscle building Exercice",
    image: blog3,
  },
];
const Our = () => {
  return (
    <div>
      <div className="w-full h-[300px] my-10  relative ">
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/80"></div>
        <div
          className="w-full  h-full py-10 flex flex-col justify-center items-center gap-6 "
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="z-20 text-5xl font-semibold">
            Subscribe our Newsletter
          </h1>
          <p className="z-20">
            Subscribe and get Our latest article in your inbox
          </p>
          <form className="flex z-20">
            <input
              type="email"
              className="px-6 py-3"
              placeholder="Your Email"
            />
            <button className="z-20 bg-sky-500 text-white px-6 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className=" container mx-auto">
        <SectionHead par={"Our Blog"} title={"Latest Article From Blog"} />
        <motion.div
          variants={stagger}
          className=" mb-6 grid md:grid-cols-3 gap-6"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.date} blog={blog} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Our;
