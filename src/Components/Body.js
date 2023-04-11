import React from 'react'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMembers } from '../Utils/fetchMembersSlice';
import { MEMBERS_API } from '../Utils/constants';


const Body = () => {

  const dispatch = useDispatch()

  const selector = useSelector((store) => store.fetchMembersSlice)

  useEffect(() => {

    //dispatching action to fetch members data

    dispatch(fetchMembers(MEMBERS_API))

  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (

    //Three possiblities after trying to fetch members Data

    <>

      {/*  1) Loading when it takes time to fetch data */}

      {
        selector.loading
        &&
        <div> Loading ..</div>
      }

      {/* 2) Error while fetching data   */}

      {
        !selector.loading
          &&
          selector.error
          ?
          <div> We are facing some unexpected error. Please try again after some time. ( {selector.error} )</div>
          :
          null
      }

      {/*  3) When Fetching data is successfull, passing data to searchbar component */}

      {
        !selector.loading
          &&
          selector.membersData.length > 0
          ?
          <SearchBar membersData={selector.membersData} />
          :
          null
      }



    </>
  )
}

export default Body