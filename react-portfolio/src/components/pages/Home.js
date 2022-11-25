import React from 'react';
import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
        <Card.Img src='https://img.freepik.com/premium-photo/blue-purple-technology-circuit_73426-205.jpg?w=2000' /> 
        <Card.Body>
          <Card.Title className='text-center'>Home Page</Card.Title>
          <Card.Text>Welcome to my page! Please select a tab to learn more about me!</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
