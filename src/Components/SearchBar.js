import React from 'react'

import {Container} from 'react-bootstrap'

const SearchBar = () => {
  return (
    <Container className='searchContainer'>
        <input type="search" placeholder='Search by name,email or role' className='searchBox'/>
    </Container>
  )
}

export default SearchBar