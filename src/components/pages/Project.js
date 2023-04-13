import React, { useState } from 'react';
import { Card, Col, Row, Modal  } from 'react-bootstrap';
import project1 from '../images/radiantCauldron.png';
import project2 from '../images/streamSearch.png';
import project3 from '../images/qcFoodies.png';
import project4 from '../images/cuttingEdge.png';

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalLink, setModalLink] = useState('');

  const openModal = (src, title, text, link) => {
    setModalImageSrc(src);
    setModalTitle(title);
    setModalText(text);
    setModalLink(link);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImageSrc('');
    setModalTitle('');
    setModalText('');
    setModalLink('');
    setShowModal(false);
  };


  return (
    <div className='mb-5'>
      <div>
      <Card className='mx-auto mb-3 bg-primary text-white h-100 d-flex align-items-center justify-content-center col-3' style={{color: "#0c3f63" }}>
        <Card.Body>
          <Card.Title className='text-center'>My Projects!</Card.Title>
        </Card.Body>
      </Card>
      </div>

      <div className='container'>
        <section className='row justify-content-around'>

          <Row className='row-cols-1 row-cols-md-2 g-4'>
          <Col>
              <Card className="bg-primary" onClick={() => openModal(project1, 'Radiant Cauldron', 'A simple informational page for a local businesses events. This includes the ability to email the owner, sign up to their vendor lists with google, as well as view their upcoming events and links to their community pages.', 'https://github.com/Jklaver91/Challenge1')}>
                <Card.Img className="w-50 p-3 mx-auto" src={project1} alt={'generic tech photo'} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <a className="text-white" href="https://github.com/Jklaver91/Challenge1" target="_blank" rel="noreferrer">
                      Radiant Cauldron
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-primary" onClick={() => openModal(project2, 'Streaming Search', 'My first group work within the course. A tool to look up where any title you want is streaming, providing links as well.', 'https://pdismore.github.io/Date-Night-Streaming-Generator/')}>
                <Card.Img className="w-50 p-3 mx-auto" src={project2} alt={'generic tech photo'} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <a className="text-white" href="https://pdismore.github.io/Date-Night-Streaming-Generator/" target="_blank" rel="noreferrer">
                      Streaming Search
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-primary" onClick={() => openModal(project3, 'QC Foodies', 'My second group work within the course. A simple blog to post, comment, and upvote posts about local restaurants. This project saw my implimentaion of Cloudinary services to provide cloud based image upload to the site.', 'https://qc-foodies.herokuapp.com/')}>
                <Card.Img className="w-50 p-3 mx-auto" src={project3} alt={'generic tech photo'} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <a className="text-white" href="https://pdismore.github.io/Date-Night-Streaming-Generator/" target="_blank" rel="noreferrer">
                      QC Foodies!
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-primary" onClick={() => openModal(project4, 'Cutting Edge Pro', 'My third group work within the course. A online storefront to have your images etched, engraved, or cut our of a multitude of materials. This project saw my implimentaion of Cloudinary services to provide cloud based image upload to the site, as well as stripe payment implimentaion and group effort on front and back end development. *Note* the site is currently down due the cost of upkeep the link will take you to a youtube demonstration', 'https://www.youtube.com/watch?v=eRLPcZxiDgo')}>
                <Card.Img className="w-50 p-3 mx-auto" src={project4} alt={'generic tech photo'} />
                <Card.Body>
                  <Card.Title className="text-center">
                    <a className="text-white" href="https://pdismore.github.io/Date-Night-Streaming-Generator/" target="_blank" rel="noreferrer">
                      Cutting Edge Pro
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
    </Row>
      </section>
      </div>

      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImageSrc} className="w-100" alt="project" />
          <p>{modalText}</p>
          <p>
            <a href={modalLink} target="_blank" rel="noreferrer">
              Visit project repository
            </a>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
