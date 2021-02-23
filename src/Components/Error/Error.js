import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
function Error() {
  return (
    <div>
      <h1 className="error-msg">
        404
        <br />
        Page not found!
      </h1>
      <p className="back-to-home">
        Back to{" "}
        <Link to="/" className="home">
          BrainFood
        </Link>
      </p>
    </div>
  );
}

export default Error;
