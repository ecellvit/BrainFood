import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div>
      <div class="bg-image">
        <div className="bg-text">
          <p className="welcome-heading">
            Brain Food
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
          As an entrepreneur, one needs to stay continuously dilligent and active.
          Hence, we have come up with a few games that would help any
          entrepreneur or a businessman or any hustler who wants to get an immediate
          flow of mind / break monotony. One can quickly go through these short games to activate their
          grey matter and get started for the day.<br/><br/> Recommended time: Morning / Before beginning work / during break hours.
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
