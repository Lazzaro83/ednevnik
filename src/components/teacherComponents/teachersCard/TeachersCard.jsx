import React, { Component } from "react";
import { connect } from "react-redux";
import base from "../../../base.js";
import { Dimmer, Loader, Segment, Tab } from "semantic-ui-react";
import Student from "../studentForTeachers/StudentForTeacher.jsx";
import "./TeachersCard.css";

class TeachersCard extends Component {
  constructor() {
    super();
    this.state = {
      studentName: null
    };
    this.showClasses = this.showClasses.bind(this);
    this.studentAttended = this.studentAttended.bind(this);
    this.studentMarks = this.studentMarks.bind(this);
    this.addHomework = this.addHomework.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(`nastavnici/Lazar Nikolic`, {
      // this.ref = base.syncState(`nastavnici/${this.props.userName}`, {
      context: this,
      state: "studentName"
    });
  }

  studentMarks(studentsName, termin, markDay, mark) {
    if (this.state.studentName.ucenici.termini.hasOwnProperty(termin)) {
      if (
        this.state.studentName.ucenici.termini[termin].hasOwnProperty(
          studentsName
        )
      ) {
        const changeTerm = { ...this.state.studentName };
        changeTerm.ucenici.termini[termin][studentsName].ocene[markDay] = mark;
        this.setState({
          studentName: changeTerm
        });
      }
    }
  }

  studentAttended(studentsName, attendanceDay, termin, attended) {
    if (this.state.studentName.ucenici.termini.hasOwnProperty(termin)) {
      if (
        this.state.studentName.ucenici.termini[termin].hasOwnProperty(
          studentsName
        )
      ) {
        const changeTerm = { ...this.state.studentName };
        changeTerm.ucenici.termini[termin][studentsName].dolasci[
          attendanceDay
        ] = attended;
        this.setState({
          studentName: changeTerm
        });
      }
    }
  }
  addHomework(termin, homeworkText, homeworkDate) {
    if (this.state.studentName.ucenici.domaci.hasOwnProperty(termin)) {
      const addHomework = { ...this.state.studentName };
      addHomework.ucenici.domaci[termin][homeworkDate] = homeworkText;
      this.setState({
        studentName: addHomework
      });
    }
  }

  showClasses() {
    const termini = this.state.studentName.ucenici.termini;
    const studentNames = Object.keys(termini).map(termin => termini[termin]);
    const panes = [];
    Object.keys(termini).map((termin, index) =>
      panes.push({
        menuItem: `${termin}`,
        render: () => (
          <Tab.Pane key={termin}>
            <Student
              students={studentNames[index]}
              teacher={this.props.userName}
              termin={termin}
              studentAttended={this.studentAttended}
              studentMarks={this.studentMarks}
              addHomework={this.addHomework}
            />
          </Tab.Pane>
        )
      })
    );
    return <Tab panes={panes} />;
  }

  render() {
    return (
      <div className="teachersCardMain">
        <div className="teachersCardPortfolio">
          <h1>{this.props.userName}</h1>
          <div className="terminiPanel">
            {this.state.studentName !== null ? (
              this.showClasses()
            ) : (
              <Segment className="classesLoader">
                <Dimmer active>
                  <Loader />
                </Dimmer>
              </Segment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userName: state.teacherLogin
  };
}
export default connect(mapStateToProps)(TeachersCard);
