import {Datagrid, DateField, DeleteButton, TextField} from "react-admin";
import * as React from "react";

const EventsResultsList = (props: any) => {
  console.log("Events result list props", props);
  return (
    <Datagrid rowClick={"show"} {...props}>
      <TextField source="Rank" sortable={false} />
      <TextField source="Fancier" sortable={false} />
      <TextField source="Pigeon" sortable={false} />
      <TextField source="Pigeon Name" sortable={false} />
      <TextField source="Team" sortable={false} />
      <TextField source="Country" sortable={false} />
      <DateField source="Arrival" sortable={false} />
      <TextField source="Speed [m/min]" sortable={false} />
      <DeleteButton undoable={true} />
    </Datagrid>
  );
};
export { EventsResultsList };
