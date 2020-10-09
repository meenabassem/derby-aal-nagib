// @ts-ignore
import {Admin, Resource} from "react-admin";
import React from "react";
import DataProviders from "./DataProviders";
import {EventCreate, PostIcon} from "./AdminEvents";
import {EventDetails, EventList} from "./events";
import EventResultCreate from "./events/results/EventResultCreate";
import {EventBasketingCreate} from "./events/basketing/EventBasketingCreate";

const AdminPanel = () => (
  <Admin dataProvider={DataProviders}>
    <Resource
      name="Events"
      list={EventList}
      show={EventDetails}
      create={EventCreate}
      icon={PostIcon}
    />
    <Resource name="EventResults" create={EventResultCreate} />
    <Resource name="EventBasketing" create={EventBasketingCreate} />
    <Resource name="tags" />
  </Admin>
);
export { AdminPanel };
