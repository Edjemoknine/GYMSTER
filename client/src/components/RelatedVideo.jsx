import Skeleton from "react-loading-skeleton";
import VideoCard from "./VideoCard";

const RelatedVideo = ({ videoLoading, target, similair }) => {
  if (videoLoading)
    return (
      <div className="grid grid-cols-3 mt-10 gap-6">
        {Array(6)
          .fill(0)
          .map((__, video) => (
            <div key={video}>
              <Skeleton className="h-44 w-full" />
              <Skeleton className="w-[80%] my-3" />
              <Skeleton className="w-[30%]" />
            </div>
          ))}
      </div>
    );
  return (
    <div className="pt-6">
      <h1 className="md:text-4xl text-3xl mt-10 font-semibold border-l-sky-500 mb-6 border-l-8 pl-3">
        Youtube Related Videos
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {similair?.data?.contents?.slice(0, 6).map((video) => (
          <VideoCard target={target} video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedVideo;
