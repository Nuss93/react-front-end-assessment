import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { getUserAPI } from '../features/userSlice'
import UserCards from '../components/UserCards'
import { Button, Col, Input, Row } from 'reactstrap'
import REFRESH from '../assets/img/refresh.png'

function Items ({ currentItems }) {
    if(currentItems === null) return;

    let display
    switch (currentItems.length) {
        case 0:
            return display = <div className='container text-center'>No such item, please check your search spelling and try again</div>        
        default:
            return display = currentItems.map((data,index) => (
                <UserCards key={index} data={data} />
            ))
    }
}

function Pagination ({itemsPerPage, items, search}) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    let FILTER = items.filter(item => {
        return item.name.first.normalize('NFC').toLowerCase().includes(search.toLowerCase()) ||
        item.location.country.toLowerCase().includes(search.toLowerCase())
    })
    // console.log('woi', FILTER, currentItems, itemsPerPage, pageCount, itemOffset);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(FILTER.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(FILTER.length / itemsPerPage));
        if(itemOffset > itemsPerPage * pageCount) setItemOffset(0)
    }, [itemOffset, itemsPerPage, search]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % FILTER.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

   return (
    <>
        <Items currentItems={currentItems} data={items} />
        <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    </>
   )
}

export default function List() {
    const { data, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    
    
    useEffect(() => {
        console.log('hey');
        dispatch(getUserAPI())
    }, [])

    const handleSearch = (evt) => {
        setSearch(evt.target.value)
    }
    const clearSearch = () => {
        setSearch('')
    }
    const refresh = () => {
        setSearch('')
        dispatch(getUserAPI())
    }
    
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
                        <Button size='sm' color='primary' className='smaller-btn d-flex justify-content-center align-items-center' onClick={refresh}>
                            <img src={REFRESH} height={'12px'} />
                            <span style={{color: '#fff', marginLeft:'5px'}}>Refresh</span>
                        </Button>
                    </div>
                    <Row className='m-0 mb-2 px-2 justify-content-between' style={{color:'#BCBCBC'}}>
                        <Col sm={2} className='font-small'>Date</Col>
                        <Col sm={4} className='font-small'>Name</Col>
                        <Col sm={1} className='font-small'>Gender</Col>
                        <Col sm={2} className='font-small'>Country</Col>
                        <Col sm={3} className='font-small text-right'>Email</Col>
                    </Row>

                    {/* {_renderContent()} */}
                    <Pagination items={data} itemsPerPage={7} search={search} />
                </div>
            )
        default:
            break;
    }
}
