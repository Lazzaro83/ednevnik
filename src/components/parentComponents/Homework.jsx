import React, { Component } from "react";
import { Segment, Divider } from "semantic-ui-react";

class Homework extends Component {
  render() {
    const { homework } = this.props.location.state;
    const homeworks = Object.entries(homework);
    return (
      <div className="wrapperForParents">
        {homeworks.map(housework => (
          <Segment inverted textAlign="left" key={housework[0]}>
            <Divider horizontal inverted>
              <b>{housework[0]}</b>
            </Divider>
            <p>{housework[1]}</p>
          </Segment>
        ))}
      </div>
    );
  }
}

export default Homework;
