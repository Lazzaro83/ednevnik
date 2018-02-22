import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TeachersLogin from "./components/teacherComponents/teachersLogIn/TeachersLogin";
import ParentsLogin from "./components/parentComponents/parentsLogIn/ParentsLogin";
import StudentCard from "./components/parentComponents/studentCard/StudentCard";
import TeachersCard from "./components/teacherComponents/teachersCard/TeachersCard";
import StudentMarks from "./components/parentComponents/StudentMarks";
import TeacherData from "./components/parentComponents/TeacherData";
import StudentAttendance from "./components/parentComponents/studentAttendance/StudentAttendance";
import Homework from "./components/parentComponents/Homework";
import GeneralNotes from "./components/teacherComponents/generalNotes/GeneralNotes";
import NotesForParents from "./components/parentComponents/NotesForParents";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/notesForParents" component={NotesForParents} />
          <Route path="/marks" component={StudentMarks} />
          <Route path="/teacherData" component={TeacherData} />
          <Route path="/attendance" component={StudentAttendance} />
          <Route path="/homework" component={Homework} />
          <Route path="/notes" component={GeneralNotes} />
          <Route path="/teacher" component={TeachersCard} />
          <Route path="/student" component={StudentCard} />
          <Route path="/parents-login" component={ParentsLogin} />
          <Route path="/teachers-login" component={TeachersLogin} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
