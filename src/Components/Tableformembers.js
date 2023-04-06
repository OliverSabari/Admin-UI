import React, {  useState } from 'react'

import { Container, Table } from 'react-bootstrap'
import Member from './Member'

const TableForMembers = ({membersData,currentPage,name}) => {


    const [allCheck, setAllCheck] = useState({})
   

    const tableData = membersData?.map(item => {
        
        return (
            <Member
            key={item?.id} 
            id={item?.id}
            name={item?.name}
            email = {item?.email} 
            role = {item?.role}
            checked={allCheck?.[name] ? true : false}
            />
        )
    })


    const handleChange = (e) => { 

        const {name,checked} = e.target
       
        setAllCheck(prevVal => {
            return (
                {
                    ...prevVal,
                    [name] : checked
                }
            )
        })
    }
    
    return (
        <Container className='tableContainer'>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" 
                            onChange={handleChange}
                            name={name}
                            checked = {allCheck?.[name] || false}
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
                        <th colSpan="2">
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