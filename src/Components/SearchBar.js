import React from 'react'

import {Container} from 'react-bootstrap'
import Tableformembers from './Tableformembers';

const SearchBar = ({membersData}) => {
  return (
    <>
    <Container className='searchContainer'>
        <input type="search" placeholder='Search by name,email or role' className='searchBox'/>
    </Container>
    <Tableformembers membersData={membersData}/>
    </>
  )
}

export default SearchBar