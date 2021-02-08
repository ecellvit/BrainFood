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
            <h2>SPOT UP</h2>
            <b>
              This brain teaser challenges your mental vitality and flexibility
              to adapt to changes.
            </b>
            <br />

            <b>Rules</b>
            <p>
              1. There will be a grid of numbers which reshuffle after every
              click.
            </p>
            <p>2. Numbers in the grid appear randomly from 0 to 24.</p>
            <p>
              3. A number appears separately, you find and click that number in
              the grid.
            </p>
            <p>4. For every wrong click, you commence from zero.</p>
            <p>5. You win the game when you reach the last number, 24.</p>

            <div className="play-1">
              <button className="play-now-1">
                <Link to="/spotup">
                  <p className="play-now-text-1">Play</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="game-card column">
            <h2>FOCUS COLOR</h2>
            <b>Sharpen your brain cells and test your wit!</b>
            <br />
            <br />
            <b>Rules</b>
            <p>
              1. Click on the "text" of the color that is called out and not the
              color in which the text is written.
              <br /> For example, if "blue" is called out you click on the word
              "blue" ignoring the color in which it is written.
            </p>
            <p>2. You score a point for every correct click.</p>
            <p>3. For every wrong click, you're back to zero.</p>
            <br />
            <div className="play-1">
              <button className="play-now-1">
                <Link to="/focuscolor">
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
