import React from "react";
import {Button, Create, DateTimeInput, NumberInput, SimpleForm, TextInput,} from "react-admin";
import {Link} from "react-router-dom";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// @ts-ignore
import {parse} from "query-string";

export const AddEventResultButton = ({ record }: any) => (
  <Button
    component={Link}
    to={`/EventResults/create?event_id=${record.id}`}
    label="Add event result"
    title="Add event result"
  >
    <ChatBubbleIcon />
  </Button>
);

const EventResultCreate = (props: any) => {
  console.log("events resutls create props", props);
  const { event_id } = parse(props.location.search);
  // const event_id = event_id_string ? parseInt(event_id_string, 10) : "";
  console.log("Post ID", event_id);
  // Read the event_id from the location which is injected by React Router and passed to our component by react-admin automatically

  // ra-data-fakerest uses integers as identifiers, we need to parse the querystring
  // We also must ensure we can still create a new comment without having a event_id
  // from the url by returning an empty string if event_id isn't specified
  // const event_id = "3434"; //event_id_string ? parseInt(event_id_string, 10) : "";

  const redirect = event_id
    ? `/EventResults/create?event_id=${event_id}`
    : false;
  // {
  //     "_id" : "3",
  //     "Rank" : "3",
  //     "Fancier" : "محمد احمد محمد",
  //     "Team" : "n/a",
  //     "Country" : "EG",
  //     "Pigeon" : "2517",
  //     "Arrival" : "07.06.2020 11:38:24.71",
  //     "Speed [m/min]" : "14.774900000000001",
  //     "Pigeon Name" : ""
  // }
  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        {/*<ReferenceInput source="event_id" reference="EventResults" allowEmpty>*/}
        {/*  <SelectInput optionText="title" />*/}
        {/*</ReferenceInput>*/}

        <NumberInput source="Rank" />
        <TextInput source="Fancier" />
        <TextInput source="Pigeon" />
        <TextInput source="Pigeon Name" />
        <TextInput source="Team" />
        {/*<TextInput source="Country" />*/}
        <DateTimeInput source="Arrival" />
        <TextInput source="Speed [m/min]" />
      </SimpleForm>
    </Create>
  );
};

export default EventResultCreate;
