import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";
// @ts-ignore
import ReactCountryFlag from "react-country-flag";
//Race & Training results
type stringOrNumber = string | number;
interface ResultsAllTableRowEntry {
  _id: stringOrNumber;
  RANK: stringOrNumber;
  Fancier: string;
  Team: string;
  Country: string;
  Pigeon: string;
  Arrival: string;
  "Speed [m/min]": string;
  "Pigeon Name": string;
}
const EventResults = () => {
  const [allResults, setAllResults] = useState<ResultsAllTableRowEntry[]>([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("get Events from API");
    NetworkHelper.get("/Results", {
      params: {
        id,
        resultType: "result"
      }
    })
      .then(value => {
        console.log("results data", value);
        if (value.data?.Result?.length) {
          setAllResults(value.data.Result);
        }
      })
      .catch(reason => {
        console.log("Couldn't load results data");
      });
  }, []);

  return (
    <div className={"page-body-container results-page"}>
      <h3>Race & Training Results</h3>
      {allResults?.length ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Fancier</th>
              <th>Team</th>
              <th>Country</th>
              <th>Pigeon</th>
              <th>Arrival</th>
              <th>Speed [m/min]</th>
              <th>Pigeon Name</th>
            </tr>
          </thead>

          <tbody>
            {allResults.map(
              (resultItem: ResultsAllTableRowEntry, resultIndex: number) => {
                const {
                  _id,
                  RANK,
                  Fancier,
                  Team,
                  Country,
                  Pigeon,
                  Arrival
                } = resultItem;
                return (
                  <tr key={resultIndex}>
                    <td>{RANK}</td>
                    <td>{Fancier}</td>
                    <td>{Team}</td>
                    <td>
                      <ReactCountryFlag
                        countryCode={Country}
                        svg
                        style={{
                          fontSize: "2em",
                          lineHeight: "2em"
                        }}
                      />
                    </td>

                    <td>{Pigeon}</td>
                    <td>{Arrival}</td>
                    <td>{resultItem["Speed [m/min]"]}</td>
                    <td>{resultItem["Pigeon Name"]}</td>
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
export { EventResults };
