import Footer from "./Footer";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();

  return (
    <>
      <Header />
      <div className="bg-[#141414]  overflow-hidden"></div>
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </>
  );
};

export default Browse;
