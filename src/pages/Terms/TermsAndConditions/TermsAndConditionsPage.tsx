import React from "react";
import "App.scss";
import "./TermsAndConditions.scss";

const TermsAndConditionsPage = () => {
  const terms: string[] = [
    "Participants may enter one or more teams consisting of 1 eligible pigeon and up to 4 reserve pigeons per team (see entry & payment form). An entrant may opt to send fewer or no reserve pigeons in a team. Right of entry is reserved.",
    "An eligible pigeon is designated as such when the individual bird entry fee of USD 950 (net after bank charges) has been paid and confirmed as being received. All payments must be made to Victoria Falls World Challenge Pigeon Race Ltd (see entry & payment form). An early bird discounted fee of USD 4 250 is offered if an entrant pays for a full team of 5 pigeons. The discounted fee is not for a part team and must be paid before or by 31st December 2019. In which case all 5 pigeons will be activated upon entry and there will be no reserve pigeons for that team.",
    "If an entrant pays for all their remaining birds, provided it is 10 or more pigeons, by 31 December 2019 then the activation fee will be at USD 850 per bird.",
    "Should an entrant lose a paid for pigeon and there is no reserve available to replace it prior to entering in the final race and provided that neither it nor one of its subsequent replacements have won any prize money, the entrant will receive a credit in their account of the amount paid for that pigeon to be used towards entries in the following year. The credit under this rule will expire after one race season and is not carried forward thereafter. Any credits for lost pigeons from a previous year will be applied to pigeons in the current year in order of activation, in other words the credits will be used up first. Credits may be used to activate “For Sale” pigeons or reserve pigeons which remain available after Hotspot 5 instead of receiving the credit for use in the following year. The exception to this clause is that any paid for pigeon which is entered into the Super Ace competition cancels out any credits for that activation (see Super Ace terms).",
    "An entry of at least 1 pigeon per team entered must be paid for prior to the receipt of pigeons by the VFWCPR Ltd designated agents (see designated agents) and proof of payment submitted to the agent and copied to VFWCPR via email (all payments must be net after bank charges). Fancier accounts will be credited with the amount received by VFWCPR. If payment has not been received before or on 31st December 2019 the pigeons may be sold to third parties or removed from the competition.",
    "Payment for quarantine and shipping must be made by the entrant on admission to the quarantine facility which will be co-ordinated by the designated agent. All pigeons must be vaccinated against Paramyxovirus at 21 to 24 days old, preferably with a herpes PMV combo vaccine. It would also be desirable to vaccinate against paratyphoid.",
    "There will be several scheduled intakes of pigeons for quarantine prior to shipping which must be organised through designated agents. Intakes by agents will be from July to October 2019 Please contact them for specific dates. VFWCPR reserves the right to cancel later shipments if it is felt that the loft capacity will be exceeded.",
    "During the period of quarantine and prior to any pigeons being shipped to Zimbabwe an entrant will have the opportunity to send replacement birds should any die or need replacing. Advice of the need to replace must come from your designated VFWCPR agent and onus of liaison about replacements rests with the entrant. No replacements can be shipped from abroad after the last scheduled intake organised by the respective agents. Replacements can be taken from “For Sale” pigeons for a donation of USD 50 which will go to the Wildlife Trust. If taken no guarantee is given on the birds’ performance and survival."
  ];
  return (
    <div className={"terms-and-conditions-top-container page-body-container"}>
      <h3>Terms and conditions VFWCPR – 2019 entrants for 2020 race series</h3>
      <ol>
        {terms.map((term, termIndex) => (
          <li key={termIndex}>{term}</li>
        ))}
      </ol>
      <div className={"signature"}>
        <p>Managing Director,</p>
        <p>Victoria Falls World Challenge Pigeon Race Ltd,</p>
        <p>Montagu Pavilion,</p>
        <p>8-10 Queensway,</p>
        <p>GX 111 AA,</p>
        <p>Gibraltar.</p>
      </div>
    </div>
  );
};
export { TermsAndConditionsPage };
