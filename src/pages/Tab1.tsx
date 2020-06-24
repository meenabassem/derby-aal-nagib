import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.scss";
import { NavBar } from "../components/Navbar/Navbar";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className={"test-class"}>some test</div>
          <IonTitle>Tab 11</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 (Testing Push CI/CD)</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>test content in tab12</div>
        <NavBar />

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
