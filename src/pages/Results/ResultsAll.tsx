import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Button, Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";

//Race & Training results

interface ResultsAllTableRowEntry {
  _id: string;
  EVENT: string;
  Date: string | Date;
  Liberation: string;
  Distance: string;
  Status: "Finished" | string;

  Basketing?: boolean;
  raceId?: string | number;
  Results?: boolean;
  Prizes?: boolean;
}

// let results: ResultsAllTableRowEntry[] = [
//   {
//     raceId: String(new Date().getTime()).substr(4, 10),
//     Event: "Training Flight 25",
//     Date: moment(new Date()).format("l h:mm:ss"),
//     Liberation: "Kazangula Road",
//     Status: "Finished",
//     Distance: "60km",
//     Basketing: true
//   },
//   {
//     raceId: String(new Date().getTime()).substr(4, 10),
//     Event: "Training Flight 25",
//     Date: moment(new Date()).format("l h:mm:ss"),
//     Liberation: "Kazangula Road",
//     Status: "Finished",
//     Distance: "20km",
//     Basketing: true,
//     Results: true
//   },
//   {
//     raceId: String(new Date().getTime()).substr(4, 10),
//     Event: "Training Flight 25",
//     Date: moment(new Date()).format("l h:mm:ss"),
//     Liberation: "Kazangula Road",
//     Status: "Finished",
//     Distance: "30km",
//     Basketing: true,
//     Results: true,
//     Prizes: true
//   }
// ];

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
        history.push("/");
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
  const [allResults, setAllResults] = useState<ResultsAllTableRowEntry[]>([]);
  useEffect(() => {
    console.log("get data from API");
    NetworkHelper.get("/index")
      .then(value => {
        if (value?.data && value.data?.length) {
          console.log("data", value.data);
          setAllResults(value.data);
        }
      })
      .catch(reason => {
        console.log("Couldn't load results data");
      });
  }, []);

  // useEffect(() => {
  //   const _result = [
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results,
  //     ...results
  //   ];
  //   setAllResults(shuffle(_result));
  // }, []);
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
                  _id,
                  raceId,
                  EVENT,
                  Date,
                  Liberation,
                  Status,
                  Distance,
                  Basketing,
                  Results,
                  Prizes
                } = resultItem;
                return (
                  <tr key={resultIndex}>
                    <td>{EVENT}</td>
                    <td>{Date}</td>
                    <td>{Liberation}</td>
                    <td>{Distance}</td>
                    <td>{Status}</td>
                    <td>
                      {true || Basketing || Results || Prizes ? (
                        <div style={{ display: "flex" }}>
                          <ActionButton
                            buttonType={"Basketing"}
                            isAvailable={Basketing || true}
                            raceId={_id}
                          />{" "}
                          <ActionButton
                            buttonType={"Results"}
                            isAvailable={Results || true}
                            raceId={_id}
                          />{" "}
                          <ActionButton
                            buttonType={"Prizes"}
                            isAvailable={Prizes || true}
                            raceId={_id}
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
