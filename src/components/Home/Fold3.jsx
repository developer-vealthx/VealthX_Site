import React, { useRef, useEffect } from 'react'
import video1 from './assets/video/video1.mp4'

const Fold3 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
          videoElement.muted = false; // Unmute the video
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // Adjust this value as needed
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className='w-full h-1/2 sm:h-screen flex justify-center items-center mt-20'>
      <video ref={videoRef} src={video1} className='w-[90%]' />
    </div>
  );
};

export default Fold3;
