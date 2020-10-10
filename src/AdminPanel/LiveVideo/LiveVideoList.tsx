import {BooleanField, Datagrid, List, TextField,} from "react-admin";
import React from "react";

const LiveVideoList = (props: any) => {
  console.log("Events LiveVideoList", props);
  return (
    <List {...props} pagination={false}>
      <Datagrid rowClick={"edit"}>

        <BooleanField source="isAvailable" sortable={false} />
        <TextField source="facebook" sortable={false} />
        <TextField source="youtube" sortable={false} />

        {/*<MyUrlField />*/}
        {/*<ShowButton />*/}

        {/*<EditButton />*/}
      </Datagrid>
    </List>
  );
};
export { LiveVideoList };
