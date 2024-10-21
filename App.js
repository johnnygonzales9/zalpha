import React, { useState } from 'react';
import './App.css';

function App() {
  const [contractAddress, setContractAddress] = useState('0xYourContractAddressHere');
  
  return (
    <div className="App">
      <header className="App-header">
        {/* Hero Section */}
        <h1>ZALPHA</h1>
        <p>The coin that never fades.</p>

        {/* Contract Address Section */}
        <div className="contract-address">
          <h3>Contract Address:</h3>
          <p>{contractAddress}</p>
        </div>

        {/* Add dynamic content here */}
        <section className="dynamic-content">
          <h2>Join the ZALPHA Movement</h2>
          <div className="quiz-section">
            <p>Take our Brainrot Quiz and discover your meme IQ!</p>
            <button>Start Quiz</button>
          </div>

          <div className="content-section">
            <h3>Trending: Joe Rogan x David Goggins Podcast</h3>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/podcastURL" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Joe Rogan Podcast"
            ></iframe>
          </div>

          <div className="gif-section">
            <h3>Keep it fresh: Subway Surfers GIF</h3>
            <img src="subway_surfers_gif.gif" alt="Subway Surfers GIF" />
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>© 2024 ZALPHA | Built for the memeverse.</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
