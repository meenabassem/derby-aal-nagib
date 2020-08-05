import React, {useEffect, useState} from "react";
import "App.scss";
import "./PrizeMoney.scss";
import {Col, Table} from "react-bootstrap";

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
  const _races: Race[] = [
    {
      raceTitle: "First race prizes El Dabaa 300 km",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "1450" },
        { currency: "Euro", place: "2nd", prize: "870" },
        { currency: "Euro", place: "3rd", prize: "550" },
        { currency: "Euro", place: "4th", prize: "450" },
        { currency: "Euro", place: "5th", prize: "290" },
        { currency: "Euro", place: "6th to 10th", prize: "145" },
        { currency: "Euro", place: "11th to 40th", prize: "60" }
      ]
    },
    {
      raceTitle: "Second race prizes Fouka 350 km",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "1750 euro" },
        { currency: "Euro", place: "2nd", prize: "1450 euro" },
        { currency: "Euro", place: "3rd", prize: "870   euro" },
        { currency: "Euro", place: "4th", prize: "550 euro" },
        { currency: "Euro", place: "5th", prize: "450 euro" },
        { currency: "Euro", place: "6th to 10th", prize: "260 euro" },
        { currency: "Euro", place: "11th to 20th", prize: "100 euro" },
        { currency: "Euro", place: "21th to 50th", prize: "60 euro" }
      ]
    },
    {
      raceTitle: "Third race prizes Marsa Matrouh 420 km: ",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "2300" },
        { currency: "Euro", place: "2nd", prize: "1750" },
        {
          currency: "Euro",
          place: "3rd",
          prize: "1450"
        },
        { currency: "Euro", place: "4th", prize: "870" },
        {
          currency: "Euro",
          place: "5th",
          prize: "550"
        },
        { currency: "Euro", place: "6th to 10th", prize: "290" },
        {
          currency: "Euro",
          place: "11th to 20th",
          prize: "200"
        },
        {
          currency: "Euro",
          place: "21th to 50th",
          prize: "60euro"
        }
      ]
    },
    {
      raceTitle: "Semifinal race Zawyet Zhemas 500 km",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "2800" },
        { currency: "Euro", place: "2nd", prize: "2300" },
        { currency: "Euro", place: "3rd", prize: "1750" },
        { currency: "Euro", place: "4th", prize: "1450" },
        { currency: "Euro", place: "5th", prize: "870" },
        { currency: "Euro", place: "6th to 10th", prize: "350" },
        { currency: "Euro", place: "11th to 20th", prize: "200" },
        { currency: "Euro", place: "21st to 50th", prize: "60" }
      ]
    },
    {
      raceTitle: "Final race prizes Salloum 620 km",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "2800" },
        { currency: "Euro", place: "2nd", prize: "2300" },
        { currency: "Euro", place: "3rd", prize: "1750" },
        { currency: "Euro", place: "4th", prize: "1450" },
        { currency: "Euro", place: "5th", prize: "870" },
        { currency: "Euro", place: "6th to 10th", prize: "580" },
        { currency: "Euro", place: "11th to 20th", prize: "290 " },
        { currency: "Euro", place: "21st to 50th", prize: "100 " }
      ]
    },
    {
      raceTitle: "Ace pigeon",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "2800" },
        { currency: "Euro", place: "2nd", prize: "2300" },
        { currency: "Euro", place: "3rd", prize: "1750" },
        { currency: "Euro", place: "4th", prize: "1450 " },
        { currency: "Euro", place: "5th", prize: "870" },
        { currency: "Euro", place: "6th to 10th", prize: "350" },
        { currency: "Euro", place: "11th to 20th", prize: "200" },
        { currency: "Euro", place: "21st to 50th", prize: "60" }
      ]
    },
    {
      raceTitle: "Teams",
      raceEntries: [
        { currency: "Euro", place: "1st", prize: "1750" },
        { currency: "Euro", place: "2nd", prize: "1159" },
        { currency: "Euro", place: "3rd", prize: "875" },
        { currency: "Euro", place: "4th", prize: "580" },
        { currency: "Euro", place: "5th", prize: "290" },
        { currency: "Euro", place: "6th to 10th", prize: "175" },
        { currency: "Euro", place: "11th to 20th", prize: "150" }
      ]
    }
  ];
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    setTimeout(() => {
      // to simulate API
      setRaces(_races);
    }, 100);
  }, []);
  return (
    <div className={"prize-money-top-container page-body-container"}>
      <h3>Prize Money</h3>
      {races?.length ? (
        <div>
          {races.map((raceEntry: Race, raceIndex) => (
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
                            <td>{raceEntry.prize} Euro</td>
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
        <span>No Races found!</span>
      )}
    </div>
  );
};
export { PrizeMoneyPage };
