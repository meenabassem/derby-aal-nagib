import React from "react";
import {Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";

const AppFooter = () => {
  return (
    <Navbar sticky="bottom" style={{ boxShadow: "0 0px 5px #888888" }}>
      <Row style={{ textAlign: "center", display: "block", flex: 1 }}>
        <div>
          <a
            style={{ margin: 10 }}
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.facebook.com/DERBY-AAL-NAGIB-101202794592601"
          >
            <FontAwesomeIcon icon={faFacebook} color={"blue"} size={"2x"} />
          </a>
          <span>{"  "}</span>
          <a
            style={{ margin: 10 }}
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCBorRhG2touJMA2yw3sGNtw"
          >
            <FontAwesomeIcon icon={faYoutube} color={"red"} size={"2x"} />
          </a>
          <br />
          <div className={"text-nowrap"} style={{ padding: 5 }}>
            Website created by
            <a
              style={{ margin: 10 }}
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/meenabassem/"
            >
              Alpha M.s
            </a>
            © 2020
          </div>
        </div>
      </Row>
    </Navbar>
  );
};
export { AppFooter };
