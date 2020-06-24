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
import { Nav } from "react-bootstrap";

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
        <iframe
          title={"_"}
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FSports-League%2FDERBY-AAL-NAGIB-101202794592601%2F&tabs=timeline%2Cevents%2Cmessages&width=340&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=275763453238450"
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          // allowTransparency="true"
          allow="encrypted-media"
        />
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
