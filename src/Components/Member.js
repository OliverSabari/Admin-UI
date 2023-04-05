import React, { useState } from 'react'

import Edit from '../Images/EditIcon.png'

import Delete from '../Images/DeleteIcon.png'

const Member = ({ id, name, email, role, checked }) => {

  const [newMembersData, setNewMembersData] = useState({ id, name, email, role })

  const [isEditSelected, setIsEditSelected] = useState(false)

  const isReadOnly = isEditSelected ? "" : "readonly"

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
        value={newMembersData.name}
        readOnly={isReadOnly} 
        />

      </td>

      <td>

        <input 
        type="text" 
        value={newMembersData.email} 
        readOnly={isReadOnly}
        />

      </td>

      <td>

        <input 
        type="text" 
        value={newMembersData.role} 
        readOnly={isReadOnly} 
        />

      </td>

      <td>

        <span>

          <img 
          src={Edit} 
          alt="edit"
          className='customizeEditIcon' 
          />

        </span>

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