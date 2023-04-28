import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'reactstrap'

function UserCards(props) {
  return (
    <Card body className='mb-2'>
        <Row className='justify-content-between'>
            <Col sm={2} className='font-small'>{new Date(props.data.registered.date).toLocaleDateString('en-MY',{day:'2-digit', month:'short', year:'numeric'})}</Col>
            <Col sm={4} className='font-small'>{props.data.name.first} {props.data.name.last}</Col>
            <Col sm={1} className='font-small'>{props.data.gender}</Col>
            <Col sm={2} className='font-small'>{props.data.location.country}</Col>
            <Col sm={3} className='font-small text-right'>{props.data.email}</Col>
        </Row>
    </Card>
  )
}

UserCards.propTypes = {}

export default UserCards