import React from "react";
import "App.scss";
import "./TermsAndConditions.scss";

const TermsAndConditionsPage = () => {
  const terms: string[] = [
    "Rings: 2020 rings are requires and we can receive the last season derby's rings, derby’s rings or any external rings for 2020",

    "When delivering birds with the derby’s rings: ",
    "- Each 5 birds get 1 for free",
    "- Each 10 birds get 3 for free",
    "- Each 15 birds get 4 for free",
    "When delivery birds with external rings: ",
    "- Each 10 birds get 2 for free",
    "- Each 15 birds get 3 free ",
    "- Each 20 birds get 4 for free",

    "Received free birds considered as spare dead or priced birds deducted from it not from paid birds. ",
    "The pigeons submitted with the participation fortification by changing 2 feathers equal 60 days or more . ",
    "The price of subscription 87 euro ,58 euro paid with pigeon submit and the rest f price after fixing birds and before releasing birds . ",
    "In case the birds die after using spare the participation will be restored instead of it next season . ",
    "After receiving birds in one race point it is not allowed to claim it again The participations not allowed to interfere the management decision. ",
    "The birds wear the magnetic benzing rings to facilitate the birds periodical inventory by BINZING LIVE . ",
    "We apologize for not accepting the birds after the birds number is completed . ",

    "Bird’s acceptance starts in 4th of June until 1st of august 2020",

    "Delivery days : ",

    "From 4-6     11-6      18-6    25-6      2-7    9-7      16-7    23-7   30-7",
    "To       6-6    13-6     20-6     27-6      4-7    11-7    18-7   25-7   1-8",

    "It is allowed to receive any number of birds from the participations . ",
    "The point responsible for choosing the atmosphere for the race ,the Benzing system opened when the race start and closed next day from the race when the birds come with the sunset . ",
    "The team contains birds and in case the result are equal the result decided to the highest result of the individual bird . ",
    "The participation's name  will be able to modified after receiving the birds . ",
    "The result of Ace pigeon will calculated by the Benzing system . ",
    "The Ace price for the best birds is provided from the RCM company and it is 3 birds were logged from the first 20 in all stations. ",

    "           Ace:",
    "The Ace prize for three strongest birds with a position from 1 to 20 in the five races in an amount of 29,500 euro. ",

    "1st      15000 euro",
    "2nd     8500   euro",
    "3rd      6000   euro",

    "The point does not have any responsibility for the dead or lost birds until the end of the race and in case of the bird loss or death the contestant is not entitled to claim any of the prepaid fees. ",

    "Official distances: ",
    "300 km the first race el Dabaa the first week of January ",
    "350 km the second race Fouka the second week of January ",
    "450 km the third race marsa matrouh the third week of January ",
    "500 km semifinal zawyet shemas first week of February ",
    "620 km final race salloum twelve days after marsa matruh race "
  ];
  return (
    <div className={"terms-and-conditions-top-container page-body-container"}>
      <h3>Terms & Conditions (2020) :</h3>
      <ul>
        {terms.map((term, termIndex) => (
          <li key={termIndex}>{term}</li>
        ))}
      </ul>
      <div className={"signature"}>
        <p>Managing Director</p>
      </div>
    </div>
  );
};
export { TermsAndConditionsPage };
