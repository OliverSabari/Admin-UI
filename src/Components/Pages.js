import React, { useEffect } from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { MEMBERS_PER_PAGE } from '../Utils/constants'

const Pages = ({ membersData, currentPage, updatePageNumber,searchText }) => {


  useEffect(() => {

    if(searchText.length > 0){
      updatePageNumber(1)
    }
  },[searchText]) // eslint-disable-line react-hooks/exhaustive-deps

  const totalPages = []

  let i = 0;

  do {

    i++;
    totalPages.push(i)

  } while (i <= membersData.length / MEMBERS_PER_PAGE)

  return (
    <Container>

      <Row>

    <Col lg={3}>
        <Button variant='danger'> Delete Selected </Button>
    </Col>

    <Col lg={9}>
      <ul className="pageNumbersDiv">
        <li className="pageNumbersStyling">
          <button
            className="pageNumbersAnchor"
            onClick={() => updatePageNumber(1)}
            disabled={currentPage === 1 ? true : false}
          > 
            {`<<`}
          </button>
        </li>

        <li className="pageNumbersStyling">
          <button
            className="pageNumbersAnchor"
            onClick={() => updatePageNumber(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
          >
            {`<`}
          </button>
        </li>

        {totalPages.map(item => {
          return (
            <li key={item} className="pageNumbersStyling">
              <button
                className={`pageNumbersAnchor ${currentPage === item ? "activePage" : ""}`}
                onClick={() => updatePageNumber(item)}
              >
                {item}
              </button>
            </li>
          )
        })}

        <li className="pageNumbersStyling">
          <button
            className="pageNumbersAnchor"
            onClick={() => updatePageNumber(currentPage + 1)}
            disabled={currentPage === totalPages.length ? true : false}
          >
            {`>`}
          </button>
        </li>

        <li className="pageNumbersStyling">
          <button
            className="pageNumbersAnchor"
            onClick={() => updatePageNumber(totalPages.length)}
            disabled={currentPage === totalPages.length ? true : false}
          >
            {`>>`}
          </button>
        </li>

      </ul>
      </Col>

      </Row>
    </Container>
  )
}

export default Pages