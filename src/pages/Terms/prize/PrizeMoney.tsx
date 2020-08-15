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
  const _racesEn: Race[] = [
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
  const _racesAr: Race[] = [
    {
      raceTitle: "الجوائز الماليه للسباق الاول الضبعه 300 كم ",
      raceEntries: [
        { prize: "20000", currency: "جم", place: "الاول" },
        { prize: "15000", currency: "جم", place: "الثانى" },
        { prize: "10000", currency: "جم", place: "الثالث" },
        { prize: "7500", currency: "جم", place: "الرابع" },
        { prize: "5000", currency: "جم", place: "الخامس" },
        { prize: "2500", currency: "جم", place: "من السادس للعاشر" },
        { prize: "1000", currency: "جم", place: "من الحادى عشر للاربعين" }
      ]
    },
    {
      raceTitle: "الجوائز الماليه للسباق الثاني فوكه 300 كم",
      raceEntries: [
        { prize: "30000", currency: "جم", place: "الاول" },
        { prize: "20000", currency: "جم", place: "الثانى" },
        { prize: "15000", currency: "جم", place: "الثالث" },
        { prize: "1000", currency: "جم", place: "الرابع" },
        { prize: "7500", currency: "جم", place: "الخامس" },
        { prize: "4500", currency: "جم", place: "من السادس للعاشر" },
        { prize: "1500", currency: "جم", place: "من الحادى عشر للعشرين" },
        {
          prize: "1000",
          currency: "جم",
          place: "من الحادى و العشرين الى الخمسين"
        }
      ]
    },
    {
      raceTitle: "الجوائز الماليه للسباق الثالث مرسي مطروح 420 كم",
      raceEntries: [
        { prize: "40000", currency: "جم", place: "الاول" },
        { prize: "30000", currency: "جم", place: "الثانى" },
        { prize: "25000", currency: "جم", place: "الثالث" },
        { prize: "15000", currency: "جم", place: "الرابع" },
        { prize: "10000", currency: "جم", place: "الخامس" },
        { prize: "5000", currency: "جم", place: "من السادس للعاشر" },
        { prize: "2500", currency: "جم", place: "من الحادى عشر للعشرين" },
        {
          prize: "1000",
          currency: "جم",
          place: "من الحادى و العشرين الى الخمسين"
        }
      ]
    },
    {
      raceTitle: "الجوائز الماليه للسباق الرابع النصف نهائي زاوية شماس 500 كم",
      raceEntries: [
        { prize: "50000", currency: "جم", place: "الاول" },
        { prize: "40000", currency: "جم", place: "الثانى" },
        { prize: "30000", currency: "جم", place: "الثالث" },
        { prize: "20000", currency: "جم", place: "الرابع" },
        { prize: "15000", currency: "جم", place: "الخامس" },
        { prize: "6000", currency: "جم", place: "من السادس للعاشر" },
        { prize: "3500", currency: "جم", place: "من الحادى عشر للعشرين" },
        {
          prize: "1000",
          currency: "جم",
          place: "من الحادى و العشرين الى الخمسين"
        }
      ]
    },
    {
      raceTitle: " سباق السلوم السباق النهائي 620 كم",
      raceEntries: [
        { prize: "100000", currency: "جم", place: "الاول" },
        { prize: "75000", currency: "جم", place: "الثانى" },
        { prize: "50000", currency: "جم", place: "الثالث" },
        { prize: "35000", currency: "جم", place: "الرابع" },
        { prize: "25000", currency: "جم", place: "الخامس" },
        { prize: "10000", currency: "جم", place: "من السادس للعاشر" },
        { prize: "5000", currency: "جم", place: "من الحادى عشر للعشرين" },
        {
          prize: "1500",
          currency: "جم",
          place: "من الواحد و العشرين الى الخمسين"
        }
      ]
    },
    {
      raceTitle: "جوائز الاس بيجون",
      raceEntries: [
        { prize: "50000", currency: "جم", place: "الاول" },
        { prize: "40000", currency: "جم", place: "الثانى" },
        { prize: "30000", currency: "جم", place: "الثالث" },
        { prize: "20000", currency: "جم", place: "الرابع" },
        { prize: "15000", currency: "جم", place: "الخامس" },
        { prize: "6000", currency: "جم", place: "من السادس للعاشر" },
        { prize: "1500", currency: "جم", place: "من الحادى عشر للعشرين" },
        {
          prize: "1000",
          currency: "جم",
          place: "من الواحد و العشرين الى الاربعين"
        }
      ]
    },
    {
      raceTitle: "جوائز الفرق",
      raceEntries: [
        { prize: "30000", currency: "جم", place: "الاول" },
        { prize: "20000", currency: "جم", place: "الثانى" },
        { prize: "15000", currency: "جم", place: "الثالث" },
        { prize: "10000", currency: "جم", place: "الرابع" },
        { prize: "5000", currency: "جم", place: "الخامس" },
        { prize: "3000", currency: "جم", place: "من السادس للعاشر" },
        { prize: "2500", currency: "جم", place: "من الحادى عشر للعشرين" }
      ]
    }
  ];

  const [racesEn, setRacesEn] = useState<Race[]>([]);
  const [racesAr, setRacesAr] = useState<Race[]>([]);

  useEffect(() => {
    setTimeout(() => {
      // to simulate API
      setRacesEn(_racesEn);
      setRacesAr(_racesAr);
    }, 100);
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
        <span>No Races found!</span>
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
        <span>No Races found!</span>
      )}
    </div>
  );
};
export { PrizeMoneyPage };
