import * as React from 'react'
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
  DataGrid
} from '@mui/x-data-grid'
import SideBar from '../SideBar'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import './index.css'

const columns = [
  { field: 'id', headerName: 'Id' },
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'password', headerName: 'Password' }
]

export default function AdminUsers() {
  const users = useSelector((state) => state.userManagementReducer.users)

  const data = users.map((value) => {
    return value.values
  })

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    )
  }

  return (
    <SideBar>
      <>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            marginBottom: 2
          }}>
          web users
        </Typography>
        <div style={{ height: 400, width: '90%', margin: 'auto' }}>
          <DataGrid
            sx={{
              '.MuiDataGrid-iconButtonContainer': {
                visibility: 'visible'
              },
              '.MuiDataGrid-sortIcon': {
                opacity: 'inherit !important'
              }
            }}
            rows={data}
            columns={columns}
            components={{
              Toolbar: CustomToolbar
            }}
            pagination
            pageSize={5}
            autoHeight
          />
        </div>
      </>
    </SideBar>
  )
}
