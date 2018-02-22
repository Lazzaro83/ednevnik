import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Loader, Segment, Dimmer } from "semantic-ui-react";
import base from "../base.js";
import "./StudentCard.css";

class StudentCard extends Component {
  constructor() {
    super();
    this.state = {
      allStudents: null,
      studentData: null,
      teacher: null,
      homeworks: null
    };
    this.renderLoader = this.renderLoader.bind(this);
    this.findStudentData = this.findStudentData.bind(this);
    this.findStudent = this.findStudent.bind(this);
    this.findHomework = this.findHomework.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState("nastavnici", {
      context: this,
      state: "allStudents"
    });
  }

  renderLoader() {
    this.findStudentData();
    return (
      <Segment className="classesLoader">
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
    );
  }

  findStudentData() {
    const x = this.state.allStudents;
    for (let i in x) {
      this.findStudent(x[i].ucenici.termini, i);
    }
  }

  findStudent(terms, teacher) {
    let term = null;
    for (let i in terms) {
      if (this.props.studentName in terms[i]) {
        term = i;
        const ime = this.props.studentName;
        this.setState({
          studentData: terms[i][ime],
          teacher: teacher
        });
        this.findHomework(teacher, term);
      }
    }
  }

  findHomework(x, y) {
    const homeworks = this.state.allStudents[x].ucenici.domaci[y];
    this.setState({
      homeworks: homeworks
    });
  }

  render() {
    return (
      <div className="main-content">
        {this.state.studentData ? (
          <div className="portfolio">
            <Link
              to={{
                pathname: "/attendance",
                state: { attendance: this.state.studentData }
              }}
              className="portfolio-item one"
            >
              Dolasci
            </Link>
            <Link
              to={{
                pathname: "/marks",
                state: { marks: this.state.studentData }
              }}
              className="portfolio-item large"
            >
              Ocene
            </Link>
            <Link
              to={{
                pathname: "/teacherData",
                state: { teacher: this.state.teacher }
              }}
              className="portfolio-item small"
            >
              Nastavnik
            </Link>
            <Link
              to={{
                pathname: "/homework",
                state: { homework: this.state.homeworks }
              }}
              className="portfolio-item four"
            >
              Domaći
            </Link>
            <Link
              to={{
                pathname: "/notesForParents",
                state: { student: this.props.studentName }
              }}
              className="portfolio-item five"
            >
              Zapažanja
            </Link>
          </div>
        ) : (
          this.renderLoader()
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    studentName: state.teacherLogin
  };
}

export default connect(mapStateToProps)(StudentCard);
