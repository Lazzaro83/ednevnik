import React, { Component } from "react";
import { Modal, Button, Form, Icon } from "semantic-ui-react";
import NotesForParents from "../../parentComponents/NotesForParents.jsx";
import base from "../../../base.js";
import "./GeneralNotes.css";

class GeneralNotes extends Component {
  constructor() {
    super();
    this.state = {
      noteOnStudent: "",
      notes: null,
      modalOpened: false,
      student: ""
    };
    this.giveNote = this.giveNote.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(`beleske`, {
      context: this,
      state: "notes"
    });
    this.setState({
      student: this.props.location.student.student
    });
  }

  handleOpen = () => {
    this.setState({
      modalOpened: true
    });
  };

  giveNote() {
    const note = {
      note: this.note.value
    };
    const x = new Date();
    const noteDate = `${x.getDate()}-${x.getMonth() + 1}-${x.getFullYear()}`;
    this.addNote(this.props.location.student.student, note.note, noteDate);
    this.setState({
      modalOpened: false
    });
  }

  addNote(studentName, note, noteDate) {
    if (this.state.notes.hasOwnProperty(studentName)) {
      const addToNotes = { ...this.state.notes };
      addToNotes[studentName][noteDate] = note;
      this.setState({
        notes: addToNotes
      });
    }
  }

  render() {
    return (
      <div className="teachersCardMain">
        <Modal
          trigger={
            <Button
              inverted
              fluid
              color="yellow"
              onClick={this.handleOpen}
              className="yellowButton"
            >
              Napiši belešku o đaku
            </Button>
          }
          open={this.state.modalOpened}
        >
          <Modal.Header>Tekst beleške</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <textarea
                  placeholder="Tekst beleške"
                  ref={textarea => {
                    this.note = textarea;
                  }}
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions inverted>
            <Button inverted color="purple" onClick={this.giveNote}>
              Objavi ovu belešku <Icon name="write square" />
            </Button>
          </Modal.Actions>
        </Modal>
        <div className="studentNotesForTeacher">
          <NotesForParents student={this.state.student} />
        </div>
      </div>
    );
  }
}

export default GeneralNotes;
