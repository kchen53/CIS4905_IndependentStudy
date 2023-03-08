import React from 'react';
import Maps from '../components/googleMaps'
import Card from 'react-bootstrap/Card'
import { Container, Button } from 'react-bootstrap';


export default function About() {
  return (
    
    <Container className="contact-us-card-content">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <Card className="text-left">
      <Card.Body>
        <Card.Title>Restaurant Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Phone Number: (123)-456-7890</Card.Subtitle>
        <Card.Text>
          123 Gator Rd, Gainesville, Fl, 32607
        </Card.Text>
        <Button href = '/menu' variant="primary">Go to Menu</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
   </Container>
    
    
  );
}