import React from 'react';

const GameControls = ({ players, onRemovePlayer, mrWhiteIndex, votedPlayers }) => {
  // Function to reload the page or reset the game state
  const handleNewGame = () => {
    window.location.reload();
  };

  return (
    <div className="mt-8 p-4 bg-gray-900 rounded-lg text-white">
      {/* Title */}
      <h2 className="text-xl mb-4">Vote out a Player</h2>

      {/* Removed player buttons section as requested */}

      {/* New Game button */}
      <div className="text-center">
        <button
          onClick={handleNewGame}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded-lg"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default GameControls;
