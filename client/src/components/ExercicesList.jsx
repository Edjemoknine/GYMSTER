import { useQuery } from "react-query";
import { ExercisesList } from "../Api/Api";
import ExerciceCard from "./ExerciceCard";
import { useState } from "react";
import Skeleton from "./Skeleton";

const ExercicesList = ({ max, pagi, term }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exercises", currentPage],
    queryFn: () => ExercisesList(currentPage, max),
    staleTime: 300000,
    keepPreviousData: true,
  });
  const FiltredData = data?.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.target.toLowerCase().includes(term) ||
      item.bodyPart.toLowerCase().includes(term)
  );
  console.log(FiltredData);

  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 md:grid-cols-4 gap-3">
        {" "}
        {Array(max)
          .fill(0)
          .map((item) => (
            <Skeleton key={item.id} />
          ))}
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 md:grid-cols-4 gap-3">
        {FiltredData?.slice(0, max).map((item, index) => (
          <ExerciceCard index={index} key={item.id} item={item} />
        ))}
      </div>

      {pagi !== false && (
        <div className=" my-6 flex justify-center join">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="join-item btn"
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage + 1}</button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="join-item btn"
          >
            »
          </button>
        </div>
      )}
    </>
  );
};

export default ExercicesList;
