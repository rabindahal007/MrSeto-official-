import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './component/hero';
import Footer from './component/footer';
import HowToPlay from './component/how';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
        <Route path="/how" element={<HowToPlay />} />
      </Routes>
    </>
  );
};

export default App;
