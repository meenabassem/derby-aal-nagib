import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Button, Table} from "react-bootstrap";
import moment from "moment";
import {shuffle} from "lodash";
import {useHistory} from "react-router-dom";

//Race & Training results

interface ResultsAllTableRowEntry {
  raceId: string | number;
  event: string;
  date: string | Date;
  liberation: string;
  distance: string;
  status: "Finished" | string;
  Basketing?: boolean;
  Results?: boolean;
  Prizes?: boolean;
}

let results: ResultsAllTableRowEntry[] = [
  {
    raceId: String(new Date().getTime()).substr(4, 10),
    event: "Training Flight 25",
    date: moment(new Date()).format("l h:mm:ss"),
    liberation: "Kazangula Road",
    status: "Finished",
    distance: "60km",
    Basketing: true
  },
  {
    raceId: String(new Date().getTime()).substr(4, 10),
    event: "Training Flight 25",
    date: moment(new Date()).format("l h:mm:ss"),
    liberation: "Kazangula Road",
    status: "Finished",
    distance: "20km",
    Basketing: true,
    Results: true
  },
  {
    raceId: String(new Date().getTime()).substr(4, 10),
    event: "Training Flight 25",
    date: moment(new Date()).format("l h:mm:ss"),
    liberation: "Kazangula Road",
    status: "Finished",
    distance: "30km",
    Basketing: true,
    Results: true,
    Prizes: true
  }
];

interface ActionButtonProps {
  buttonType: "Basketing" | "Results" | "Prizes";
  raceId: string | number;
  isAvailable: boolean;
}
const ActionButton = (props: ActionButtonProps) => {
  const history = useHistory();
  const { raceId, buttonType, isAvailable } = props;
  const onButtonClick = () => {
    switch (buttonType) {
      case "Basketing":
        console.log("Basketing", raceId);
        break;
      case "Prizes":
        console.log("Prizes", raceId);

        break;
      case "Results":
        console.log("Results", raceId);
        break;
      default:
        break;
    }
  };
  return isAvailable ? (
    <div onClick={onButtonClick}>
      <div style={{ margin: "0 0.5rem" }}>
        <Button variant="outline-secondary">{buttonType}</Button>
      </div>
    </div>
  ) : (
    <></>
  );
};

const ResultsAll = () => {
  const [allResults, setAllResults] = useState<ResultsAllTableRowEntry[]>(
    results
  );

  useEffect(() => {
    const _result = [
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results,
      ...results
    ];
    setAllResults(shuffle(_result));
  }, []);
  // const [allResults, setAllResults] = useState<ResultsAllTableRowEntry[]>([]);
  return (
    <div className={"page-body-container results-page"}>
      <h3>Race & Training Results</h3>
      {allResults?.length ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Liberation</th>
              <th>Distance</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allResults.map(
              (resultItem: ResultsAllTableRowEntry, resultIndex: number) => {
                const {
                  raceId,
                  event,
                  date,
                  liberation,
                  status,
                  distance,
                  Basketing,
                  Results,
                  Prizes
                } = resultItem;
                return (
                  <tr key={resultIndex}>
                    <td>{event}</td>
                    <td>{date}</td>
                    <td>{liberation}</td>
                    <td>{distance}</td>
                    <td>{status}</td>
                    <td>
                      {Basketing || Results || Prizes ? (
                        <div style={{ display: "flex" }}>
                          <ActionButton
                            buttonType={"Basketing"}
                            isAvailable={Basketing || false}
                            raceId={raceId}
                          />{" "}
                          <ActionButton
                            buttonType={"Results"}
                            isAvailable={Results || false}
                            raceId={raceId}
                          />{" "}
                          <ActionButton
                            buttonType={"Prizes"}
                            isAvailable={Prizes || false}
                            raceId={raceId}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
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
export { ResultsAll };
