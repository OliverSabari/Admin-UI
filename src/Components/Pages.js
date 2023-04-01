import React from 'react'

import { Container } from 'react-bootstrap'
import { MEMBERS_PER_PAGE } from '../Utils/constants'

const Pages = ({ membersData, currentPage,updatePageNumber }) => {

  const totalPages = []

  let i = 0;

  do {

    i++;
    totalPages.push(i)

  } while (i <= membersData.length / MEMBERS_PER_PAGE)


  return (
    <Container>
      <ul className="pageNumbersDiv">
        {totalPages.map(item => {
          return (
            <li key={item} className="pageNumbersStyling">
              <a 
              href="!#" 
              role="button" 
              className={`pageNumbersAnchor ${currentPage === item ? "activePage" : ""}`}
              onClick={() =>updatePageNumber(item) }
              > 
              {item}
              </a>
            </li>
          )
        })}
      </ul>


    </Container>
  )
}

export default Pages