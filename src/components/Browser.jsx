import Footer from "./Footer";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <div className="bg-[#141414] h-[10vh] overflow-hidden"></div>
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </>
  );
};

export default Browse;
