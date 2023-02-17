import { Component } from "react";
import Card from 'react-bootstrap/Card';

class AuthorCard extends Component {

    render() {
   
      return(
        
          <Card style={{ width: '18rem' }}>
            <Card.Title as="h2">{this.props.name}</Card.Title>
            <Card.Img src={this.props.img_Url} alt='Photos of Authors'/>
            <Card.Text>{this.props.description}</Card.Text>
          </Card>
       
      )
    }
  };
  
  export default AuthorCard;