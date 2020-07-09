import React from "react";
import "App.scss";
import {Col, Row} from "react-bootstrap";

const paragraphs: string[] = [
  "The competition is growing at the Victoria Falls One-Loft-Race with many internationally renowned pigeon fanciers testing their breeding against the best in the world. Join us at Africa’s most majestic and safest tourist destination for a world class One-Loft-Race with a prize pot of&nbsp;<strong>US$1 200 000!</strong>",
  "Victoria Falls, one of the seven Natural Wonders of the World, is the sublime Southern African location for the US$1 200 000 One-Loft race series, now entering its fourth year. The final yearling race in August 2020, from a distance of 600 km (373 miles), will be in tough, arid African conditions that is a test-of-the-best and a supreme showcase for the world’s top breeders.\n",
  "The US$1 200,000 annual prize money includes the lucrative first prize of US$225,000 for the winner of the final race with prizes paying up to 200 places. There are prizes for 5 hotspot races, the Ace bird competition, Grand Averages as well as the Team and Knock-Out competitions. We have also introduced a new competition this year, the Super Ace which is the best bird clocked over the longer races.\n",
  "Victoria Falls on the mighty Zambezi River, is the acclaimed Adventure and Nature Capital of Africa, with Hwange National Park on its doorstep and Chobe (Botswana) just 80 km away to ensure sighting of some of the most spectacular big-game wildlife on earth!\n",
  "The area has an astonishing array of activities, from the high-adrenaline of the world’s finest white-water rafting to the gentler mode of luxury cocktail sunset cruises. Accommodation suits all pockets with over 2 000 rooms in the area from the ultra-luxury and exclusive bush/river lodges to a series of 3, 4 and 5 star hotels and resorts.\n"
];

const AboutPage = () => {
  const containerWidth = window?.innerWidth > 500 ? 500 : window.innerWidth;

  return (
    <div className={"page-body-container"}>
      <h2>About page</h2>

      <Col>
        <Row>
          <iframe
            title={"youtube-live"}
            style={{
              display: "block",
              margin: "auto",
              padding: "1rem"
              // marginTop: "10px",
              // marginRight: "6px"
            }}
            width={containerWidth}
            height="315"
            src={`https://www.youtube-nocookie.com/embed/-ccwmnBq6ao`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ul>
            {paragraphs.map((paragraph: string, paragraphIndex: number) => (
              <li key={paragraphIndex}>{paragraph}</li>
            ))}
          </ul>
        </Row>
      </Col>
    </div>
  );
};

export { AboutPage };
