import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Button, Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";

//Race & Training results

interface EventsAllTableRowEntry {
  _id: string;
  Category: "Race" | "Training";
  EVENT: string;
  Date: string;
  Liberation: string;
  Distance: string;
  Status: "NEW" | "Running" | "Finished";
}

interface ActionButtonProps {
  buttonType: "Basketing" | "Results";
  eventId: string | number;
}
const ActionButton = (props: ActionButtonProps) => {
  const history = useHistory();
  const { eventId, buttonType } = props;
  const onButtonClick = () => {
    switch (buttonType) {
      case "Basketing":
        console.log("Basketing", eventId);
        history.push("/");
        break;
      case "Results":
        console.log("Results", eventId);
        break;
      default:
        break;
    }
  };
  return (
    <div onClick={onButtonClick}>
      <div style={{ margin: "0 0.5rem" }}>
        <Button variant="outline-secondary">{buttonType}</Button>
      </div>
    </div>
  );
};

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState<EventsAllTableRowEntry[]>([]);
  useEffect(() => {
    NetworkHelper.get("/Events")
      .then(value => {
        if (value?.data && value.data?.length) {
          console.log("data", value.data);
          setAllEvents(value.data);
        }
      })
      .catch(reason => {
        console.log("Couldn't load Events data");
      });
  }, []);

  return (
    <div className={"page-body-container results-page"}>
      <h3>Race & Training Results</h3>
      {allEvents?.length ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Category</th>
              <th>Event</th>
              <th>Date</th>
              <th>Liberation</th>
              <th>Distance</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allEvents.map(
              (resultItem: EventsAllTableRowEntry, resultIndex: number) => {
                const {
                  _id,
                  Category,
                  EVENT,
                  Date,
                  Liberation,
                  Status,
                  Distance
                } = resultItem;
                return (
                  <tr key={resultIndex}>
                    <td>{Category}</td>
                    <td>{EVENT}</td>

                    <td>{Date}</td>
                    <td>{Liberation}</td>
                    <td>{Distance}</td>
                    <td>{Status}</td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <ActionButton buttonType={"Basketing"} eventId={_id} />
                        <ActionButton buttonType={"Results"} eventId={_id} />
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      ) : (
        <></>
      )}
    </div>
  );
};
export { AllEvents };
