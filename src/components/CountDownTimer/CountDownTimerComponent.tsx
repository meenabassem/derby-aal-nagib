import React, {useEffect, useState} from "react";
import moment from "moment";
import "./CountDownTimerComponent.scss";

export interface CountDownTimerProps {
  timeTillDate: Date;
}
const CountDown = (props: CountDownTimerProps) => {
  const { timeTillDate } = props;
  const [days, setDays] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout>();

  const [daysRadius, setDaysRadius] = useState<number>(0);
  const [hoursRadius, setHoursRadius] = useState<number>(0);
  const [minutesRadius, setMinutesRadius] = useState<number>(0);
  const [secondsRadius, setSecondsRadius] = useState<number>(0);

  useEffect(() => {
    const _interval: NodeJS.Timeout = setInterval(() => {
      const then: moment.Moment = moment(timeTillDate);
      const now: moment.Moment = moment();
      // @ts-ignore
      const countdown: moment.Moment = moment(then - now);
      const _days = countdown.format("D");
      const _hours = countdown.format("HH");
      const _minutes = countdown.format("mm");
      const _seconds = countdown.format("ss");

      setDays(_days);
      setHours(_hours);
      setMinutes(_minutes);
      setSeconds(_seconds);
      setDaysRadius(mapNumber(Number(_days), 30, 0, 0, 360));
      setHoursRadius(mapNumber(Number(_hours), 24, 0, 0, 360));
      setMinutesRadius(mapNumber(Number(_minutes), 60, 0, 0, 360));
      setSecondsRadius(mapNumber(Number(_seconds), 60, 0, 0, 360));
    }, 1000);

    setTimerInterval(_interval);

    return function cleanup() {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(undefined);
      }
    };
  }, []);
  if (!seconds) {
    return null;
  }

  return (
    <div>
      {/*<h1>Countdown</h1>*/}
      <div className="countdown-wrapper">
        {days && (
          <div className="countdown-item">
            <SVGCircle radius={daysRadius} />
            {days}
            <span>days</span>
          </div>
        )}
        {hours && (
          <div className="countdown-item">
            <SVGCircle radius={hoursRadius} />
            {hours}
            <span>hours</span>
          </div>
        )}
        {minutes && (
          <div className="countdown-item">
            <SVGCircle radius={minutesRadius} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {seconds && (
          <div className="countdown-item">
            <SVGCircle radius={secondsRadius} />
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SVGCircle = ({ radius }: { radius: number }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
};

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const mapNumber = (
  number: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
};

export { CountDown };
