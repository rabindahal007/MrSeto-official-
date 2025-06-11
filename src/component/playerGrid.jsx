import React from 'react';
import PlayerBox from './PlayerBox';

const PlayerGrid = ({
  words,
  playerNames,
  onNameSave,
  votingMode,
  votedPlayers,
  onVote,
}) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {words.map((word, index) => (
        <PlayerBox
          key={index}
          index={index}
          word={word}
          isNamed={!!playerNames[index]}
          playerName={playerNames[index]}
          onNameSave={onNameSave}
          votingMode={votingMode}
          isVoted={votedPlayers.includes(index)}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default PlayerGrid;
