import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen h-[100vh] absolute top-0 left-0 text-white bg-gradient-to-r from-black via-black/70 to-transparent px-6 md:px-12 py-16 flex flex-col justify-center gap-4 z-10">
        <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold pb-2">{title}</h2>
          <p className="text-sm md:text-base">{overview}</p>
        </div>
        <div className="flex gap-4 mt-2">
          <button className="bg-[#ffffff] text-black px-4 py-2 rounded-md cursor-pointer hover:bg-[#cccccc] transition-all duration-300">
            Play
          </button>
          <button className="bg-[#333] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#444] transition-all duration-300">
            Add to List
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
