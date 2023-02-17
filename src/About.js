import { Component } from "react";


import authorInfo from "./authors.json";
import AuthorCard from "./AuthorCard";
import { Container, Row } from "react-bootstrap";
import './About.css'

class Profile extends Component {

  render() {
    return(
      <Container>
        <Row >
        {authorInfo.map(person => <AuthorCard
          key={person.key}
          name={person.name}
          img_Url={person.img_Url}
          description={person.description}
        />)}
        </Row>
      </Container>
    )
  }
};

export default Profile;

