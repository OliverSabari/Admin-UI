import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { MEMBERS_PER_PAGE } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { multipleRecorDelete } from '../Utils/fetchMembersSlice'
import { removeCheck } from '../Utils/allCheckSlice'

const Pages = ({ membersData, currentPage, updatePageNumber, searchText }) => {

  const dispatch = useDispatch()

  const checkboxSelector = useSelector((store) => store.fetchMembersSlice)

  //When searchText changes , Setting the current page to 1
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

    if (window.confirm("Would you like to delete the selected records ?")) {
      dispatch(multipleRecorDelete())
      dispatch(removeCheck())
    }

  }

  const prevButtonStyle = currentPage === 1 ? "pageNumbersDisabledAnchor" : "pageNumbersAnchor"

  const prevIsDisabled = currentPage === 1 ? true : false

  const nextButtonStyle = currentPage === totalPages.length ? "pageNumbersDisabledAnchor" : "pageNumbersAnchor"

  const nextIsDisabled = currentPage === totalPages.length ? true : false
  
  return (
    <Container>

      <Row>

        { /*Multiple Delete Button */}
        <Col lg={3}>

          <Button
            variant='danger'
            onClick={handleDeletion}
            disabled={checkboxSelector.selectedCheckbox.length < 2 ? true : false}
            data-testid="multipleDelete"
          >
            Delete Selected
          </Button>

        </Col>

        {/* Prev Buttons */}
        <Col lg={9}>

          <ul className="pageNumbersDiv" data-testid="listOfButtons">

            <li className="pageNumbersStyling">

              <button
                className={prevButtonStyle}
                onClick={() => updatePageNumber(1)}
                disabled={prevIsDisabled}
              >

                {`<<`}

              </button>

            </li>

            <li className="pageNumbersStyling">

              <button
                className={prevButtonStyle}
                onClick={() => updatePageNumber(currentPage - 1)}
                disabled={prevIsDisabled}
              >

                {`<`}

              </button>

            </li>

            {/*Page Numbers */}
            {totalPages.map(item => {

              return (
                <li key={item} className="pageNumbersStyling">

                  <button
                    className={`pageNumbersAnchor ${currentPage === item ? "activePage" : ""}`}
                    onClick={() => updatePageNumber(item)}
                    data-testid={`pageButton${item}`}
                  >

                    {item}

                  </button>

                </li>
              )

            })}


            {/*Next Buttons */}
            <li className="pageNumbersStyling">

              <button
                className={nextButtonStyle}
                onClick={() => updatePageNumber(currentPage + 1)}
                disabled={nextIsDisabled}
              >

                {`>`}

              </button>

            </li>

            <li className="pageNumbersStyling">

              <button
                className={nextButtonStyle}
                onClick={() => updatePageNumber(totalPages.length)}
                disabled={nextIsDisabled}
                data-testid="lastpage"
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