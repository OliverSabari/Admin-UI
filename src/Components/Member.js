import React, { useState } from 'react'

import Edit from '../Images/EditIcon.png'

import Delete from '../Images/DeleteIcon.png'
import { useDispatch } from 'react-redux'
import { addNewMembersData } from '../Utils/fetchMembersSlice'



const Member = ({ id, name, email, role, checked }) => {

  const dispatch = useDispatch()

  const [newMembersData, setNewMembersData] = useState({ id, name, email, role })

  const [isEditSelected, setIsEditSelected] = useState(false)

  const [cancelEdit,setCancelEdit] = useState(false) 

  const isReadOnly = isEditSelected ? "" : "readonly"

  const inputStyle = isEditSelected ? "withBorderStyle" : "withoutBorderStyle"

  const handleEdit = () => {
    setCancelEdit(false)
    setIsEditSelected(true)

  }

  const handleChange = (e) => {
      const {name,value} = e.target 
      
      setNewMembersData(prevVal => {
        return (
          {
            ...prevVal,
            [name] : value
          }
        )
      })
  }

  const handleEditedValue = () => {
    setIsEditSelected(false)
    dispatch(addNewMembersData(newMembersData))
  }

  const handleCancelEdit = () => {
    setCancelEdit(true)
    setIsEditSelected(false)
    setNewMembersData({ id, name, email, role })
  }

  return (

    <tr>

      <td>

        <input 
        type="checkbox" 
        checked={checked} 
        />
      </td>

      <td>

        <input
        type="text" 
        value={cancelEdit ? name : newMembersData.name}
        readOnly={isReadOnly} 
        name='name'
        onChange={handleChange}
        className={inputStyle}
        />

      </td>

      <td>

        <input 
        type="text" 
        value={cancelEdit ? email : newMembersData.email} 
        readOnly={isReadOnly}
        name='email'
        onChange={handleChange}
        className={`emailWidth ${inputStyle}`}
        />

      </td>

      <td>

        <input 
        type="text" 
        value={cancelEdit ? role : newMembersData.role} 
        readOnly={isReadOnly} 
        name='role'
        onChange={handleChange}
        className={inputStyle}
        />

      </td>

      <td>

        {isEditSelected ? 
        <>
        <span
        onClick={handleEditedValue}
        className='okayButton'
        >
          &#10003;
        </span>

        <span 
        onClick={handleCancelEdit}
        className='cancelButton'>
            X
        </span>
        </>
        :
        <span>

          <img 
          src={Edit} 
          alt="edit"
          className='customizeEditIcon' 
          onClick={handleEdit}
          />

        </span>
      }
        <span className='deleteIconSpan'>
          <img 
          src={Delete} 
          alt="delete" 
          className='customizeDeleteIcon' 
          />

        </span>

      </td>

    </tr>

  )
}

export default Member