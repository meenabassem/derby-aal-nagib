import React from "react";
import {CountDown} from "components/CountDownTimer/CountDownTimerComponent";
import moment from "moment";
import {Card} from "react-bootstrap";

export interface CountDownTimerProps {
  title: string;
  endDate: Date;
}
const CountDownTimer = (props: CountDownTimerProps) => {
  const { endDate, title } = props;
  const formattedDate = moment(endDate).format("Do MMMM YYYY");

  return (
    <div
      style={{ display: "block", margin: "20px auto" }}
      className={"col-lg-6 col-md-12"}
    >
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{formattedDate}</Card.Title>
          <CountDown timeTillDate={endDate} />
        </Card.Body>
      </Card>
    </div>
  );
};
export { CountDownTimer };
