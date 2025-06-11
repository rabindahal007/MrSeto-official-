import React, { useEffect, useState } from 'react';
import PlayerBox from './PlayerBox'; // rename abcd to PlayerBox for clarity
import GameControls from './GameControls';
import wordPairs from './WordAssignment';

const Paginationbox = ({ count }) => {
  const totalPlayers = parseInt(count, 10);
  const [assignedWords, setAssignedWords] = useState([]);
  const [playerNames, setPlayerNames] = useState({});
  const [mrWhiteIndex, setMrWhiteIndex] = useState(null);
  const [votedPlayers, setVotedPlayers] = useState([]);
  const [votingEnabled, setVotingEnabled] = useState(false);

  // Assign words when player count changes
  useEffect(() => {
    if (totalPlayers < 2 || totalPlayers > 12) return;

    // Pick random word pair
    const [mainWord, whiteWord] = wordPairs[Math.floor(Math.random() * wordPairs.length)];

    // Assign mainWord to all players
    const wordsArray = Array(totalPlayers).fill(mainWord);
    // Assign whiteWord to one random player
    const whiteIndex = Math.floor(Math.random() * totalPlayers);
    wordsArray[whiteIndex] = whiteWord;

    setAssignedWords(wordsArray);
    setMrWhiteIndex(whiteIndex);
    setPlayerNames({});
    setVotedPlayers([]);
    setVotingEnabled(false);
  }, [totalPlayers]);

  // Save player name
  const handleNameSave = (index, name) => {
    setPlayerNames(prev => ({ ...prev, [index]: name }));
  };

  // Handle voting out a player
  const handleRemovePlayer = (index) => {
    if (votedPlayers.includes(index)) return; // Prevent double voting

    const name = playerNames[index] || `Player ${index + 1}`;
    setVotedPlayers(prev => [...prev, index]);

    if (index === mrWhiteIndex) {
      alert(`${name} is Mr. White! Game Over.`);
      setVotingEnabled(false);
    } else {
      alert(`${name} is not Mr. White.`);
    }
  };

  // Reset game by reloading the page (or you can reset state here)
  const handleNewGame = () => {
    window.location.reload();
  };

  // Check if all players entered their names
  const allNamesEntered = Object.keys(playerNames).length === totalPlayers;

  return (
    <div className="p-4 text-gray-100" style={{ color: "#000435" }}>
      <p className="text-lg sm:text-4xl font-bold mb-4 text-center">
        Choose one and pass over
      </p>

      {/* Render player boxes */}
      <div className="flex flex-wrap justify-center gap-4">
        {assignedWords.map((word, i) => (
          <PlayerBox
            key={i}
            index={i}
            word={word}
            onNameSave={handleNameSave}
            isNamed={!!playerNames[i]}
            playerName={playerNames[i]}
            votingMode={votingEnabled}
            isVoted={votedPlayers.includes(i)}
            onVote={handleRemovePlayer}
          />
        ))}
      </div>

      {/* Show Vote Now and New Game buttons only if all names entered and voting NOT started */}
      {allNamesEntered && !votingEnabled && (
        <div className="text-center mt-8 space-y-4">
          <button
            className="text-white px-6 py-3 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg text-center me-2"
            onClick={() => setVotingEnabled(true)}
          >
            Vote Now
          </button>

          <button
            className=" text-base bg-green-600 hover:bg-green-700 text-white font-semibold px-2 py-1 rounded-lg"
            onClick={handleNewGame}
          >
            New Game
          </button>
        </div>
      )}

      {/* Show GameControls during voting */}
      {votingEnabled && (
        <GameControls
          players={assignedWords.map((_, i) => ({ name: playerNames[i] || `Player ${i + 1}` }))}
          onRemovePlayer={handleRemovePlayer}
          mrWhiteIndex={mrWhiteIndex}
          votedPlayers={votedPlayers}
        />
      )}
    </div>
  );
};

export default Paginationbox;
