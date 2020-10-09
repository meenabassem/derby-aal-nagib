import React from "react";
import {Button, Create, DateTimeInput, SimpleForm, TextInput,} from "react-admin";
import {Link} from "react-router-dom";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// @ts-ignore
import {parse} from "query-string";

export const AddEventBasketingButton = ({ record }: any) => (
  <Button
    component={Link}
    to={`/EventBasketing/create?event_id=${record.id}`}
    label="Add event Basketing"
    title="Add event Basketing"
  >
    <ChatBubbleIcon />
  </Button>
);

export const EventBasketingCreate = (props: any) => {
  const { event_id } = parse(props.location.search);
  // const event_id = event_id_string ? parseInt(event_id_string, 10) : "";
  // Read the event_id from the location which is injected by React Router and passed to our component by react-admin automatically

  // ra-data-fakerest uses integers as identifiers, we need to parse the querystring
  // We also must ensure we can still create a new comment without having a event_id
  // from the url by returning an empty string if event_id isn't specified
  // const event_id = "3434"; //event_id_string ? parseInt(event_id_string, 10) : "";

  const redirect = event_id
    ? `/EventBasketing/create?event_id=${event_id}`
    : false;

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="Fancier" />
        <TextInput source="Team" />
        <TextInput source="Pigeon" />
        <TextInput source="Pigeon Name" />
        <DateTimeInput source="Basket Time" sortable={false} />
        <TextInput source="Speed [m/min]" />
      </SimpleForm>
    </Create>
  );
};
