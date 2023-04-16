import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Member from './Member'
import { useDispatch, useSelector } from 'react-redux'
import { addCheck } from '../Utils/allCheckSlice'

const TableForMembers = ({ membersData, currentPage, name }) => {

    const dispatch = useDispatch()

    const allCheck = useSelector((store) => store.allCheckSlice)

    //Map and passing the each data to Members Component to display in table
    const tableData = membersData?.map(item => {

        return (
            <Member
                key={item?.id}
                id={item?.id}
                name={item?.name}
                email={item?.email}
                role={item?.role}
                checked={allCheck?.[name] ? true : false}
            />
        )
    })


    const handleChange = (e) => {

        const { name, checked } = e.target
        
        dispatch(addCheck({ [name]: checked }))
    }

    //If searched text does not match any recordsb (Early return)
    if (membersData.length === 0) {
        return (
            <h4 className='noRecords' data-testid="noRecords"> No records matches your search . </h4>
        )
    }

    return (

        <Container
            className='tableContainer'
        >
            <Table>

                <thead>

                    <tr data-testid = "tableHeadingRow">

                        <th>
                            <input type="checkbox"
                                onChange={handleChange}
                                name={name}
                                checked={allCheck?.[name] || false}
                                data-testid={`selectAll${name}`}
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

                <tbody data-testid = "tableBody">

                    {tableData}

                </tbody>

            </Table>

        </Container>
    )
}

export default TableForMembers