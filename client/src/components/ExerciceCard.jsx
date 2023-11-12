import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FadeAnimate = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const ExerciceCard = ({ item, index }) => {
  return (
    <Link to={`/exercice/${item?.id}`}>
      <motion.div
        variants={FadeAnimate}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        className="card cursor-pointer bg-base-100 shadow-xl"
      >
        <figure>
          <img loading="lazy" src={item?.gifUrl} alt="Shoes" />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title  text-lg capitalize">
            {item?.name.substring(0, 25)}
            <div className="badge absolute right-1 top-3 badge-accent">
              {item.target}
            </div>
          </h2>
          <div className="card-actions justify-end">
            {item?.secondaryMuscles.map((n) => (
              <div key={n} className="badge badge-primary">
                {n}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ExerciceCard;
