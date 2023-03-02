import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch('/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {menu.map((item) => (
          <Col key={item.id} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Button variant="primary">Order</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;