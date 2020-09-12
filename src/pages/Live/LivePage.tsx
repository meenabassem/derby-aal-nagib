import React, {useEffect, useState} from "react";
import "App.scss";
import {NetworkHelper} from "modules/network/NetworkHelper";

export interface LivePageData {
  isAvailable: boolean;
  date?: Date;
  facebook?: string;
  youtube?: string;
}

const LivePage = () => {
  const containerWidth =
    (window?.innerWidth > 500 ? 500 : window.innerWidth) - 50;
  const [liveDataMessage, setLiveDataMessage] = useState<string>("Loading ...");
  const [livePageData, setLivePageData] = useState<LivePageData>();
  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["LIVE"]
    })
      .then(value => {
        if (value.data?.LIVE?.isAvailable) {
          setLivePageData(value.data.LIVE);
        } else {
          setLiveDataMessage("No live data available now");
        }
      })
      .catch(reason => {
        console.log("Failed to load Live page Data", reason);
        setLiveDataMessage("Failed to load live data, please try again later");
      });
  }, []);

  return livePageData?.isAvailable &&
    (livePageData.facebook || livePageData.youtube) ? (
    <div className={"page-body-container"}>
      <h3>Live Results</h3>
      {livePageData.youtube ? (
        <iframe
          title={"youtube-live"}
          style={{
            display: "block",
            margin: "auto",
            padding: "1rem"
          }}
          width={containerWidth}
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${livePageData.youtube}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <></>
      )}
      {livePageData.facebook ? (
        <iframe
          src={livePageData.facebook}
          width={containerWidth}
          height="488"
          style={{ display: "block", margin: "auto", padding: "1rem" }}
          scrolling="no"
          frameBorder="0"
          // allowTransparency={true}
          allow="encrypted-media"
          // allowFullScreen="true"
        ></iframe>
      ) : (
        <></>
      )}
      :<></>
    </div>
  ) : (
    <h3>{liveDataMessage}</h3>
  );
};
export { LivePage };
