import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TeachersLogin from "./components/TeachersLogin";
import ParentsLogin from "./components/ParentsLogin";
import StudentCard from "./components/StudentCard";
import TeachersCard from "./components/TeachersCard";
import StudentMarks from "./components/StudentMarks";
import TeacherData from "./components/TeacherData";
import StudentAttendance from "./components/StudentAttendance";
import Homework from "./components/Homework";
import GeneralNotes from "./components/GeneralNotes";
import NotesForParents from "./components/NotesForParents";
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
