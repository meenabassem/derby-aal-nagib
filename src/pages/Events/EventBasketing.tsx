import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Button, Col, Form, FormControl, InputGroup, Row, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";
import * as yup from "yup";
import {Formik} from "formik";
import {ApiLoadedStatus} from "modules/network/ApiLoadedStatus";

// @ts-ignore
//Race & Training results
type stringOrNumber = string | number;
interface ResultsBasketingTableRowEntry {
  _id: stringOrNumber;
  Fancier: string;
  Team: string;
  Country: string;
  Pigeon: string;
  "Pigeon Name": string;
  "Basket Time": string;
}
const EventBasketing = () => {
  const [allResults, setAllResults] = useState<ResultsBasketingTableRowEntry[]>(
    []
  );
  const [apiResponseStatus, setApiResponseStatus] = useState<ApiLoadedStatus>(
    "LOADING"
  );
  const { id } = useParams();

  const loadEventsFromApi = (searchQuery: string = "") => {
    console.log("get Basketing from API");
    setApiResponseStatus("LOADING");
    NetworkHelper.get("/Results", {
      params: {
        id,
        resultType: "basketing",
        q: searchQuery
      }
    })
      .then(value => {
        if (value.data?.Basketing?.length) {
          setAllResults(value.data.Basketing);
          setApiResponseStatus("LOADED");
        } else {
          setAllResults([]);
          setApiResponseStatus("NO_RESULTS");
        }
      })
      .catch(reason => {
        console.log("Couldn't load results data");
        setApiResponseStatus("ERROR");
      });
  };
  useEffect(() => loadEventsFromApi(), []);

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
                <th>Fancier</th>
                <th>Team</th>
                <th>Country</th>
                <th>Pigeon</th>
                <th>Pigeon Name</th>
                <th>Basket Time</th>
              </tr>
            </thead>

            <tbody>
              {allResults.map(
                (
                  resultItem: ResultsBasketingTableRowEntry,
                  resultIndex: number
                ) => {
                  const { Fancier, Team, Country, Pigeon } = resultItem;
                  return (
                    <tr key={resultIndex}>
                      <td>{Fancier}</td>
                      <td>{Team}</td>
                      <td>{Country}</td>
                      <td>{Pigeon}</td>
                      <td>{resultItem["Pigeon Name"]}</td>
                      <td>{resultItem["Basket Time"]}</td>
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
          <h3>Basketing</h3>
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
export { EventBasketing };
