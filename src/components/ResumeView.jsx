import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ResumeView.css";

const ResumeView = ({
  name,
  email,
  address,
  phone,
  education,
  experience,
  skills,
}) => {
  return (
    <Container className="resume-view-container">
      <Row>
        <Col>
          <div className="resume-header">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{address}</p>
            <p>{phone}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="resume-section">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={`edu-${index}`} className="resume-item">
                <h5>{edu.institute}</h5>
                <p>{edu.year}</p>
                <p>{edu.degree}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="resume-section">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={`exp-${index}`} className="resume-item">
                <h5>{exp.company}</h5>
                <p>{exp.year}</p>
                <p>{exp.designation}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="resume-section">
            <h3>Skills</h3>
            <ul className="skill-list">
              {skills.map((skill, index) => (
                <li key={`skill-${index}`}>{skill}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeView;
