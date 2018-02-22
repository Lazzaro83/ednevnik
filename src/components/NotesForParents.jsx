import React, { Component } from "react";
import { Segment, Divider, Dimmer, Loader, Button } from "semantic-ui-react";
import base from "../base.js";

class NotesForParents extends Component {
  constructor() {
    super();
    this.state = {
      studentNotes: null
    };
    this.renderStudentsNotes = this.renderStudentsNotes.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillMount() {
      if(this.props.location === undefined){
          this.ref = base.syncState(`beleske/${this.props.student}`, {
              context: this,
              state: "studentNotes"
          });
      } else {
        this.ref = base.syncState(`beleske/${this.props.location.state.student}`, {
            context: this,
            state: "studentNotes"
        });
    }
   }

   deleteComment(){
      console.log("Evo mene Franjo");
   }

  renderStudentsNotes() {
    const notes = Object.entries(this.state.studentNotes);
    return (
      <div className="wrapperForParents">
        {notes.map(note => (
          <Segment inverted textAlign="left" key={note[0]}>
              { this.props.student &&  <Button content="X" inverted color="grey" floated="right" size="mini" onClick={this.deleteComment} /> }
            <Divider horizontal inverted>
              <b>{note[0]}</b>
            </Divider>
            <p>{note[1]}</p>
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
