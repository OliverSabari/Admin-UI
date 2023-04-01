import { useEffect, useState } from "react"
import { MEMBERS_API } from "./constants"


const useFetchMembers = () => {

    const [members,setMembers] = useState([])

    useEffect(() => {
        fetchMembersData()
    },[])

    async function fetchMembersData() {
        const apiData =await fetch(MEMBERS_API)
        const jsonData = await apiData.json()
        setMembers(jsonData)
    }
   
    return members
}

export default useFetchMembers