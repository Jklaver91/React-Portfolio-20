import React from 'react';
import { Card } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src='https://scontent.faus1-1.fna.fbcdn.net/v/t1.6435-9/117901897_3618576664838010_5200430576688615685_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0wmibgn8q0AX9NYSAE&_nc_oc=AQnAka0mQRv94N8H1XYsv9Oh_AMQTDjyUJor_0TtR8NyX7wMoj_uOmyWKYjvamzqQgDOIOYz9AoBvOvrrrzhg50v&_nc_ht=scontent.faus1-1.fna&oh=00_AfDvw8T_rvTwcgECrezDnEFlQ-anJyRGUrmBg1i6V0RuWQ&oe=63A88BC7' /> 
        <Card.Body>
          <Card.Title className='text-center'>About Me! Justin Klaver</Card.Title>
          <Card.Text>My name is Justin Klaver I am a thirty year old Full-stack web developer finishing up my bootcamp in December. 
          I look forward to entering the field as soon as possible. My main interests are Hardware technologies, and going to the Blue Ridge Mountains with my wife to relax.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
