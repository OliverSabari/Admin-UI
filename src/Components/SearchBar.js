import React from 'react'

import {Container} from 'react-bootstrap'
import TableForMembers from './TableForMembers';

const SearchBar = ({membersData}) => {
  return (
    <>
    <Container className='searchContainer'>
        <input type="search" placeholder='Search by name,email or role' className='searchBox'/>
    </Container>
    <TableForMembers membersData={membersData}/>
    </>
  ) 
}

export default SearchBar