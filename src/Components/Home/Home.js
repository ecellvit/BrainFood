import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";

function Home() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div>
      <div class="bg-image">
        <div className="bg-text">
          <p className="welcome-heading">Brain Food</p>
          <p className="welcome-para">
            A place to improve entrepreneurial skills
          </p>
        </div>
      </div>
      <div className="play-games">
        <Link to="/games">LET'S GO >></Link>
      </div>
      <div className="vision">
        <p className="vision-heading" data-aos="zoom-in-up">
          Our Vision
        </p>
        <p className="vision-para" data-aos="zoom-in-up">
          Entrepreneurship is a mindset. As an entrepreneur, one needs to stay continuously dilligent and
          active. Hence, we have come up with a few games that would help any
          entrepreneur, businessman or any hustler who wants to get an
          immediate flow of mind and break monotony. One can quickly go through
          these short games to activate their grey matter and get started for
          the day.
          <br />
          <br /> Recommended time: Morning / Before beginning work / during
          break hours.
        </p>
      </div>
      <div className="my-foot">
        <p> &#169;BrainFood</p>
        <p>Created by Divit Agrawal</p>
      </div>
    </div>
  );
}

export default Home;
