import React, { Component } from "react";
import { Segment, Divider, Dimmer, Loader } from "semantic-ui-react";
import base from "../../base.js";
import "./NotesForParents.css";

class NotesForParents extends Component {
  constructor() {
    super();
    this.state = {
      studentNotes: null,
      proba: ""
    };
    this.renderStudentsNotes = this.renderStudentsNotes.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillMount() {
    if (this.props.location === undefined) {
      this.ref = base.syncState(`beleske/${this.props.student}`, {
        context: this,
        state: "studentNotes"
      });
    } else {
      this.ref = base.syncState(
        `beleske/${this.props.location.state.student}`,
        {
          context: this,
          state: "studentNotes"
        }
      );
    }
  }

  deleteComment = note => {
    const studentNotes = this.state.studentNotes;
    studentNotes[`${note[0]}`] = null;
    this.setState({ studentNotes });
  };

  editComment = note => {
    const studentNotes = this.state.studentNotes;
    studentNotes[`${note[0]}`] = `${this.refs[note[0]].innerText}`;
    this.setState({ studentNotes });
    console.log(note, `${this.refs[note[0]].innerText}`);
  };

  renderStudentsNotes() {
    const notes = Object.entries(this.state.studentNotes);
    return (
      <div className="wrapperForParents">
        {notes.map(note => (
          <Segment inverted textAlign="left" key={note[0]}>
            {this.props.student && (
              <button
                className="deleteNoteButton"
                onClick={() => {
                  this.deleteComment(note);
                }}
              >
                X
              </button>
            )}
            <Divider horizontal inverted>
              <b>{note[0]}</b>
            </Divider>
            {this.props.location === undefined ? (
              <div className="editableNote">
                <p contentEditable ref={`${note[0]}`}>
                  {note[1]}
                </p>
                <button
                  onClick={() => {
                    this.editComment(note);
                  }}
                >
                  Promeni belešku
                </button>
              </div>
            ) : (
              <p>{note[1]}</p>
            )}
          </Segment>
        ))}
      </div>
    );
  }

  render() {
    if (!this.state.studentNotes) {
      return (
        <Segment className="classesLoader">
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
    return this.renderStudentsNotes();
  }
}

export default NotesForParents;
