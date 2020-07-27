import React, {useEffect, useState} from "react";
import "App.scss";
import "./Results.scss";
import {Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {NetworkHelper} from "modules/network/NetworkHelper";
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
  const { id } = useParams();
  useEffect(() => {
    console.log("get Basketing from API");
    NetworkHelper.get("/Results", {
      params: {
        id,
        resultType: "basketing"
      }
    })
      .then(value => {
        console.log("Basketing data", value);
        if (value.data?.Basketing?.length) {
          setAllResults(value.data.Basketing);
        }
      })
      .catch(reason => {
        console.log("Couldn't load results data");
      });
  }, []);

  return (
    <div className={"page-body-container results-page"}>
      <h3>Basketing</h3>
      {allResults?.length ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};
export { EventBasketing };
