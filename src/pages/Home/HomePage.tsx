import React from "react";
import {FacebookFeed} from "components/FacebookFeed/FacebookFeed";
import {WeatherFeed} from "components/WeatherFeed/WeatherFeed";
import {HomeImageSlider} from "components/HomeImageSlider/HomeImageSlider";
import "./HomePage.scss";
import {Container, Row} from "react-bootstrap";
import {TopStoriesComponent} from "components/TopStories/TopStoriesComponent";
import {TopStoriesListItemProps} from "components/TopStories/TopStoriesListItem";

const HomePage = () => {
  const imageSliderImages = [
    "https://media.oneloftrace.live/teaser/IMG_9696.JPG",
    "https://media.oneloftrace.live/teaser/IMG_9684.JPG",
    "https://media.oneloftrace.live/teaser/IMG_9645.JPG",
    "https://media.oneloftrace.live/teaser/IMG_8776.JPG",
    "https://media.oneloftrace.live/teaser/IMG_7616.JPG",
    "https://media.oneloftrace.live/teaser/IMG_5747.JPG",
    "https://media.oneloftrace.live/teaser/IMG_4159.JPG",
    "https://media.oneloftrace.live/teaser/IMG_3971.JPG",
    "https://media.oneloftrace.live/teaser/IMG_3536.JPG",
    "https://media.oneloftrace.live/teaser/IMG_3436.JPG"
  ];
  const stories: TopStoriesListItemProps[] = [
    {
      title: "Race 5 - Hotspot 2 - 2020-06-26",
      body:
        "\tBonus Races for Hotspot 2 – Global @ 20:1 and Country @ 4:1. Don’t forget to enter! Race 5 – HOTSPOT 2 Scheduled for tomorrow morning, Saturday 27 June from 235 km at 08:00. You can view the Running Race."
    },
    {
      title: "Race 5 - Hotspot 2 - 2020-06-26",
      body:
        "\tBonus Races for Hotspot 2 – Global @ 20:1 and Country @ 4:1. Don’t forget to enter! Race 5 – HOTSPOT 2 Scheduled for tomorrow morning, Saturday 27 June from 235 km at 08:00. You can view the Running Race."
    },
    {
      title: "Race 5 - Hotspot 2 - 2020-06-26",
      body:
        "\tBonus Races for Hotspot 2 – Global @ 20:1 and Country @ 4:1. Don’t forget to enter! Race 5 – HOTSPOT 2 Scheduled for tomorrow morning, Saturday 27 June from 235 km at 08:00. You can view the Running Race."
    }
  ];
  return (
    <div className={"home-page-container"}>
      <HomeImageSlider images={imageSliderImages} />
      <Container fluid>
        <Row>
          <TopStoriesComponent stories={stories} />
          <FacebookFeed />
          <WeatherFeed />
        </Row>
      </Container>
    </div>
  );
};
export { HomePage };
