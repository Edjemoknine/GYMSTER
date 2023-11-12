const SectionHead = ({ par, title }) => {
  return (
    <div className="text-center py-6 capitalize">
      <p className="mb-3 text-xl text-sky-500 font-semibold">{par}</p>
      <h1 className="font-bold text-4xl">{title}</h1>
    </div>
  );
};

export default SectionHead;
