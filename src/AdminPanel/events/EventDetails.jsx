//1 @ts-nocheck
import {DateInput, ReferenceManyField, Show, SimpleForm, Tab, TabbedShowLayout, TextInput,} from "react-admin";
import * as React from "react";
import {EventBasketingList} from "./basketing/EventBasketingList";
import {EventsResultsList} from "./results/EventResultsList";
import {AddEventResultButton} from "./results/EventResultCreate";
import {AddEventBasketingButton} from "./basketing/EventBasketingCreate";

const EventDetails = (props) => {
  const { hasShow, ...showProps } = props;
  return (
    <Show hasShow={hasShow} {...showProps}>
      <TabbedShowLayout>
        <Tab label="Event Details">
          <SimpleForm>
            {/*<ReferenceInput source="_id" reference="s"><SelectInput optionText="id" /></ReferenceInput>*/}
            <TextInput source="Category" />
            <TextInput source="Event" />
            <DateInput source="Date" />
            <TextInput source="Liberation" />
            <TextInput source="Distance" />
            <TextInput source="Status" />
          </SimpleForm>
        </Tab>
        <Tab label="Results" path="EventResults">
          <AddEventResultButton />

          <ReferenceManyField
            addLabel={false}
            source="id"
            reference={"EventResults"}
            target="id"
          >
            <EventsResultsList />
          </ReferenceManyField>
        </Tab>
        <Tab label="Basketing" path="EventBasketing">
          <AddEventBasketingButton />
          <ReferenceManyField
            addLabel={false}
            source="id"
            reference={"EventBasketing"}
            target="id"
          >
            <EventBasketingList />
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};
export { EventDetails };
