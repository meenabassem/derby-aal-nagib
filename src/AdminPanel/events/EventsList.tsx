import {ChipField, Datagrid, DateField, List, NumberField, TextField,} from "react-admin";
import React from "react";

const EventList = (props: any) => {
  console.log("event list props");
  return (
    <List {...props} pagination={false}>
      <Datagrid rowClick={"show"}>
        <TextField source="Category" sortable={false} />
        <TextField source="Event" sortable={false} />
        <DateField source="Date" sortable={false} />
        <TextField source="Liberation" sortable={false} />
        <NumberField source="Distance" sortable={false} />
        <ChipField source="Status" sortable={false} />
        {/*<MyUrlField />*/}
        {/*<ShowButton />*/}

        {/*<EditButton />*/}
      </Datagrid>
    </List>
  );
};
export { EventList };
