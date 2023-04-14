import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { membersToDisplay } from '../Utils/constants';
import Pages from './Pages';
import TableForMembers from './TableForMembers';

const SearchBar = ({ membersData }) => {

  //setting current Page
  const [currentPage, setCurrentPage] = useState(1)

  //Capturing searchText entered by user
  const [searchText, setSearchText] = useState("")

  //Storing filtered members Data
  const [filteredMembers, setFilteredMembers] = useState([])

  //Copying the props data to new const variable to filter the data from this variable
  const filterMembersData = membersData

  //Determining data based on the search Text 
  const passingMembersData = searchText.length === 0 ? membersData : filteredMembers

  //Getting current page Data
  const membersToBeListed = membersToDisplay(passingMembersData, currentPage)

  const updatePageNumber = (number) => {
    setCurrentPage(number)
  }

  const filterMembers = (filterMembersData, filterText) => {

    const filteredData = filterMembersData?.filter(item => (
      item?.name?.toLowerCase().includes(filterText?.toLowerCase())
      ||
      item?.email?.toLowerCase().includes(filterText?.toLowerCase())
      ||
      item?.role?.toLowerCase().includes(filterText?.toLowerCase())
    ))

    setFilteredMembers(filteredData)
  }



  return (

    <>

      <Container
        className='searchContainer'
      >

        <input
          type="search"
          data-testid="searchBar"
          placeholder='Search by name, email or role'
          className='searchBox'
          onChange={(e) => {
            filterMembers(filterMembersData, e.target.value)
            setSearchText(e.target.value)
          }}
        />

      </Container>

      <TableForMembers
        membersData={membersToBeListed}
        currentPage={currentPage}
        name={`check${currentPage}`}   /* Name Prop for the checkbox */
      />

      <Pages
        membersData={passingMembersData}
        currentPage={currentPage}
        updatePageNumber={updatePageNumber}
        searchText={searchText}
      />
    </>
  )
}

export default SearchBar