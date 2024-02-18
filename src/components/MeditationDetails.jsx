import React, { useState, useRef } from "react";
import { useSpring, animated,config } from "react-spring";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
} from "react-icons/fa";
import { useMyContext } from "./context/ContextProvider";
import CountDown from "./CountDown";
import { useParams } from "react-router-dom";

const MeditationDetails = () => {

  const {type} = useParams();
  const music = {
    'Soft': '/music/calm.mp3',
    'Sleep': '/music/sleep.mp3',
    'Stress': '/music/stress.mp3',
    'Mindfullness': '/music/mindfullness.mp3',
  }

  const { isPlaying, updatePlaying } = useMyContext();
  
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [volume, setVolume] = useState(25); 
  const audioRef = useRef(null);

  const [{ background }] = useSpring(
    () => ({
      from: { background: "var(--bg-primary-o)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  // Function to toggle play/pause
  const togglePlay = () => {
    updatePlaying();
    (!isPlaying) ? audioRef.current.play() : audioRef.current.pause();
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <animated.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{ background }}
    >
      <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-lg md:w-3/4 lg:w-1/2">
        <div className="mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          {type}
        </div>
        <div className="mb-8 flex items-center justify-center">
          <FaBackward className="text-lg md:text-xl lg:text-2xl mr-4 cursor-pointer" />
          {isPlaying ? (
            <FaPause
              className="text-4xl md:text-5xl lg:text-6xl text-red-500 cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <FaPlay
              className="text-3xl md:text-4xl lg:text-5xl text-green-500 cursor-pointer"
              onClick={togglePlay}
            />
          )}
          <FaForward className="text-lg cursor-pointer md:text-xl lg:text-2xl ml-4 " />
        </div>

        <div className="md:relative md:left-40 lg:bottom-16 lg:mt-4 flex items-center justify-center md:rotate-90 ">
          <FaVolumeUp className="text-lg md:text-xl lg:text-2xl cursor-pointer mr-2  md:-rotate-90" />
          <input
            type="range"
            id="volume"
            name="volume"
            value={volume}
            min="0"
            max="100"
            onChange={handleVolumeChange}
            className="w-16 md:rotate-180"
            style={{
              background:
                "linear-gradient(to right, #4dc0b5, #4dc0b5 50%, #d4d4d4 50%, #d4d4d4 100%)",
              height: "4px",
            }}
          />
          <FaVolumeDown className="text-lg md:text-xl lg:text-2xl cursor-pointer ml-2 md:-rotate-90" />
        </div>

        <div className="mt-4 flex items-center justify-center">
          <CountDown />
        </div>

        <audio ref={audioRef} src={music[`${type}`]} />
      </div>
    </animated.div>
  );
};

export default MeditationDetails;
