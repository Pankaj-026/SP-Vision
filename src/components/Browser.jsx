import Footer from "./Footer";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTrendingMovies();

  return (
    <>
      <Header />

      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </>
  );
};

export default Browse;
