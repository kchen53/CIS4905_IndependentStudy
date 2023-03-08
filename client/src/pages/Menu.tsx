import React, { useState } from 'react';
import MenuCards from '../helperFunctions/menuCards'
import Image from '../images/star.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card, { CardGroup, Col, Row } from 'react-bootstrap'
import Lunch from '../menuParts/lunch'
import Dinner from '../menuParts/dinner'
import App from '../menuParts/app'

export default function Menu() {

  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="lunch" title="Lunch">
        <Lunch/>
      </Tab>
      <Tab eventKey="dinner" title="Dinner">
        <Dinner/>
      </Tab>
      <Tab eventKey="app" title="App">
        <App />
      </Tab>
    </Tabs>
  )
}