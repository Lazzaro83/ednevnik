import React, { Component } from "react";
import {
  Segment,
  List,
  Card,
  Button,
  Icon,
  Modal,
  Form
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ClassDateCard from "./ClassDateCard.jsx";
import "./StudentForTeacher.css";

const classDates = [
  "24-02-2018",
  "25-02-2018",
  "03-03-2018",
  "04-03-2018",
  "10-03-2018",
  "11-03-2018",
  "17-03-2018",
  "18-03-2018",
  "24-03-2018",
  "25-03-2018",
  "31-03-2018",
  "01-04-2018",
  "14-04-2018",
  "15-04-2018",
  "21-04-2018",
  "22-04-2018",
  "28-04-2018",
  "29-04-2018",
  "05-05-2018",
  "06-05-2018",
  "12-05-2018",
  "13-05-2018",
  "19-05-2018",
  "20-05-2018",
  "26-05-2018",
  "27-05-2018",
  "03-06-2018",
  "04-06-2018"
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

  handleOpen = () => {
    this.setState({
      modalOpened: true
    });
  };
  giveHomework() {
    const homework = {
      homework: this.homework.value
    };
    const x = new Date();
    const homeworkDate = `${x.getDate()}-${x.getMonth() +
      1}-${x.getFullYear()}`;
    this.props.addHomework(this.props.termin, homework.homework, homeworkDate);
    this.setState({
      modalOpened: false
    });
  }
  render() {
    console.log('this props od student for teacher', this.props);
    return (
      <Segment inverted>
        <Modal
          trigger={
            <Button inverted fluid color="yellow" onClick={this.handleOpen}>
              Zadaj domaći
            </Button>
          }
          open={this.state.modalOpened}
        >
          <Modal.Header>Tekst zadatka</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <textarea
                  placeholder="Tekst zadatka"
                  ref={textarea => {
                    this.homework = textarea;
                  }}
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions inverted>
            <Button inverted color="purple" onClick={this.giveHomework}>
              Zadaj ovoj grupi <Icon name="write square" />
            </Button>
          </Modal.Actions>
        </Modal>
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
