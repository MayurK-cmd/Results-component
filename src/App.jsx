import React from "react";
import reaction from "../images/icon-reaction.svg";
import memory from "../images/icon-memory.svg";
import verbal from "../images/icon-verbal.svg";
import visual from "../images/icon-visual.svg";
import "./index.css";

function App() {
  return (
    <main className="main-page">
      <div className="card">
        <div className="card-left">
          <h1>Your Result</h1>
          <div className="circle-box">
            <h2 className="circle-header">76</h2>
            <p className="circle-text">of 100</p>
          </div>
          <div className="card-left-bottom">
            <p className="card-left-text">Great</p>
            <p className="card-left-paragraph">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="card-right">
          <div className="card-right-header-box">
            <h2 className="card-right-header">Summary</h2>
          </div>
          <div className="stats-container">
            <div className="stats-box1">
              <div className="stats-left">
                <img
                  className="stats-image"
                  src={reaction}
                  alt="reaction image"
                />
                <p className="stats-title">Reaction</p>
              </div>
              <div className="stats-right">
                <p className="stats-results">
                  80 <span className="stats-span">/ 100</span>
                </p>
              </div>
            </div>

            <div className="stats-box2">
              <div className="stats-left">
                <img
                  className="stats-image"
                  src={memory}
                  alt="memory image"
                />
                <p className="stats-title2">Memory</p>
              </div>
              <div className="stats-right">
                <p className="stats-results">
                  92 <span className="stats-span">/ 100</span>
                </p>
              </div>
            </div>

            <div className="stats-box3">
              <div className="stats-left">
                <img
                  className="stats-image"
                  src={verbal}
                  alt="verbal image"
                />
                <p className="stats-title3">Verbal</p>
              </div>
              <div className="stats-right">
                <p className="stats-results">
                  61 <span className="stats-span">/ 100</span>
                </p>
              </div>
            </div>

            <div className="stats-box4">
              <div className="stats-left">
                <img
                  className="stats-image"
                  src={visual}
                  alt="visual image"
                />
                <p className="stats-title4">Visual</p>
              </div>
              <div className="stats-right">
                <p className="stats-results">
                  72 <span className="stats-span">/ 100</span>
                </p>
              </div>
            </div>
          </div>

          <button>Continue</button>
        </div>
      </div>
    </main>
  );
}

export default App;
