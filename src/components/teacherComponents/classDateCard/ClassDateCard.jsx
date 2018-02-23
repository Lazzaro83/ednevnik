import React, { Component } from 'react';
import { Card, Rating, Radio } from 'semantic-ui-react';
import './ClassDateCard.css';

class ClassDateCard extends Component {
  constructor(){
    super();
    this.state = {
      checked: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRate = this.handleRate.bind(this);
  }

  handleChange(){
    this.setState({
      checked: true
    })
    this.props.studentAttended(this.props.student, this.props.date, this.props.termin, true)
  }

  handleRate(e, {rating}){
    this.props.studentMarks(this.props.student, this.props.termin, this.props.date, rating)
  }

  render(){
    return(
      <Card.Content className={this.state.checked === true ? 'listOfStudents__individualCard disabled' : 'listOfStudents__individualCard'}>
        <Card.Header className='listOfStudents__date'>
          {this.props.date}
        </Card.Header>
          <Card.Description>
            { !this.state.checked &&
              <Radio
                  toggle
                  label='došao'
                name='radioGroup'
                checked={false}
                onChange={this.handleChange}
                className='radioBoxEnabled'
              /> }
        </Card.Description>
        <Card.Content extra className='ratings'>
          <Rating
            icon='star'
            defaultRating={0}
            maxRating={5}
            onRate={this.handleRate}
          />
        </Card.Content>
      </Card.Content>
    )
  }
}
export default ClassDateCard;
