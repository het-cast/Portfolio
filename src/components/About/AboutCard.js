import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Het Pandya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently Pursuing B.E. in  Informating Technology .
            
            <br />
            I am very much passionated about developing new softwares.
            <br />
            My core skill is based on javascript and I love to do most of the things using javascript.
            
          </p>
          

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
