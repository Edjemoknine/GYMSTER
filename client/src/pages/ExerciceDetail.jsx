import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ExerciseDetail, FetchSimilairVideo } from "../Api/Api";
import Back from "../assets/Body/back.png";
import Chest from "../assets/Body//chest.png";
import Upper from "../assets/Body/UpperArms.png";
import VideoCard from "../components/VideoCard";
import ExercicesList from "../components/ExercicesList";
// import Skeleton from "../components/Skeleton";
import Skeleton from "react-loading-skeleton";
import RelatedVideo from "../components/RelatedVideo";
const ExerciceDetail = ({ term }) => {
  const imgE = [Chest, Back, Upper];
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exercises", id],
    queryFn: () => ExerciseDetail(id),
  });

  const { data: similair, isLoading: load } = useQuery({
    queryKey: ["Vidoes", data?.name],
    queryFn: () => FetchSimilairVideo(data?.name),
  });
  console.log(similair);
  if (isLoading)
    return (
      <div className="min-h-screen container mx-auto pt-28 ">
        <div className="grid  md:grid-cols-2 gap-10">
          <Skeleton className="w-full h-full  " />

          <div className="flex flex-col gap-3">
            <Skeleton />

            <Skeleton className="h-12 rounded-2xl" />

            <Skeleton count={7} className="mb-3" />

            {Array(3)
              .fill(0)
              .map((__, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <Skeleton className="w-12 p-1 h-12 rounded-full" />
                  <Skeleton className="h-4" />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  return (
    <div className="container mx-auto pt-28 mb-6">
      <div className="grid  md:grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-full object-cover"
            src={data?.gifUrl}
            alt="exercise detail"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-white">
            This Exercise Aim To Enhance Your{" "}
            <span className="text-sky-500 font-semibold">{data?.target}</span>
          </h2>
          <h1 className="text-5xl leading-tight text-white font-semibold">
            {data?.name}
          </h1>
          <p className="text-gray-300">
            {data?.instructions.map((inst, i) => (
              <p key={i} className="leading-relaxed">
                {inst}
              </p>
            ))}
          </p>
          {data?.secondaryMuscles.map((sec, i) => (
            <div key={i} className="flex gap-3 items-center">
              <img
                className="w-12 bg-sky-500 p-1 h-12 rounded-full"
                src={imgE[i]}
                alt="opm"
              />
              <h3 className="text-lg font-semibold">{sec}</h3>
            </div>
          ))}
        </div>
      </div>
      <RelatedVideo
        target={data?.target}
        similair={similair}
        videoLoading={load}
      />
      <h1 className="md:text-4xl text-3xl mt-10 font-semibold border-l-sky-500 mb-6 border-l-8 pl-3">
        Most Related Exercices
      </h1>
      <ExercicesList term={term} max={4} pagi={false} />
    </div>
  );
};

export default ExerciceDetail;
