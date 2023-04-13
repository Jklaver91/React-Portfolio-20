import React from 'react';
import { Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <Card className='mx-auto mb-3 bg-primary inline-block text-white h-100 d-flex align-items-center justify-content-center col-3' style={{ color: "#0c3f63" }}>
        <Card.Body>
          <Card.Title className='text-center'>Contact me!</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUvpPMULxzksPA9W_Cv_bLQlJx0i0KrPDgf0fBtoOFVHt03w/viewform?embedded=true" width="640" height="1690" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
}
