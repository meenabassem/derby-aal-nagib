import React, {useEffect, useState} from "react";
import {HomeImageSlider} from "components/HomeImageSlider/HomeImageSlider";
import "./HomePage.scss";
import {Container, Row} from "react-bootstrap";
import {TopStoriesListItemProps} from "components/TopStories/TopStoriesListItem";
import {CountDownTimer} from "components/CountDownTimer/CountDownTimer";
import {TopStoriesComponent} from "components/TopStories/TopStoriesComponent";
import {FacebookFeed} from "components/FacebookFeed/FacebookFeed";
import {WeatherFeed} from "components/WeatherFeed/WeatherFeed";
import {NetworkHelper} from "modules/network/NetworkHelper";
import moment from "moment";

const HomePage = () => {
  const [imageSliderImages, setImageSliderImages] = useState<string[]>([]);
  const [countDownTimerDate, setCountDownTimeDate] = useState<Date>();
  const [topStories, setTopStories] = useState<TopStoriesListItemProps[]>([]);
  //Image slider Images are loaded here
  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Banner_Images"]
    })
      .then(value => {
        if (value.data?.Banner_Images?.length) {
          setImageSliderImages(value.data.Banner_Images);
        } else {
          console.log("Failed to load Banner Images");
        }
      })
      .catch(reason => {
        console.log("Failed to load banner images", reason);
      });
  }, []);

  //Top Stories, and Final Race Date
  useEffect(() => {
    NetworkHelper.get("/Events", { params: { req_limit: 3 } })
      .then(value => {
        if (value?.data && value.data?.length) {
          //Set final race date, from latest event
          if (value.data[0]?.Date && new Date(value.data[0]?.Date)) {
            setCountDownTimeDate(value.data[0]?.Date);
          }
          //map the events from response to stories
          const stories = value.data.map((storyItem: any) => ({
            title: `${storyItem.Category} - ${storyItem.Liberation} - ${moment(
              storyItem.Date
            ).format("Do MMMM YYYY")}`,
            body: `Don't forget to enter! ${storyItem.Category} - ${
              storyItem.Event
            } at ${moment(storyItem.Date).format(
              "Do MMMM YYYY"
            )}\nLiberation: ${storyItem?.Liberation}\nDistance: ${
              storyItem?.Distance
            }`
          }));
          //Set Top Stories
          setTopStories(stories);
        } else {
        }
      })
      .catch(reason => {});
  }, []);

  return (
    <div className={"home-page-container"}>
      <HomeImageSlider images={imageSliderImages} />
      <Container fluid>
        <Row>
          {/*<TopStoriesComponent stories={stories} />*/}
          <TopStoriesComponent stories={topStories} />
          {countDownTimerDate && (
            <CountDownTimer
              title={"Final Race Date"}
              endDate={new Date(countDownTimerDate)}
            />
          )}
        </Row>
        <Row>
          <FacebookFeed />

          <WeatherFeed />
        </Row>
      </Container>
    </div>
  );
};
export { HomePage };
