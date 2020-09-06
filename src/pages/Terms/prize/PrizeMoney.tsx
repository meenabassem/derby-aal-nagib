import React, {useEffect, useState} from "react";
import "App.scss";
import "./PrizeMoney.scss";
import {Col, Table} from "react-bootstrap";
import {NetworkHelper} from "modules/network/NetworkHelper";

interface RaceEntry {
  place: string;
  prize: string;
  currency: string;
}
interface Race {
  raceTitle: string;
  raceEntries: RaceEntry[];
}
const PrizeMoneyPage = () => {
  const [racesEn, setRacesEn] = useState<Race[]>([]);
  const [racesAr, setRacesAr] = useState<Race[]>([]);

  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Prize_Money_EN", "Prize_Money_AR"]
    })
      .then(value => {
        if (value.data?.Prize_Money_EN?.length) {
          setRacesEn(value.data.Prize_Money_EN);
        }
        if (value.data?.Prize_Money_AR?.length) {
          setRacesAr(value.data.Prize_Money_AR);
        }
      })
      .catch(reason => {
        console.log("Failed to load Terms and conditions", reason);
      });
  }, []);

  return (
    <div className={"prize-money-top-container page-body-container"}>
      <h3>Prize Money</h3>
      {racesEn?.length ? (
        <div className={"races-prizes-en"}>
          {racesEn.map((raceEntry: Race, raceIndex) => (
            <div key={raceIndex}>
              <h4>{raceEntry.raceTitle}</h4>
              {raceEntry.raceEntries?.length ? (
                <Col lg={4}>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Place</th>
                        <th>Prize Money</th>
                      </tr>
                    </thead>
                    <tbody>
                      {raceEntry.raceEntries.map(
                        (raceEntry: RaceEntry, raceEntryIndex: number) => (
                          <tr key={raceEntryIndex}>
                            <td>{raceEntry.place}</td>
                            <td>
                              {raceEntry.prize} {raceEntry.currency}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </Col>
              ) : (
                <span>No winners in that race!</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      {racesAr?.length ? (
        <div className={"races-prizes-ar"}>
          {racesAr.map((raceEntry: Race, raceIndex) => (
            <div key={raceIndex}>
              <h4>{raceEntry.raceTitle}</h4>
              {raceEntry.raceEntries?.length ? (
                <Col lg={4}>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Place</th>
                        <th>Prize Money</th>
                      </tr>
                    </thead>
                    <tbody>
                      {raceEntry.raceEntries.map(
                        (raceEntry: RaceEntry, raceEntryIndex: number) => (
                          <tr key={raceEntryIndex}>
                            <td>{raceEntry.place}</td>
                            <td>
                              {raceEntry.prize} {raceEntry.currency}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </Col>
              ) : (
                <span>No winners in that race!</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export { PrizeMoneyPage };
