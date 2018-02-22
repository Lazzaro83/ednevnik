import React, { Component } from "react";
import { Label, Table, Icon } from "semantic-ui-react";

import "./StudentWrapper.css";

class StudentAttendance extends Component {
  render() {
    const { attendance } = this.props.location.state;
    const attendancesData = Object.entries(attendance.dolasci);
    return (
      <div className="wrapperForParents">
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Datum časa</Table.HeaderCell>
              <Table.HeaderCell>Došao</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {attendancesData.map(attendance => (
              <Table.Row key={attendance[0]}>
                <Table.Cell>
                  <Label ribbon size="big" inverted color='violet'>
                    {attendance[0]}
                  </Label>
                </Table.Cell>
                <Table.Cell>
                  {attendance[1] === true ? (
                    <Icon name="checkmark" color="green" size="big" />
                  ) : (
                    <Icon name="remove" color="red" size="big"/>
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

export default StudentAttendance;
