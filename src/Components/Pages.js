import React, { useEffect } from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { MEMBERS_PER_PAGE } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { multipleRecorDelete } from '../Utils/fetchMembersSlice'
import { removeCheck } from '../Utils/allCheckSlice'

const Pages = ({ membersData, currentPage, updatePageNumber, searchText }) => {

  const dispatch = useDispatch()

  const selector = useSelector((store) => store.fetchMembersSlice)

  useEffect(() => {

    if (searchText.length > 0) {
      updatePageNumber(1)
    }
  }, [searchText]) // eslint-disable-line react-hooks/exhaustive-deps

  const totalPages = []

  let i = 0;

  do {

    i++; 
    totalPages.push(i)

  } while (i <= membersData.length / MEMBERS_PER_PAGE)

  const handleDeletion = () => {

    if(window.confirm("Would you like to delete the selected records ?") ){
      dispatch(multipleRecorDelete())
      dispatch(removeCheck())
    } 
  }


  return (
    <Container>

      <Row>

        <Col lg={3}>

          <Button
            variant='danger'
            onClick={handleDeletion}
            disabled={selector.selectedCheckbox.length < 2 ? true : false}
          >
            Delete Selected
          </Button>

        </Col>

        <Col lg={9}>
          <ul className="pageNumbersDiv">
            <li className="pageNumbersStyling">
              <button
                className={currentPage === 1 ? "pageNumbersDisabledAnchor" : "pageNumbersAnchor"}
                onClick={() => updatePageNumber(1)}
                disabled={currentPage === 1 ? true : false}
              >
                {`<<`}
              </button>
            </li>

            <li className="pageNumbersStyling">
              <button
                className={currentPage === 1 ? "pageNumbersDisabledAnchor" : "pageNumbersAnchor"}
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