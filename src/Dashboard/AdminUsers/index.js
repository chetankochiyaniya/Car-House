import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { deleteUser } from '../../redux/actions'
const AdminUsers = () => {
  const users = useSelector((state) => state.userManagementReducer.users)
  const valuesArray = users.slice(1).map((item) => {
    return Object.values(item.values)
  })

  const dispatch = useDispatch()

  const columns = [
    {
      name: 'Id',
      options: {
        filter: true
      }
    },
    {
      name: 'Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Email',
      options: {
        filter: false
      }
    },
    {
      name: 'Action',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowData[0]
          return (
            <>
              <button className="custom-table-btn" onClick={() => dispatch(deleteUser(id))}>
                Delete
              </button>
            </>
          )
        }
      }
    }
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const options = {
    filter: true,
    filterType: 'dropdown',
    page: currentPage,
    selectableRows: 'none',
    rowsPerPageOptions: [5, 10, 20],
    rowsPerPage: 5,
    onChangePage: (page) => handlePageChange(page)
  }

  return (
    <SideBar>
      <MUIDataTable
        title={'Web Users List'}
        data={valuesArray}
        columns={columns}
        options={options}
      />
    </SideBar>
  )
}

export default AdminUsers
