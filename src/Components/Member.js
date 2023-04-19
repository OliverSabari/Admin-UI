import React, { useEffect, useState } from 'react'
import Edit from '../Images/EditIcon.png'
import Delete from '../Images/DeleteIcon.png'
import { useDispatch } from 'react-redux'
import { addNewMembersData, checkboxRemove, checkboxSelected, deleteMemberData } from '../Utils/fetchMembersSlice'

const Member = ({ id, name, email, role, checked }) => {

  const dispatch = useDispatch()

  //To handle the edits performed by user
  const [newMembersData, setNewMembersData] = useState({ id, name, email, role })

  //Boolean representation of edit selected or not
  const [isEditSelected, setIsEditSelected] = useState(false)

  //Boolean representation if user decides to cancel edit
  const [cancelEdit, setCancelEdit] = useState(false)

  //user clicked on checkbox or not
  const [isChecked, setIsChecked] = useState(false)

  //when user did not select the edit, data should be readonly
  const isReadOnly = isEditSelected ? "" : "readonly"

  //To make data as input box based on edit selected or not
  const inputStyle = isEditSelected ? "withBorderStyle" : "withoutBorderStyle"

  //To make the bg color of data based on checkbox selected or not
  const rowStyle = isChecked ? "dataBackground" : "noDataBackground"

  useEffect(() => {

    if (checked) {

      dispatch(checkboxSelected(id))
      setIsChecked(true)

    }

    else {

      dispatch(checkboxRemove(id))
      setIsChecked(false)

    }
  }, [checked])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleEdit = () => {

    setCancelEdit(false)
    setIsEditSelected(true)

  }

  const handleChange = (e) => {

    const { name, value } = e.target

    setNewMembersData(prevVal => {
      return (
        {
          ...prevVal,
          [name]: value
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

  const handleDelete = (memberDetails) => {

    if (window.confirm("Would you like to delete this record of : " + memberDetails.name)) {
      dispatch(deleteMemberData(memberDetails))
    }

  }

  const handleCheckboxChange = (e) => {

    const { name, checked } = e.target

    if (checked) {
      dispatch(checkboxSelected(name))
      setIsChecked(true)
    }
    else {
      dispatch(checkboxRemove(name))
      setIsChecked(false)
    }

  }

  return (

    <tr className={`${rowStyle}`} data-testid={`row${id}`}>

      <td>

        <input
          type="checkbox"
          checked={isChecked}
          name={id}
          onChange={handleCheckboxChange}
          data-testid={`check${id}`}
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
          data-testid={`name${id}`}
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
              data-testid={`okayButton${id}`}
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
              data-testid = {`edit${id}`}
            />

          </span>
        }
      </td>

      <td>

        <span className='deleteIconSpan'>
          <img
            src={Delete}
            alt="delete"
            className='customizeDeleteIcon'
            onClick={() => handleDelete(newMembersData)}
            data-testid = {`delete${id}`}
          />

        </span>

      </td>

    </tr>

  )
}

export default Member