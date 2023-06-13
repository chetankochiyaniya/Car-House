import React from 'react'
import MUIDataTable from 'mui-datatables'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { deleteUser } from '../../redux/actions'
const AdminUsers = () => {
  const users = useSelector((state) => state.userManagementReducer.users)
  const valuesArray = users.map((item) => Object.values(item.values))

  console.log(valuesArray)

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
      name: 'password',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'Action',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          console.log(value, tableMeta)
          const id = tableMeta.rowData[0]
          return (
            <>
              <button
                className="custom-table-btn "
                onClick={(e) => {
                  e.stopPropagation()
                  window.alert('EDIT')
                }}>
                Edit
              </button>
              <button className="custom-table-btn" onClick={() => dispatch(deleteUser(id))}>
                Delete
              </button>
            </>
          )
        }
      }
    }
  ]

  const options = {
    filter: true,
    filterType: 'dropdown',
    page: 0,
    onColumnSortChange: (changedColumn, direction) =>
      console.log('changedColumn: ', changedColumn, 'direction: ', direction),
    onChangeRowsPerPage: (numberOfRows) => console.log('numberOfRows: ', numberOfRows),
    onChangePage: (currentPage) => console.log('currentPage: ', currentPage),
    onRowClick: () => {
      window.alert('ROW clicked')
    }
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
