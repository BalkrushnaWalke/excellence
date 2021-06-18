import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import "../assets/styles/style.css";

const Users = (props) => {
  const [port, setPort] = useState([]);
  const [offset, setOffset] = useState([]);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [pageCount, setPageCount] = useState('');
  const [pageNo, setPageNo] = useState('1');

const url = 'https://reqres.in/api/users?page=' + pageNo;

  useEffect(() => {
    getData()
}, [pageNo])

  const getData = (page) =>{
  axios.get(
    url,
  ).then((response)=> {
    setPort(response.data.data)
    setPageCount(response.data.total_pages)
  }).catch();
}

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    if(selectedPage == 1){
      setPageNo(2);
    } else{
      setPageNo(1);
    }
    setCurrentPage(selectedPage)
    setOffset(offset)
  };

  return (
    <div className="row">
      <div>
      {
        port && port.map(Port =>
          <Card className="column" style={{ borderColor: '#ff753e' }}>
            <CardImg top className="image" src={Port.avatar} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{Port.id} {Port.first_name} {Port.last_name}</CardTitle>
              <CardSubtitle tag="h6" style={{ color: '#4b9fd5' }}>{Port.email}</CardSubtitle>
            </CardBody>
          </Card>
        )
      }
      </div>
      <div className='center'>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
        </div>
    </div>
  );
}

export default Users;
