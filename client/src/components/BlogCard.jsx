import { animate, motion } from "framer-motion";
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

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className=" h-full cursor-pointer oveflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          loading="lazy"
          className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
          src={blog.image}
          alt="blog"
        />
      </div>
      <div className="bg-black py-3 items-center gap-6 text-white flex">
        <span className="px-6 border-r flex flex-col text-xs text-center">
          {Math.floor(Math.random() * 10)}
          <b className="font-bold text-xl"> {blog.date}</b>
          2024
        </span>
        <h2 className="text-xl font-bold capitalize ">{blog.title}</h2>
      </div>
    </motion.div>
  );
};

export default BlogCard;
