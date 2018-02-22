import React, { Component } from "react";
import {
  Grid,
  Image,
  Label,
  Segment,
  Reveal,
  Divider,
  Container
} from "semantic-ui-react";
import lazar from "../../images/Lazar Nikolic.png";
import david from "../../images/David Edelinski.png";
import damjan from "../../images/Damjan Djoric.png";
import marko from "../../images/Marko Mojsin.png";
import dusan from "../../images/Dusan Sijacic.png";
import djole from "../../images/Djordje Petrovic.png";
import visible from "../../images/visibleImage.png";

const nastavnik = {
  ime: {
    "Lazar Nikolic": {
      image: lazar,
      text:
        "Pasionirani samouki programer. Po obrazovanju master filozofije. Radio kao prevodilac sa italijanskog i engleskog, a poslednjih 5 godina kao freelancer programer, SEO savetnik i od skoro FrontEnd developer u HTEC-u."
    },
    "Marko Mojsin": {
      image: marko,
      text:
        "Diplomirani matematičar i nastavnik matematike u osnovnoj školi već 8 godina. Programiranjem se bavi iz didaktičkih i komercijalnih razloga još od fakultetskih dana kada je položio softverski inženjering sa najvišom ocenom. U slobodno vreme se igra sa algoritmima i strukturama podataka."
    },
    "Dusan Sijacic": {
      image: dusan,
      text:
        "Veliki zaljubljenik u programiranje sa  željom da prenese to svoje znanje drugima. Student Računarskog fakulteta u Beogradu sa višegodišnjim iskustvom u držanju individualnih i grupnih časova iz programiranja i matematike. Veoma posvećen poslu, obožava rad sa mladima i rad u grupi."
    },
    "David Edelinski": {
      image: david,
      text:
        "Student završne godine matematičkog fakulteta. Programiranjem se bavi od malih nogu. Među prvim generacijama koje su završile programiranje u SistemPro školi kod Djordja Petrovića. Željan prenošenja znanja mlađima."
    },
    "Damjan Djoric": {
      image: damjan,
      text:
        "Apsolvent na Matematičkom fakultetu, računarski smer. Bavi se fitnesom i vodi zdrav život. U slobodno vreme radi kao dizaner računarskih sistema i savetnik za arhitekturu softvera."
    },
    "Djordje Petrović": {
      image: djole,
      text:
        "Direktor EDUTECH škole programiranja. Završio Računarski fakultet. Radi kao Java tester, Backend i Frontend tehnologije i već godinama drži časove programiranja."
    }
  }
};

class TeacherData extends Component {
  renderTeachers() {
    if (this.props.location.state.teacher === "Marko Dusan") {
      return (
        <Grid columns={2}>
          <Grid.Column>
            <Segment raised>
              <Label color="red" ribbon>
                Nastavnik:
              </Label>
              <Reveal animated="rotate left">
                <Reveal.Content visible>
                  <Image src={visible} circular floated="left" size="small" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={nastavnik.ime["Marko Mojsin"].image}
                    circular
                    floated="left"
                    size="small"
                  />
                </Reveal.Content>
              </Reveal>
              <h3>
                <strong>Marko Mojsin</strong>
              </h3>

              <Container textAlign="justified">
                <Divider />
                <p>{nastavnik.ime["Marko Mojsin"].text}</p>
              </Container>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised>
              <Label color="red" ribbon>
                Nastavnik:
              </Label>
              <Reveal animated="rotate left">
                <Reveal.Content visible>
                  <Image src={visible} circular floated="left" size="small" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={nastavnik.ime["Dusan Sijacic"].image}
                    circular
                    floated="left"
                    size="small"
                  />
                </Reveal.Content>
              </Reveal>
              <h3>
                <strong>Dusan Sijacic</strong>
              </h3>

              <Container textAlign="justified">
                <Divider />
                <p>{nastavnik.ime["Dusan Sijacic"].text}</p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      );
    }
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Segment raised>
            <Label color="red" ribbon>
              Nastavnik:
            </Label>
            <Reveal animated="rotate left">
              <Reveal.Content visible>
                <Image src={visible} circular floated="left" size="small" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src={nastavnik.ime[this.props.location.state.teacher].image}
                  circular
                  floated="left"
                  size="small"
                />
              </Reveal.Content>
            </Reveal>
            <h3>
              <strong>{this.props.location.state.teacher}</strong>
            </h3>

            <Container textAlign="justified">
              <Divider />
              <p>{nastavnik.ime[this.props.location.state.teacher].text}</p>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
  render() {
    return <div className="wrapperForParents">{this.renderTeachers()}</div>;
  }
}

export default TeacherData;
