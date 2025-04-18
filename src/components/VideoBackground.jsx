import { useSelector } from "react-redux";
import useMainMovie from "../hooks/useMainMovie";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailer?.key);

  useMainMovie(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="relative w-screen h-[100vh] overflow-hidden z-0">
      {/* Video container with iframe */}
      <div className="w-screen h-screen overflow-hidden">
        <iframe
          className="w-full h-full border-0"
          src={`https://www.youtube.com/embed/${trailerVideo}?controls=0&autoplay=1&loop=1&mute=1&playlist=${trailerVideo}&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>

        <div
          className="absolute inset-0 w-full h-full"
          onClick={(e) => e.preventDefault()}></div>
      </div>
    </div>
  );
};

export default VideoBackground;
