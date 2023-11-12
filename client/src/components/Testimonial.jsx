const Testimonial = ({ client }) => {
  return (
    <section className="relative isolate overflow-hidden b-white/25 px-6 py-3 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute bg-sky-500 inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-sky-500 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          loading="lazy"
          className="mx-auto h-28"
          src={client.brand}
          alt=""
        />
        <figure className="mt-6">
          <blockquote className="text-center  leading-8 text-white sm:text-xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              loading="lazy"
              className="mx-auto h-10 w-10 rounded-full"
              src={client.image}
              alt="clinet"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-300">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-600"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-400">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
