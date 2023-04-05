import React from 'react'
import SearchBar from './SearchBar'

import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMembers } from '../Utils/fetchMembersSlice';
import { MEMBERS_API } from '../Utils/constants';
import useFetchMembers from '../Utils/useFetchMembers';


const Body = () => {

  // const selector = useFetchMembers()

  const dispatch = useDispatch()

  const selector = useSelector((store) =>store.fetchMembersSlice)
  // console.log("selectore is " + selector)
  useEffect(() => {
    dispatch(fetchMembers(MEMBERS_API))
     
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return selector.length > 0 ? (
    <SearchBar membersData={selector} /> 
  ): ""
}

export default Body