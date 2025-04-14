import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-1/3 h-full bg-[#5f5f5fcc] text-white px-4 py-6 rounded-2xl flex flex-col justify-center items-align-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-sm " >{overview}</p>
        </div>
        <div className="">
          <button className="bg-[#ffffff] text-black px-4 py-2 rounded-md">
            Play
          </button>
          <button className="bg-[#333] text-white px-4 py-2 rounded-md">
            Add to List
          </button> 
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
