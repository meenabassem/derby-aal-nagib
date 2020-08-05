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
  // "79TX16AGYBM"
];

const _facebookVideLinks: string[] = [
  // "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F281974423055281%2F&show_text=false&width=734&appId=275763453238450&height=488",
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F1153726474985352%2F&show_text=false&width=734&appId=275763453238450&height=543",
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F2608725746053798%2F&show_text=false&width=734&appId=275763453238450&height=488",
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F280250916743008%2F&show_text=false&width=734&appId=275763453238450&height=551",
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F959580064471586%2F&show_text=false&width=734&appId=275763453238450&height=488",
  // "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F869610903547924%2F&show_text=false&width=734&appId=275763453238450&height=1305",
  // "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F101202794592601%2Fvideos%2F3084073914969148%2F&show_text=false&width=734&appId=275763453238450&height=1305"
];

const GalleryVideosPage = () => {
  const containerWidth =
    (window?.innerWidth > 500 ? 500 : window.innerWidth) - 50;

  const [videoLinks, setVideoLinks] = useState<string[]>([]);
  const [facebookVideoLinks, setFacebookVideoLinks] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      //do api calls here instead
      setVideoLinks(_videoLinks);
      setFacebookVideoLinks(_facebookVideLinks);
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
      {facebookVideoLinks?.length ? (
        <Row>
          {facebookVideoLinks.map((videoLink: string, videoIndex: number) => (
            <iframe
              key={videoIndex}
              src={videoLink}
              width={containerWidth}
              height="488"
              style={{ display: "block", margin: "auto", padding: "1rem" }}
              scrolling="no"
              frameBorder="0"
              // allowTransparency={true}
              allow="encrypted-media"
              // allowFullScreen="true"
            ></iframe>
          ))}{" "}
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
};
export { GalleryVideosPage };
