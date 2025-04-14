import { useSelector } from "react-redux";
import useMainMovie  from "../hooks/useMainMovie";

const VideoBackground = ({ movieId }) => {
  
  const trailerVideo = useSelector(store => store.movies.trailer?.key);
  
  useMainMovie(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+ trailerVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
