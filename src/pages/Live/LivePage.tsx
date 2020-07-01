import React from "react";
import "App.scss";

const LivePage = () => {
  const containerWidth =
    (window?.innerWidth > 500 ? 500 : window.innerWidth) - 50;
  return (
    <div className={"page-body-container"}>
      <h3>Live Results</h3>
      <iframe
        title={"youtube-live"}
        style={{ display: "block", margin: "auto" }}
        width={containerWidth}
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
