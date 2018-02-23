import React, { Component } from "react";
import { Segment, List, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ClassDateCard from "../classDateCard/ClassDateCard.jsx";
import "./StudentForTeacher.css";

const classDates = [
  "02-24-2018",
  "02-25-2018",
  "03-03-2018",
  "03-04-2018",
  "03-10-2018",
  "03-11-2018",
  "03-17-2018",
  "03-18-2018",
  "03-24-2018",
  "03-25-2018",
  "03-31-2018",
  "04-01-2018",
  "04-14-2018",
  "14-15-2018",
  "04-21-2018",
  "04-22-2018",
  "04-28-2018",
  "04-29-2018",
  "05-05-2018",
  "05-06-2018",
  "05-12-2018",
  "05-13-2018",
  "05-19-2018",
  "05-20-2018",
  "05-26-2018",
  "05-27-2018",
  "06-03-2018",
  "06-04-2018"
];

class Student extends Component {
  constructor() {
    super();
    this.state = {
      homework: "",
      modalOpened: false
    };
    this.giveHomework = this.giveHomework.bind(this);
  }

  giveHomework(homework) {
    console.log("Pozvana sam sa ", homework);
    const x = new Date();
    const homeworkDate = `${x.getDate()}-${x.getMonth() +
      1}-${x.getFullYear()}`;
    this.props.addHomework(this.props.termin, homework, homeworkDate);
  }
  render() {
    return (
      <Segment inverted>
        <Link
          to={{
            pathname: "/teacherHomework",
            homework: {
              giveHomework: this.giveHomework,
              termin: this.props.termin,
              teacher: this.props.teacher
            }
          }}
          className="giveHomeworkButton"
        >
          Zadaj domaći
        </Link>
        <List divided inverted relaxed className="listOfStudents">
          {Object.keys(this.props.students).map((student, index) => (
            <List.Item key={index}>
              <List.Content className="listOfStudents__content">
                <List.Header className="listOfStudents_studentName">
                  <Link
                    to={{
                      pathname: "/notes",
                      student: { student }
                    }}
                    className="studentLink"
                  >
                    {student}
                  </Link>
                </List.Header>
                <Card.Group className="listOfStudents__cardGroup">
                  {classDates.map(date => (
                    <ClassDateCard
                      date={date}
                      student={student}
                      key={date}
                      studentAttended={this.props.studentAttended}
                      studentMarks={this.props.studentMarks}
                      termin={this.props.termin}
                    />
                  ))}
                </Card.Group>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    );
  }
}

export default Student;
