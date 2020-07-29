import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Button, Col, Form, FormControl, InputGroup, Row, Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";
import * as yup from "yup";
import {Formik} from "formik";
import {ApiLoadedStatus} from "modules/network/ApiLoadedStatus";

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
        history.push(`/results/basketing/${eventId}`);
        break;
      case "Results":
        history.push(`/results/events/${eventId}`);
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

  const [apiResponseStatus, setApiResponseStatus] = useState<ApiLoadedStatus>(
    "LOADING"
  );
  const loadEventsFromApi = (searchQuery: string = "") => {
    setApiResponseStatus("LOADING");
    NetworkHelper.get("/Events", { params: { q: searchQuery } })
      .then(value => {
        if (value?.data && value.data?.length) {
          setAllEvents(value.data);
          setApiResponseStatus("LOADED");
        } else {
          setAllEvents([]);
          setApiResponseStatus("NO_RESULTS");
        }
      })
      .catch(reason => {
        console.log("Couldn't load Events data");
        setApiResponseStatus("ERROR");
      });
  };

  useEffect(() => {
    loadEventsFromApi();
  }, []);

  const schema = yup.object({
    searchField: yup.string()
  });

  const onSearchSubmit = (event: any) => {
    loadEventsFromApi(event.searchField);
  };
  const RenderEventsResults = () => {
    switch (apiResponseStatus) {
      case "ERROR":
        return (
          <div>
            An error has occurred while loading the data, please try again later
          </div>
        );
      case "LOADED":
        return (
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
                          <ActionButton
                            buttonType={"Basketing"}
                            eventId={_id}
                          />
                          <ActionButton buttonType={"Results"} eventId={_id} />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        );
      case "LOADING":
        return <div>Loading ....</div>;
      case "NO_RESULTS":
        return <div>No results found matching your search</div>;
    }
  };
  return (
    <div className={"page-body-container results-page"}>
      <Row>
        <Col sm={6}>
          <h3>Race & Training Results</h3>
        </Col>
        <Col sm={6}>
          <Formik
            validationSchema={schema}
            initialValues={{
              searchField: ""
            }}
            onSubmit={onSearchSubmit}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Col>
                  <Form.Group controlId={"searchField"}>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Search"
                        aria-label="Search here"
                        aria-describedby="basic-addon2"
                        value={values.searchField}
                        onChange={handleChange}
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" type={"submit"}>
                          Search
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
      <RenderEventsResults />
    </div>
  );
};
export { AllEvents };
