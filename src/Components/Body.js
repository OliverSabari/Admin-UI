import React from 'react'
import SearchBar from './SearchBar'

import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMembers } from '../Utils/fetchMembersSlice';
import { MEMBERS_API } from '../Utils/constants';


const Body = () => {
  const dispatch = useDispatch()

  const selector = useSelector((store) => store.fetchMembersSlice.membersData)
 console.log("selector is " +selector)
  useEffect(() => {
    dispatch(fetchMembers(MEMBERS_API))
     
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SearchBar membersData={selector} /> 
  )
}

export default Body