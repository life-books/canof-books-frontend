import { Component } from "react";
import Card from 'react-bootstrap/Card';

class AuthorCard extends Component {

    render() {
      return(
        <div className='author'>
          <Card style={{ width: '18rem' }}>
            <Card.Title as="h2">{this.props.name}</Card.Title>
            <Card.Img src={this.props.img_Url} />
            <Card.Text>{this.props.description}</Card.Text>
          </Card>
        </div>
      )
    }
  };
  
  export default AuthorCard;