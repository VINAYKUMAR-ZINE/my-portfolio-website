import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinaykumar Zine </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently an undergraduate student.
            <br />
            I am pursuing my degree from IIIT Nagpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Calisthenics
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to create solutions that have a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Vinaykumar </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
