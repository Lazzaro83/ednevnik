import React, { Component } from "react";
import {
    Segment,
    Button,
    Icon,
    Modal,
    Form
} from "semantic-ui-react";
import Homework from '../../parentComponents/Homework';


class TeacherHomework extends Component {
    constructor() {
        super();
        this.state = {
            // homeworks: "",
            modalOpened: false
        };
    }

    handleOpen = () => {
        this.setState({
            modalOpened: true
        });
    };

    handleClose = () => {
        this.setState({
            modalOpened: false
        });
    };

    render() {
        return (
            <div className="teachersCardMain">
            <Segment inverted>
                <Modal
                    trigger={
                        <Button inverted fluid color="yellow" onClick={this.handleOpen}>
                            Zadaj domaći
                        </Button>
                    }
                    open={this.state.modalOpened}
                >
                    <Modal.Header>
                        Tekst zadatka
                        <Button
                            content="X"
                            color="grey"
                            floated="right"
                            size="mini"
                            onClick={ this.handleClose }
                        />
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
               <textarea
                   placeholder="Tekst zadatka"
                   ref={textarea => {
                       this.homeworkText = textarea;
                   }}
               />
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions inverted>
                        <Button inverted color="purple" onClick={() => {this.props.location.homework.giveHomework(this.homeworkText.value)}}>
                            Zadaj ovoj grupi <Icon name="write square" />
                        </Button>
                    </Modal.Actions>
                </Modal>
               </Segment>
                <div className="studentNotesForTeacher">
                    <Homework termin={this.props.location.homework.termin} teacher={this.props.location.homework.teacher}/>
                </div>
            </div>
        );
    }
}

export default TeacherHomework;
