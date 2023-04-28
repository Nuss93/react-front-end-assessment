import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

// Generic component that accepts props to display each list item
// Modal included for when user clicks on individual user
function UserCards(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Card body className='mb-2' onClick={toggle}>
        <Row className='justify-content-between'>
            <Col sm={2} className='font-small' style={{color:'#979797'}}>{new Date(props.data.registered.date).toLocaleDateString('en-MY',{day:'2-digit', month:'short', year:'numeric'})}</Col>
            <Col sm={4} className='font-small'>{props.data.name.first} {props.data.name.last}</Col>

            {/* Title case for gender */}
            <Col sm={1} className='font-small' style={{color:'#979797'}}>{props.data.gender.substring(0, 1).toUpperCase() + props.data.gender.substring(1)}</Col>
            
            <Col sm={2} className='font-small'>{props.data.location.country}</Col>
            <Col sm={3} className='font-small text-right'>{props.data.email}</Col>
        </Row>
    </Card>

    {/* ===== MODAL POPUP WHEN CARD IS CLICKED ===== */}
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle} style={{borderBottom:'none'}}>
        <h2 className='mb-0'>{props.data.name.first} {props.data.name.last}</h2>
      </ModalHeader>
      <ModalBody toggle={toggle}>
        <div className='d-flex align-items-start justify-content-start mb-3'>
          <img src={props.data.picture.large} />
          <div className='mx-3'>
            <p>Date : {new Date(props.data.registered.date).toLocaleDateString('en-MY',{day:'2-digit', month:'short', year:'numeric'})}</p>
            <p>Gender : {props.data.gender.substring(0, 1).toUpperCase() + props.data.gender.substring(1)}</p>
            <p>Country : {props.data.location.country}</p>
            <p>Country : {props.data.email}</p>
          </div>
        </div>
      </ModalBody>
    </Modal>
    </>
  )
}

UserCards.propTypes = {
    data: PropTypes.object.isRequired
}

export default UserCards