import React from "react";
import "App.scss";

const LivePage = () => {
  return (
    <div className={"page-body-container"}>
      <h3>Live Results</h3>
      <iframe
        style={{ display: "block", margin: "auto" }}
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/I7MyWWmRg4A"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export { LivePage };
