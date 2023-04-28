import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAPI } from '../features/userSlice'
import UserCards from '../components/UserCards'
import { Button, Col, Input, Row } from 'reactstrap'

export default function List() {
    const { data, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        console.log('hey');
        dispatch(getUserAPI())
    }, [])

    const handleSearch = (evt) => {
        // console.log(evt.target.name, evt.target.value);
        setSearch(evt.target.value)
    }
    const clearSearch = () => {
        setSearch('')
    }

    const _renderContent = () => {
        let display

        console.log('b4', data);

        let FILTER = search === '' ? data : data.filter(item => {
            // console.log(item.name.first, item.name.first.toLowerCase() === search.toLowerCase());
            return item.name.first.normalize('NFC').toLowerCase().includes(search.toLowerCase()) ||
            item.location.country.toLowerCase().includes(search.toLowerCase())
        })
        // let FILTER = data
        console.log('filter', FILTER, search);

        switch (FILTER.length) {
            case 0:
                return display = <div className='container text-center'>No such item, please check your search spelling and try again</div>        
            default:
                return display = FILTER.map((data,index) => (
                    <UserCards key={index} data={data} />
                ))
        }
    }
    
    // console.log('sini', search);
    switch (loading) {
        case 'idle':
            return (
                <div className='container'>Loading</div>
            )
        case 'ready':
            return (
                <div className='container'>
                    <div className='mb-3 d-flex align-items-center justify-content-end'>
                        <Input
                            onChange={handleSearch}
                            name='search'
                            type='text'
                            placeholder='Search by name or country'
                            value={search}
                            className='input-text'
                        />
                        <Button size='sm' color='danger' className='smaller-btn' onClick={clearSearch}>Clear Search</Button>
                    </div>
                    <Row className='m-0 mb-2 px-2 justify-content-between' style={{color:'#BCBCBC'}}>
                        <Col sm={2} className='font-small'>Date</Col>
                        <Col sm={4} className='font-small'>Name</Col>
                        <Col sm={1} className='font-small'>Gender</Col>
                        <Col sm={2} className='font-small'>Country</Col>
                        <Col sm={3} className='font-small text-right'>Email</Col>
                    </Row>

                    {_renderContent()}
                </div>
            )
        default:
            break;
    }
}
