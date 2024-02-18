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

  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume
  const audioRef = useRef(null);

  // Animation for the player
  const playerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  // Animation for the timer
  const timerAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

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

  // Function to stop the music after the timer duration
//   useEffect(() => {
//     let timerId;
//     if (isPlaying && timer > 0) {
//       timerId = setTimeout(() => {
//         setPlaying(false);
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }, timer * 1000);
//     }

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [isPlaying, timer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <animated.div
        style={playerAnimation}
        className="bg-white p-20 rounded-lg shadow-lg"
      >
        <div className="mb-4 text-center text-3xl font-bold">{type}</div>
        <div className="mb-8 flex items-center justify-center">
          <FaBackward className="text-xl mr-4 cursor-pointer" />
          {isPlaying ? (
            <FaPause
              className="text-4xl text-red-500 cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <FaPlay
              className="text-3xl text-green-500 cursor-pointer"
              onClick={togglePlay}
            />
          )}
          <FaForward className="text-xl ml-4 cursor-pointer" />
        </div>

        <div className=" relative left-40 bottom-16 mt-4 flex items-center justify-center rotate-90">
          <FaVolumeUp className="text-xl cursor-pointer mr-2 -rotate-90" />
          <input
            type="range"
            id="volume"
            name="volume"
            value={volume}
            min="0"
            max="100"
            onChange={handleVolumeChange}
            className="w-16"
            style={{
              background:
                "linear-gradient(to right, #4dc0b5, #4dc0b5 50%, #d4d4d4 50%, #d4d4d4 100%)",
              height: "4px",
              transform: "rotate(180deg)",
            }}
          />
          <FaVolumeDown className="text-xl cursor-pointer ml-2 -rotate-90" />
        </div>

        <div className="mt-4 flex items-center">
          <CountDown
          />
        </div>

        <audio ref={audioRef} src="/music/Ajnabee_Bhuvan_Bam.mp3" />
      </animated.div>
    </div>
  );
};

export default MeditationDetails;
