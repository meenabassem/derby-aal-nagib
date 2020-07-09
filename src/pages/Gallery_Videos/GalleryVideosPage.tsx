import React, {useEffect, useState} from "react";
import "App.scss";
import {Row} from "react-bootstrap";

const _videoLinks: string[] = [
  "I7MyWWmRg4A",
  "7HAj46hjZGU",
  "79TX16AGYBM",
  "I7MyWWmRg4A",
  "7HAj46hjZGU",
  "79TX16AGYBM",
  "I7MyWWmRg4A",
  "7HAj46hjZGU",
  "79TX16AGYBM"
];

const GalleryVideosPage = () => {
  const containerWidth =
    (window?.innerWidth > 500 ? 500 : window.innerWidth) - 50;

  const [videoLinks, setVideoLinks] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      //do api calls here instead
      setVideoLinks(_videoLinks);
    }, 1000);
  }, []);
  return (
    <div className={"page-body-container"}>
      <h3>Gallery - Videos</h3>
      {videoLinks?.length ? (
        <Row>
          {videoLinks.map((videoLink: string, videoIndex: number) => (
            <iframe
              key={videoIndex}
              title={"youtube-live"}
              style={{
                display: "block",
                margin: "auto",
                padding: "1rem"
              }}
              width={containerWidth}
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${videoLink}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
};
export { GalleryVideosPage };
