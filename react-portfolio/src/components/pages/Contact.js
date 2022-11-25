import React from 'react';
import { Card } from 'react-bootstrap';
import phone from '../images/phone.png'

export default function Contact() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src={phone} alt={'phone logo'} /> 
        <Card.Body>
        <Card.Title className='text-center'>Contact Me!</Card.Title>
          <Card.Text><a className='text-white' href="https://github.com/Jklaver91" target="_blank" rel="noreferrer">
          My Github!</a></Card.Text>
          <Card.Text><a className='text-white' href="mailto:klaverts@yahoo.com" target="_blank" rel="noreferrer">
          Email!</a></Card.Text>
          <Card.Text><a className='text-white' href="https://www.linkedin.com/in/justin-klaver-a74376239/" target="_blank" rel="noreferrer">
          Linkedin!</a></Card.Text>
          <Card.Text><a className='text-white' href="https://voice.google.com/u/0/about" target="_blank" rel="noreferrer">
          Phone: (555)-555-5555</a></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
