import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { gsap } from 'gsap';

const PlayerBox = ({
  index,
  word,
  onNameSave,
  isNamed,
  votingMode,
  isVoted,
  onVote,
  playerName,
}) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const tl = gsap.timeline({ paused: true });
    tl.to(cardRef.current, {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
      duration: 0.1,
    });

    const node = cardRef.current;
    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    node.addEventListener('mouseenter', onEnter);
    node.addEventListener('mouseleave', onLeave);

    return () => {
      node.removeEventListener('mouseenter', onEnter);
      node.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Flip animation
  useEffect(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 0.8,
      ease: 'power3.inOut',
      transformPerspective: 600,
    });
  }, [flipped]);

  // When voting starts, show front side with name
  useEffect(() => {
    setFlipped(false);
  }, [votingMode]);

  const handleClick = () => {
    if (votingMode) {
      // During voting, only allow voting if named and not voted yet
      if (isNamed && !isVoted) {
        onVote(index);
      }
      return; // no flipping allowed during voting
    }

    if (!isNamed) {
      if (!flipped) {
        // First click, flip to show word
        setFlipped(true);
      } else {
        // Second click, prompt for name
        const name = window.prompt(`Enter name for Player ${index + 1}:`);
        if (name?.trim()) {
          onNameSave(index, name.trim());
          setFlipped(false); // flip back to front with name
        }
      }
    }
  };

  const clickable = (!isNamed && !votingMode) || (votingMode && isNamed && !isVoted);
  const bgColor = isVoted ? '#555' : isNamed ? '#000435' : '#f0f0f0';
  const textColor = isVoted ? '#ccc' : isNamed ? '#fff' : '#333';

  return (
<Card
  ref={cardRef}
  onClick={() => {
    console.log('Card clicked. flipped:', flipped, 'word:', word);
    handleClick();
  }}
  tabIndex={0}
  sx={{
    width: 150,
    height: 150,
    bgcolor: bgColor,
    color: textColor,
    cursor: clickable ? 'pointer' : 'default',
    userSelect: 'none',
    borderRadius: 3,
    boxShadow: '0 4px 12px #808080.',
    perspective: 600,
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    overflow: 'visible',
    borderRadius:'8px',
  }}
>
  {/* Front side */}
  <CardContent
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backfaceVisibility: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transform: 'rotateY(0deg)',
      bgcolor: bgColor,
      color: textColor,
      zIndex: 2,
    }}
  >
    {votingMode && isVoted ? (
      <Typography variant="h6" sx={{ fontWeight: 'bold', opacity: 0.7 }}>
        Already Voted
      </Typography>
    ) : !isNamed ? (
      <Typography variant="h3" sx={{ fontWeight: '900', letterSpacing: '0.15em' }}>
        {index + 1}
      </Typography>
    ) : (
      <>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
          {playerName}
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.2 }}>
          Box {index + 1}
        </Typography>
      </>
    )}
  </CardContent>

  {/* Back side */}
  <CardContent
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backfaceVisibility: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#000435',
      color: '#fff',
      transform: 'rotateY(180deg)',
      padding: 2,
      zIndex: 1,
    }}
  >
    <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', opacity: 1, color: '#fff' }}>
      {word || '(No word!)'}
    </Typography>
    {!isNamed && !votingMode && (
      <Typography sx={{ fontSize: '0.75rem', fontStyle: 'italic', opacity: 1, mt: 1, color: 'gray' }}>
        (click again to enter name)
      </Typography>
    )}
  </CardContent>
</Card>



  );
};

export default PlayerBox;
