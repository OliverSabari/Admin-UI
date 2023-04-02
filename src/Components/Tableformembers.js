import React, { useEffect, useState } from 'react'

import { Container, Table } from 'react-bootstrap'
import Member from './Member'
import { membersToDisplay } from '../Utils/constants'

const TableForMembers = ({membersData,currentPage}) => {


    const [allCheck, setAllCheck] = useState(false)
    const [idCheck,setIdCheck] = useState([])

    useEffect(() => {
          
            if(allCheck){
            //     console.log( membersData)
            //     console.log(currentPage)
           
            //    const finalDataToCheck = membersToDisplay(membersData,currentPage)
            //    console.log("finaldata" + finalDataToCheck)
               const allId = membersData?.map(item => item.id)
                setIdCheck(allId)
            }
            else{
                setIdCheck([])
            }
    }, [allCheck,currentPage,membersData])

    const tableData = membersData.map(item => {
        // console.log(idCheck.some(idCheck => idCheck === item.id))
        return (
            <Member
            key={item?.id} 
            name={item?.name}
            email = {item?.email} 
            role = {item?.role} 
            checked={idCheck?.length > 0 ? idCheck.some(idCheck => idCheck === item.id) : false}
            />
        )
    })

    console.log(currentPage)
    console.log(idCheck)


    const handleChange = () => {
        setAllCheck(prevVal => !prevVal)
    }

    return (
        <Container className='tableContainer'>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" 
                            onChange={handleChange}
                            />
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Role
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                        {tableData}
                </tbody>
            </Table>
        </Container>
    )
}

export default TableForMembers