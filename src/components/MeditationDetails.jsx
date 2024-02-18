// components/MusicPlayer.js
import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
} from "react-icons/fa";
import CountDown from "./CountDown";
import { useParams } from "react-router-dom";

const MeditationDetails = () => {

  const {type} = useParams();
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50); 
  const audioRef = useRef(null);


  // Function to toggle play/pause
  const togglePlay = () => {
    setPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        // style={playerAnimation}
        className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
      >
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

        <div className="mt-4 flex items-center">
          <CountDown />
        </div>

        <audio ref={audioRef} src="/music/Ajnabee_Bhuvan_Bam.mp3" />
      </div>
    </div>
  );
};

export default MeditationDetails;
