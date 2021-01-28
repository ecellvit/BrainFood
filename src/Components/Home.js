import React,{useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div>
      <div class="bg-image">
        <div className="bg-text">
          <p className="welcome-heading" data-aos="zoom-in-up">
            Brain-Food
          </p>
          <p className="welcome-para">
            A place to improve entrepreneurial skills
          </p>
        </div>
      </div>
      <div className="vision">
        <p className="vision-heading" data-aos="zoom-in-up">
          Our Vision
        </p>
        <p className="vision-para" data-aos="zoom-in-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="play">
        <button className="play-now" data-aos="zoom-in-up">
          <Link to="/games">
            <p className="play-now-text">Play Now</p>
          </Link>
        </button>
      </div>
      <div className="my-foot">
        <p>Made by Divit Agrawal</p>
      </div>
    </div>
  );
}

export default Home;
