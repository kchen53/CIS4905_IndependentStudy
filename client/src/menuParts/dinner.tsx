import React from 'react'
import MenuCards from '../helperFunctions/menuCards'
import Image from '../images/star.png'
import Card, { CardGroup, Col, Row } from 'react-bootstrap'

function dinnerMenu() {
  return (
    <Row xs={1} md={6} className="g-4">
      {MenuCards("food", "24", Image, "hi")}
      {MenuCards("food", "25", Image, "hi")}
      {MenuCards("food", "26", Image, "hi")}
      {MenuCards("food", "27", Image, "hi")}
      {MenuCards("food", "28", Image, "hi")}
      {MenuCards("food", "29", Image, "hi")}
      {MenuCards("food", "30", Image, "hi")}
      {MenuCards("food", "24", Image, "hi")}
      {MenuCards("food", "25", Image, "hi")}
      {MenuCards("food", "26", Image, "hi")}
      {MenuCards("food", "27", Image, "hi")}
      {MenuCards("food", "28", Image, "hi")}
      {MenuCards("food", "29", Image, "hi")}
      {MenuCards("food", "30", Image, "hi")}
    </Row>
    
  );
}

export default dinnerMenu;