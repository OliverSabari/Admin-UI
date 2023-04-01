import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import { membersToDisplay } from '../Utils/constants';
import Pages from './Pages';
import TableForMembers from './TableForMembers';

const SearchBar = ({ membersData }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const membersToBeListed = membersToDisplay(membersData, currentPage)

  const updatePageNumber = (number) => {
    setCurrentPage(number)
  }

  return (

    <>

      <Container className='searchContainer'>

        <input type="search" placeholder='Search by name,email or role' className='searchBox' />

      </Container>

      <TableForMembers 
      membersData={membersToBeListed} 
      />

      <Pages 
      membersData={membersData} 
      currentPage={currentPage} 
      updatePageNumber={updatePageNumber} 
      />
    </>
  )
}

export default SearchBar