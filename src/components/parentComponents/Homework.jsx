import React, { Component } from "react";
import { Segment, Divider } from "semantic-ui-react";
import base from "../../base";

class Homework extends Component {
  constructor(){
    super();
    this.state = {
      homeworks: {}
    }
  }

    componentWillMount() {
        const {teacher, termin} = this.props;
        this.ref = base.syncState(`nastavnici/${teacher}/ucenici/domaci/${termin}`, {
            context: this,
            state: "homeworks"
        });
    }

    deleteHomework = housework => {
        const homeworks = this.state.homeworks;
        homeworks[`${housework[0]}`] = null;
        this.setState({ homeworks });
    };

    editHomework = housework => {
        const homeworks = this.state.homeworks;
        homeworks[`${housework[0]}`] = `${this.refs[housework[0]].innerText}`;
        this.setState({ homeworks });
    };

   render() {
    let homework;
    console.log(this.props , this.state)
       if(this.props.location) {
        homework = this.props.location.state.homework
       } else {
      homework = this.state.homeworks;
       }
    const homeworks = Object.entries(homework);
    return (
      <div className="wrapperForParents">
        {homeworks.map(housework => (
          <Segment inverted textAlign="left" key={housework[0]}>
              {this.props.teacher && (
                  <button
                      className="deleteNoteButton"
                      onClick={() => {
                          this.deleteHomework(housework);
                      }}
                  >
                      X
                  </button>
              )}
            <Divider horizontal inverted>
              <b>{housework[0]}</b>
            </Divider>
              {this.props.teacher ? (
                  <div className="editableNote">
                      <p contentEditable ref={`${housework[0]}`}>
                          {housework[1]}
                      </p>
                      <button
                          onClick={() => {
                              this.editHomework(housework);
                          }}
                      >
                          Promeni zadatak
                      </button>
                  </div>
              ) : (
                  <p>{housework[1]}</p>
              )}
          </Segment>
        ))}
      </div>
    );
  }
}

export default Homework;
