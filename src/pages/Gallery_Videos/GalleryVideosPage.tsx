import React, {useEffect, useState} from "react";
import "App.scss";
import {Row} from "react-bootstrap";
import {NetworkHelper} from "modules/network/NetworkHelper";

const GalleryVideosPage = () => {
  const containerWidth =
    (window?.innerWidth > 500 ? 500 : window.innerWidth) - 50;

  const [youtubeLinks, setYoutubeLinks] = useState<string[]>([]);
  const [facebookVideoLinks, setFacebookVideoLinks] = useState<string[]>([]);

  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Videos"]
    })
      .then(value => {
        if (value.data?.Videos?.youtube?.length) {
          setYoutubeLinks(value.data?.Videos?.youtube);
        }
        if (value?.data?.Videos?.facebook?.length) {
          setFacebookVideoLinks(value?.data?.Videos?.facebook);
        }
      })
      .catch(reason => {
        console.log("Failed to load video links", reason);
      });
  }, []);
  return (
    <div className={"page-body-container"}>
      <h3>Gallery - Videos</h3>
      {youtubeLinks?.length ? (
        <Row>
          {youtubeLinks?.length ? (
            youtubeLinks.map((videoLink: string, videoIndex: number) => (
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
            ))
          ) : (
            <></>
          )}
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
