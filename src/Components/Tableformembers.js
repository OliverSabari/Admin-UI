import React from 'react'

import { Container, Table } from 'react-bootstrap'
import Member from './Member'

const TableForMembers = ({membersData}) => {


    const tableData = membersData.map(item => {
        return (
            <Member
            key={item?.id} 
            name={item?.name}
            email = {item?.email} 
            role = {item?.role} 
            />
        )
    })

    return (
        <Container className='tableContainer'>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
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