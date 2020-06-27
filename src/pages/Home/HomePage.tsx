import React from "react";
import {FacebookFeed} from "components/FacebookFeed/FacebookFeed";
import {WeatherFeed} from "components/WeatherFeed/WeatherFeed";

const HomePage = () => {
  return (
    <div>
      <FacebookFeed />
      <WeatherFeed />
    </div>
  );
};
export { HomePage };
