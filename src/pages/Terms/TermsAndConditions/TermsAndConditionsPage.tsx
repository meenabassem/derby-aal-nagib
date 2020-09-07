import React, {useEffect, useState} from "react";
import "App.scss";
import "./TermsAndConditions.scss";
import {NetworkHelper} from "modules/network/NetworkHelper";

interface TermsAndConditionsItem {
  item: string;
  subItem?: string[];
}

const TermsAndConditionsPage = () => {
  const [terms_EN, setTermsEn] = useState<TermsAndConditionsItem[]>([]);
  const [terms_AR, setTermsAR] = useState<TermsAndConditionsItem[]>([]);

  //Load terms and conditions
  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Terms_And_Conditions_EN", "Terms_And_Conditions_AR"]
    })
      .then(value => {
        if (value.data?.Terms_And_Conditions_EN?.length) {
          setTermsEn(value.data.Terms_And_Conditions_EN);
        }
        if (value.data?.Terms_And_Conditions_AR?.length) {
          setTermsAR(value.data.Terms_And_Conditions_AR);
        }
      })
      .catch(reason => {
        console.log("Failed to load Terms and conditions", reason);
      });
  }, []);
  return (
    <div className={"terms-and-conditions-top-container page-body-container"}>
      <h3>Terms & Conditions (2020) :</h3>
      <ul className={"terms-en"}>
        {terms_EN?.length &&
          terms_EN.map((term: TermsAndConditionsItem, termIndex) => (
            <div key={termIndex}>
              <li>{term.item}</li>
              {term.subItem?.length ? (
                <ul>
                  {term.subItem.map((subItem: string, subItemIndex) => (
                    <li key={subItemIndex}>{subItem}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          ))}
      </ul>
      <ul className={"terms-ar"}>
        {terms_AR?.length &&
          terms_AR.map((term: TermsAndConditionsItem, termIndex) => (
            <div key={termIndex}>
              <li>{term.item}</li>
              {term.subItem?.length ? (
                <ul>
                  {term.subItem.map((subItem: string, subItemIndex) => (
                    <li key={subItemIndex}>{subItem}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          ))}
      </ul>
      <div className={"signature"}>
        <p>Managing Director</p>
      </div>
    </div>
  );
};
export { TermsAndConditionsPage };
