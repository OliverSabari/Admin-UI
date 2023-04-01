import React from 'react'

import Edit from '../Images/EditIcon.png'

import Delete from '../Images/DeleteIcon.png'

const Member = ({name , email, role}) => {
  return (

    <tr>

        <td>
             <input type="checkbox" /> 
        </td>
        <td>
             {name}
        </td>
        <td>
           {email}
        </td>
        <td>
           {role}
        </td>
        <td>
            <span>
            <img src={Edit} alt="edit" className='customizeEditIcon'/>
            </span>

            <span className='deleteIconSpan'>
            <img src={Delete} alt="delete" className='customizeDeleteIcon'/>
            </span>

        </td>

    </tr>

  )
}

export default Member