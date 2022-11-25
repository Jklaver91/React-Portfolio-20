import React from 'react';
import { Card } from 'react-bootstrap';

export default function Project() {
  return (
    <div>
      <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Body>
          <Card.Title className='text-center'>My Projects!</Card.Title>
        </Card.Body>
      </Card>
      </div>

    <div>
      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src='https://thumbs.dreamstime.com/b/cybersecurity-global-network-information-technology-security-services-internet-154742479.jpg' /> 
        <Card.Body>
          <Card.Title className='text-center'><a className='text-white' href="https://github.com/Jklaver91/Challenge1" target="_blank" rel="noreferrer">
          Horiseon Challenge</a></Card.Title>
          <Card.Text>My first work in the class refactoring HTML. A humble beginning. 
         </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src='https://wallpaper.dog/large/10718196.jpg' /> 
        <Card.Body>
          <Card.Title className='text-center'><a className='text-white' href="https://pdismore.github.io/Date-Night-Streaming-Generator/" target="_blank" rel="noreferrer">
          Streaming Search</a></Card.Title>
          <Card.Text> My first group work within the course. A tool to look up where any title you want is streaming, providing links as well.</Card.Text>
        </Card.Body>
      </Card>
      
      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src='https://wallpaper.dog/large/10718196.jpg' /> 
        <Card.Body>
          <Card.Title className='text-center'><a className='text-white' href="https://qc-foodies.herokuapp.com/" target="_blank" rel="noreferrer">
          QC Foodies!</a></Card.Title>
          <Card.Text> My second group work within the course. A simple blog to post, comment, and upvote posts about local restaurants. This project saw my implimentaion of Cloudinary services to provide cloud based image upload to the site.</Card.Text>
        </Card.Body>
      </Card>

      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Img className='w-50 p-3' src='https://wallpaper.dog/large/10718196.jpg' /> 
        <Card.Body>
          <Card.Title className='text-center'><a className='text-white' href="https://www.google.com/" target="_blank" rel="noreferrer">
          Project 3 TBD</a></Card.Title>
          <Card.Text> This will be where our final group project goes at the end of the course.</Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
