import React from 'react';

const HowToPlay = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-20 font-sans">
      <h1 className="text-4xl font-extrabold mb-8 text-center" style={{ color: '#000435', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        How to Play - Mr White
      </h1>

      <section className="mb-10">
        <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '18px' }}>
          Everyone gets the same word, except one person who gets a <strong>"Mr. White"</strong> secret word!
          Each player describes their word with one clue word without revealing they are Mr. White.
          Others try to find and vote for Mr. White. Can you fool your friends or find Mr. White?
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#000435', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Players
        </h2>
        <ul className="list-disc list-inside text-gray-800" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '18px' }}>
          <li><strong>3+</strong> Players</li>
          <li><strong>10+</strong> Age</li>
          <li><strong>10</strong> Minutes</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#000435', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Setup
        </h2>
        <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '18px' }}>
          Gather 4 to 8 players for a fun game. Press the <strong>'Let's Play'</strong> button to assign secret words and start.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#000435', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Gameplay
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-800" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '18px' }}>
          <li>Players take turns giving a 1-2 word clue about their secret word.</li>
          <li>Discuss and guess who is Mr. White based on clues.</li>
          <li>Vote on the suspected Mr. White player.</li>
          <li>If correct, Mr. White guesses the secret word to win.</li>
          <li>If wrong, the accused is eliminated and game continues.</li>
          <li>Mr. White can reveal and guess anytime to win.</li>
          <li>Rounds repeat until Mr. White is caught or wins.</li>
          <li>Goal: Mr. White stays hidden or guesses the word before caught.</li>
        </ol>
      </section>

      {/* Embedded YouTube video */}
      <section className="mb-10 flex justify-center">
        <iframe
          width="100%"
          maxWidth="560px"
          height="315"
          src="https://www.youtube.com/embed/pmCSP7Q3N6Q?start=6"
          title="How to Play Mr. White"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px' }}
        ></iframe>
      </section>
    </div>
  );
};

export default HowToPlay;
