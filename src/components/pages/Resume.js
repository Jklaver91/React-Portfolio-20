import React from 'react';
import { Card } from 'react-bootstrap';

export default function Resume() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-6' style={{color: "#0c3f63" }}>
        <Card.Body>
          <Card.Title className='text-center'>My Resume!</Card.Title>
          <Card.Title className='text-center'><a className='text-white' href="https://docs.google.com/document/d/1AGf-fbOBQHjY8X10kkRRBXlW_mbMaGNg/edit?usp=share_link&ouid=107646484719676834997&rtpof=true&sd=true" target="_blank" rel="noreferrer">
          View or download my resume here!</a></Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}