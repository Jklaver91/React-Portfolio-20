import React from 'react';
import { Card } from 'react-bootstrap';
import code from '../images/code.jpg'

export default function Home() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
        <Card.Img src={code} alt={'computer with code'} /> 
        <Card.Body>
          <Card.Title className='text-center'>Home Page</Card.Title>
          <Card.Text>Welcome to Justin Klaver's Portfolio page! Please select a tab to learn more about me!</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
