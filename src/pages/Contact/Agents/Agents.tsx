import React from "react";
import "App.scss";
import {Button, Card, Image} from "react-bootstrap";
import EG_FLAG from "assets/img/flags/eg.jpg";

const Agents = () => {
  return (
    <div className={"page-body-container"}>
      <h1>Agents</h1>
      <p>Contact with our Agents</p>
      <Card>
        <Card.Header as="h5">
          <Image src={EG_FLAG} width={30} />
          {"  "} Egypt
        </Card.Header>
        <Card.Body>
          <Card.Title>DERBY AAL NAGIB - EGYPT BRANCH</Card.Title>
          <Card.Text>Contact our branch in Egypt via</Card.Text>
          <Button variant="primary" href={"mailto:info@derbyaalnagib.com"}>
            Email
          </Button>{" "}
          <Button variant="primary" href={"tel:+201234567890"}>
            Phone
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export { Agents };
