import React from 'react';
import Card from 'react-bootstrap/Card';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

function MenuCards(item:any, price:any, image:any, description:any) {
  return (
    <Card className="shawdowing" >
      <Card.Title>{item}</Card.Title>
      <Card.Img src={image}></Card.Img>
      <Card.Text>{description}</Card.Text>
      <Card.Subtitle>${price}</Card.Subtitle>

      <button type="submit" className="btn btn-primary">Add to Cart</button>
    </Card>
  );
}

export default MenuCards;