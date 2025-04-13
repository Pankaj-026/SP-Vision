import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <>
        <div className=" ">
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </>
  )
}

export default VideoTitle