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
  }

  componentWillMount() {
    if(this.props.location.state.student) {
        // this.ref = base.syncState(`beleske/${this.props.location.state.student}`, {
        //     context: this,
        //     state: "studentNotes"
        // });
        this.ref = base.syncState(`beleske/${this.props.location.state.student}`, {
            context: this,
            state: "studentNotes",
        });

    }
    // if(!this.props.location.state.student && this.props.student){
    //     this.ref = base.syncState(`beleske/${this.props.student}`, {
    //         context: this,
    //         state: "studentNotes"
    //     });
    // }

  }

  renderStudentsNotes() {
    const notes = Object.entries(this.state.studentNotes);
    return (
      <div className="wrapperForParents">
        {notes.map(note => (
          <Segment inverted textAlign="left" key={note[0]}>
              <Button content="X" inverted color="grey" floated="right" size="mini"/>
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
      console.log('roditeljska strana', this.props);
      console.log('roditeljsa strana state', this.state);
    if (!this.state.studentNotes) {
      return (
        <Segment className="classesLoader">
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
      { this.renderStudentsNotes() }
  }
}

export default NotesForParents;
