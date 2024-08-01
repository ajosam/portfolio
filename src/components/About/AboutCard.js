import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajo Sam </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently employed as a software developer in Dubai.
            <br />
            Post Graduated in Computer Applications from MACFAST College
            Thiruvalla.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work hard in silence, let your success be your noise"{" "}
          </p>
          <footer className="blockquote-footer">Ajo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
