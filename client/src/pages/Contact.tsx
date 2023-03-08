import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function TextControlsExample() {
  return (
    <Container className="contact-us-card-content">
      <Card className='shawdowing'>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
        </Card.Body>
        </Card>
    </Container>
  );
}

export default TextControlsExample;