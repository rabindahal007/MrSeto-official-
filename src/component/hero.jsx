import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerNumber from './PlayerNumber';
import Paginationbox from './paginationbox';
import setoLogo from '../assets/seto.jpg';

const Hero = () => {
  const [playerCount, setPlayerCount] = useState(null);
  const navigate = useNavigate();

  const handleSubmitPlayerCount = (count) => {
    setPlayerCount(count);
  };

  return (
    <div className="min-h-screen bg-[#000435] flex flex-col items-center p-6 space-y-6 text-white">

      {/* Show logo and welcome only if playerCount not selected yet */}
      {!playerCount && (
        <>
          <img
            src={setoLogo}
            alt="Game Logo"
            className="h-52 w-52 object-contain"
          />
          <h1 className="text-4xl text-center md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white mb-4">
  Welcome to the game
</h1>



        </>
      )}

      {/* Show PlayerNumber input if no playerCount yet */}
      {!playerCount ? (
        <PlayerNumber onSubmit={handleSubmitPlayerCount} />
      ) : (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg min-h-[500px] text-black">
          <Paginationbox count={playerCount} />
        </div>
      )}

      {/* Button to navigate to How to Play page */}
      <button
        onClick={() => navigate('/how')}
        className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-2 py-1 rounded shadow z-50"
      >
        How to Play
      </button>
    </div>
  );
};

export default Hero;
