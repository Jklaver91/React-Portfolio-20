import React from 'react';
import { Card } from 'react-bootstrap';
import portrait from '../images/Justin200.png'

export default function About() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src={portrait} alt='portrait of Justin Klaver' /> 
        <Card.Body>
          <Card.Title className='text-center'>About Me! Justin Klaver</Card.Title>
          <Card.Text>My name is Justin Klaver I am a thirty year old Full-stack web developer finishing up my bootcamp in December. 
          I look forward to entering the field as soon as possible. My main interests are Hardware technologies, and going to the Blue Ridge Mountains with my wife to relax.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
