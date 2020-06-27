import React from "react";
import AwesomeSlider from "react-awesome-slider";
// @ts-ignore
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./HomeImageSlider.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

type HomeImageSliderProps = {
  images?: string[];
  interval?: number;
};

const HomeImageSlider: React.FC<HomeImageSliderProps> = (
  props: HomeImageSliderProps
) => {
  const { images, interval } = props;
  return images?.length ? (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={interval}
        className={"homeImageSliderContainer"}
      >
        {images.map((_image, imageIndex) => (
          <div key={imageIndex} data-src={_image} />
        ))}
      </AutoplaySlider>
    </div>
  ) : (
    <></>
  );
};
HomeImageSlider.defaultProps = {
  images: [],
  interval: 3000
};
export { HomeImageSlider };
