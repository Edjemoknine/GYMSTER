const Skeleton = () => {
  return (
    <div>
      <div className=" cursor-pointer bg-base-100 shadow-xl">
        <figure className="skeleton h-64 w-64 rounded-lg bg-slate-500"></figure>
        <div className=" card-body relative">
          <h2 className="skeleton card-title w-[90%] p-3 rounded-full bg-slate-500  text-lg capitalize">
            <div className="skeleton  absolute w-12 py-2 rounded-full bg-slate-500 right-3 top-3"></div>
          </h2>
          <div className="card-actions justify-end">
            <div className="skeleton w-14 py-2 rounded-full bg-slate-500"></div>
            <div className="skeleton w-14 py-2 rounded-full bg-slate-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
