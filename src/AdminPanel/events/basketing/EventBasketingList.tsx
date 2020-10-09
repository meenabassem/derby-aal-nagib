import {Datagrid, DateField, DeleteButton, TextField} from "react-admin";
import * as React from "react";

const EventBasketingList = (props: any) => {
  console.log("Events basketing list props", props);
  return (
    <Datagrid rowClick={"show"} {...props}>
      <TextField source="Fancier" sortable={false} />
      <TextField source="Team" sortable={false} />
      <TextField source="Country" sortable={false} />
      <TextField source="Pigeon" sortable={false} />
      <TextField source="Pigeon Name" sortable={false} />
      <DateField source="Basket Time" sortable={false} />
      <DeleteButton undoable={true} />
    </Datagrid>
  );
};
export { EventBasketingList };
