import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { getCarDetails } from '../../redux/actions'
import { CircularProgress } from '@mui/material'
const AdminCars = () => {
  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  if (isLoading) {
    return <CircularProgress color="error" />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const rows = data.map((car) => {
    return [
      car.car_id,
      car.price.originalPrice,
      car.price.discountedPrice,
      car.carName,
      car.description
    ]
  })
  const columns = [
    {
      name: 'Id',
      options: {
        filter: true
      }
    },
    {
      name: 'Original Price',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'Discounted Price',
      options: {
        filter: true
      }
    },
    {
      name: 'Car Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Description',
      options: {
        filter: true
      }
    },
    {
      name: 'Action',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: () => {
          return (
            <>
              <div className="d-flex">
                <button className="custom-table-btn">Edit</button>
                <button className="custom-table-btn">Delete</button>
              </div>
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
    selectableRows: 'none'
  }

  return (
    <SideBar>
      <MUIDataTable title={'Cars List'} data={rows} columns={columns} options={options} />
    </SideBar>
  )
}

export default AdminCars
