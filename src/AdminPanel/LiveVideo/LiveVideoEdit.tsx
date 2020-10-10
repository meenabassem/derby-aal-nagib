import {BooleanInput, Edit, SimpleForm, TextInput,} from "react-admin";
import React from "react";

export const LivelookupEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <BooleanInput source="isAvailable" />
      <TextInput source="facebook" />
      <TextInput source="youtube" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
