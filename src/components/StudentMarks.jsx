import React, { Component } from "react";
import { Label, Table, Icon } from "semantic-ui-react";

import "./StudentWrapper.css";

class StudentMarks extends Component {
  render() {
    const { marks } = this.props.location.state;
    const marksData = Object.entries(marks.ocene);
    return (
      <div className="wrapperForParents">
        <Table celled inverted selectable size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Datum časa</Table.HeaderCell>
              <Table.HeaderCell>Ocena</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {marksData.map(mark => (
              <Table.Row key={mark[0]}>
                <Table.Cell>{mark[0]}</Table.Cell>
                <Table.Cell>
                  {mark[1] ? (
                    <Label
                      ribbon
                      size="huge"
                      color="purple"
                      className="markTag"
                    >
                      {mark[1]}
                    </Label>
                  ) : (
                    <Icon name="remove" color="red" />
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default StudentMarks;
