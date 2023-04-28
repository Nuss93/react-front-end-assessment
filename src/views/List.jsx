import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAPI } from '../features/userSlice'
import UserCards from '../components/UserCards'
import { Col, Row } from 'reactstrap'

export default function List() {
    const { data, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log('hey');
        dispatch(getUserAPI())
    }, [])
    
    console.log('sini', data, loading);
    switch (loading) {
        case 'idle':
            return (
                <div className='container'>Loading</div>
            )
        case 'ready':
            return (
                <div className='container'>
                    <Row className='m-0'>
                        <Col sm={2} className='font-small'>Date</Col>
                        <Col sm={2} className='font-small'>Name</Col>
                        <Col sm={2} className='font-small'>Gender</Col>
                        <Col sm={2} className='font-small'>Country</Col>
                        <Col sm={3} className='font-small'>Email</Col>
                    </Row>
                    <UserCards data={data[0]} />
                    {data.map((data,index) => (
                        <UserCards key={index} data={data} />
                    ))}
                </div>
            )
        default:
            break;
    }
}
