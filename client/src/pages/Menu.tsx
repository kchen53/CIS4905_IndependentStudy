// import React, { useState } from 'react';
// import MenuCards from '../helperFunctions/menuCards'
// import Image from '../images/star.png'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Card, { CardGroup, Col, Row } from 'react-bootstrap'
// import Lunch from '../menuParts/lunch'
// import Dinner from '../menuParts/dinner'
// import App from '../menuParts/app'

// export default function Menu() {

//   return (
//     <Tabs
//       defaultActiveKey="home"
//       transition={false}
//       id="noanim-tab-example"
//       className="mb-3"
//     >
//       <Tab eventKey="lunch" title="Lunch">
//         <Lunch/>
//       </Tab>
//       <Tab eventKey="dinner" title="Dinner">
//         <Dinner/>
//       </Tab>
//       <Tab eventKey="app" title="App">
//         <App />
//       </Tab>
//     </Tabs>
//   )
// }

import React, { useEffect, useState } from 'react';
import { Form, Button, Container, CardGroup, Row } from 'react-bootstrap';
import MenuCards from '../helperFunctions/menuCards'

function Menu() {
  const [menuItems, setMenu] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | undefined>(undefined);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/menu', {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        price,
      }),
      headers:{
        "Content-Type": "application/json",
      },
    });
    const menuItem = await response.json();
    setMenu([...menuItems, menuItem]);
    setName("");
    setDescription("");
    setPrice(0);
  }

  async function handleDelete(menuId: string) {
    await fetch(`http://localhost:5000/menu/${menuId}`, {
      method: "DELETE",
    });
    setMenu(menuItems.filter((menu) => menu._id !== menuId));
  }

  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://localhost:5000/menu");
      const newMenu = await response.json();
      setMenu(newMenu);
    }
    getItems();
  }, []);

  return (
    <Container>
      <div className='menu'>
      <Row xs={1} md={4} className="g-4">
        {menuItems.map((Menu) => (
        <CardGroup key={Menu._id}>
          <Button onClick={() => handleDelete(Menu._id)}>X</Button>
          {MenuCards(Menu.name, Menu.price, Menu.description)}
        </CardGroup>
        ))}
        </Row>
      </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          value={price !== undefined ? price : ''}
          onChange={(e) =>
            setPrice(e.target.value !== '' ? parseFloat(e.target.value) : undefined)
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
    </Container>
  );
};

export default Menu;



