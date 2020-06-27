import React from "react";

const WeatherFeed: React.FC = () => {
  return (
    <div style={{ display: "block", margin: "20px auto" }} >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.booked.net/weather/alexandria-1174,922,49546,11351"
      >
        <img
          src="https://w.bookcdn.com/weather/picture/2_1174,922,49546,11351_1_1_009f5d_350_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=72424"
          alt="booked.net"
        />
      </a>
    </div>
  );
};
export { WeatherFeed };
