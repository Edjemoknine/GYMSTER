import { Link } from "react-router-dom";

const VideoCard = ({ video, target }) => {
  console.log(video);
  return (
    <Link
      to={`https://www.youtube.com/watch?v=${video?.video.videoId}`}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={video?.video.thumbnails[0].url} alt="Shoes" loading="lazy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {video?.video.title}
          <div className="badge badge-info">{target}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </Link>
  );
};

export default VideoCard;
