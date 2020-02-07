import React from "react";
import "./styles/Home.css";
import "bootstrap/dist/css/bootstrap.css";

import error404Image from "../images/Error-404-page.png";
function NotFound() {
  return (
    <div className="Home ">
      <div className="row">
        <div className="Home__col col-12 col-md-8 center-block">
          <img src={error404Image} alt="Platzi Conf Logo" className="img404 img-fluid mb-2 " />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
