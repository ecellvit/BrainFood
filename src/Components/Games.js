import { Link } from "react-router-dom";
import React from "react";
import "./Games.css";

function Games() {
  return (
    <div className="body">
      <div className="container">
        <h1>Activate your skills. Play small, quick and mind-boggling games</h1>
        <div className="row">
          <div className="game-card column">
            <h2>FOCUS COLOR</h2>
            <b>Rules</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="play-1">
              <button className="play-now-1">
                <Link to="/focuscolor">
                  <p className="play-now-text-1">Play</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="game-card column">
            <h2>SPOT UP</h2>
            <b>Rules</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="play-1">
              <button className="play-now-1">
                <Link to="/spotup">
                  <p className="play-now-text-1">Play</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-foot-games">
        <p>Made by Divit Agrawal</p>
      </div>
    </div>
  );
}

export default Games;
