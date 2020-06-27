import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.scss";
import {AppNavBar} from "components/Navbar/AppNavBar";
import {Nav} from "react-bootstrap";

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
        <AppNavBar />

        <ExploreContainer name="Tab 1 page" />

        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
