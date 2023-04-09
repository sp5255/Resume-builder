import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { WithContext as ReactTags } from "react-tag-input";
import { Container } from "react-bootstrap";

const defaultSkills = ["c", "cpp", "java", "javascript", "react", "php"];

const ResumeBuilder = ({ onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([
    { institute: "", year: "", degree: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", year: "", designation: "" },
  ]);
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState(defaultSkills);

  const handleEducationChange = (index, key, value) => {
    const list = [...education];
    list[index][key] = value;
    setEducation(list);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: "", year: "", degree: "" }]);
  };

  const handleExperienceChange = (index, key, value) => {
    const list = [...experience];
    list[index][key] = value;
    setExperience(list);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", year: "", designation: "" }]);
  };

  const handleSkillsChange = (newSkills) => {
    console.log("new skill", newSkills);
    setSkills((prev) => [...prev, newSkills.text]);
    setSuggestions((prev) => [...prev, newSkills.text]);
  };
  const handleSkillsDelete = (idx) => {
    // console.log("new skill", newSkills);
    setSkills((prev) => prev.filter((el, elIdx) => idx !== elIdx));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    onSave({
      name,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });
    console.log("values ", {
      name,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });
  };

  return (
    <Container className="p-4">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            required
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            required
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            required
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="education">Education</Label>
          {education.map((edu, index) => (
            <div
              key={`edu-${index}`}
              className={education?.length > 1 ? "mt-4" : "mt-1"}
            >
              <Input
                className="my-2"
                required
                type="text"
                name={`institute${index}`}
                id={`institute${index}`}
                value={edu.institute}
                onChange={(e) =>
                  handleEducationChange(index, "institute", e.target.value)
                }
                placeholder="Institute Name"
              />
              <Input
                className="my-2"
                required
                type="text"
                name={`year${index}`}
                id={`year${index}`}
                value={edu.year}
                onChange={(e) =>
                  handleEducationChange(index, "year", e.target.value)
                }
                placeholder="Year"
              />
              <Input
                className="my-2"
                required
                type="text"
                // name={degree${index}}
                // id={degree${index}}
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
                placeholder="Degree"
              />
            </div>
          ))}
          <Button type="button" onClick={handleAddEducation}>
            Add More
          </Button>
        </FormGroup>

        <FormGroup>
          <Label for="experience">Experience</Label>
          {experience.map((exp, index) => (
            <div key={`${exp - index}`}>
              <Input
                className="my-2"
                required
                type="text"
                // name={company${index}}
                // id={company${index}}
                value={exp.company}
                onChange={(e) =>
                  handleExperienceChange(index, "company", e.target.value)
                }
                placeholder="Company Name"
              />
              <Input
                className="my-2"
                required
                type="text"
                // name={year${index}}
                // id={year${index}}
                value={exp.year}
                onChange={(e) =>
                  handleExperienceChange(index, "year", e.target.value)
                }
                placeholder="Year"
              />
              <Input
                className="my-2"
                required
                type="text"
                // name={designation${index}}
                // id={designation${index}}
                value={exp.designation}
                onChange={(e) =>
                  handleExperienceChange(index, "designation", e.target.value)
                }
                placeholder="Designation"
              />
            </div>
          ))}
          <Button type="button" onClick={handleAddExperience}>
            Add More
          </Button>
        </FormGroup>
        <FormGroup>
          <Label for="skills">Skills</Label>
          <ReactTags
            tags={skills.map((skill) => ({ id: skill, text: skill }))}
            allowDragDrop={false}
            handleDelete={handleSkillsDelete}
            handleAddition={handleSkillsChange}
            placeholder="Add Skills"
            // suggestions={suggestions}
            // autocomplete
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default ResumeBuilder;
