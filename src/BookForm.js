import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class BookForm extends React.Component {
    render(){
        return (

            <>
            <Container className="jp-cont">
                <Form onSubmit={this.props.handleSubmit}>
                <Form.Group controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="Status">
              <Form.Check type="checkbox" label="Status" />
            </Form.Group>

            <Button type="submit">Add this Book</Button>
           

             </Form>

            </Container>
            </>
        )
    }
}

export default BookForm;