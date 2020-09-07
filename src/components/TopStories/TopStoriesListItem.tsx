import React from "react";
import {Card} from "react-bootstrap";

type TopStoriesListItemProps = {
  title?: string;
  body?: string;
};
const TopStoriesListItem: React.FC<TopStoriesListItemProps> = (
  props: TopStoriesListItemProps
) => {
  const { title, body } = props;
  return (
    <Card style={{marginBottom:'10px'}}>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        {/*<Card.Title>Special title treatment</Card.Title>*/}
        <Card.Text style={{  whiteSpace: "pre-wrap"}}>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export { TopStoriesListItem };
export type {TopStoriesListItemProps};
