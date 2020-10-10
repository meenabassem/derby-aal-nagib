import * as React from "react";
// @ts-ignore
import {Create, DateInput, SelectInput, SimpleForm, TextInput,} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import {baseURL} from "../modules/network/NetworkHelper";

export const PostIcon = BookIcon;

const MyUrlField = ({ record = {}, source }: any) => {
  console.log("my url field", record);
  return <a href={record[source]}>{record[source]}</a>;
};
const BasketingUrlField = ({ record = {}, source }: any) => {
  console.log("my url field", record);
  const url = `${baseURL}Results?id=/${record["_id"]}`;
  return <a href={record["_id"]}>Basketing</a>;
};

export default MyUrlField;

const EventTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const EventCreate = (props: any) => (
  <Create title="Create an Event" {...props}>
    <SimpleForm>
      <SelectInput
        source="Category"
        choices={[
          { id: "Race", name: "Race" },
          { id: "Training", name: "Training" },
        ]}
      />
      <TextInput source="Event" sortable={false} />
      <DateInput source="Date" sortable={false} />
      <TextInput source="Liberation" sortable={false} />
      <TextInput source="Distance" sortable={false} />
      <SelectInput
        source="Status"
        choices={[
          { id: "New", name: "New" },
          { id: "Upcoming", name: "Upcoming" },
          { id: "Old", name: "Old" },
        ]}
      />
    </SimpleForm>
  </Create>
);
