import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <div class="bg-image">
        <div className="bg-text">
          <p className="welcome-heading">Brain-Food</p>
          <p className="welcome-para">
            A place to improve entrepreneurial skills
          </p>
        </div>
      </div>
      <div className="vision">
        <p className="vision-heading">Our Vision</p>
        <p className="vision-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <button className="play-now" >
        <Link to="/games">
          hello
        </Link>
      </button> 
    </div>
  );
}

export default Home;
