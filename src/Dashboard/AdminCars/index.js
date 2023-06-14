import React, { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { getCarDetails } from '../../redux/actions'
import { CircularProgress } from '@mui/material'
import CarEdit from './CarEdit'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddCar from './AddCar'

const AdminCars = () => {
  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)
  const dispatch = useDispatch()
  const [model, setModel] = useState(false)
  const [addmodel, setAddModel] = useState(false)

  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  const handleAddModal = () => {
    setAddModel(false)
  }
  const handleModalClose = () => {
    setModel(false)
  }

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
        sort: true,
        setCellProps: () => ({ style: { width: '150px' } })
      }
    },
    {
      name: 'Discounted Price',
      options: {
        filter: true,
        setCellProps: () => ({ style: { width: '200px' } })
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
                <button className="custom-table-btn" onClick={() => setModel(!model)}>
                  Edit
                </button>
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
    selectableRows: 'none',
    rowsPerPageOptions: [5, 10, 20],
    rowsPerPage: 5
  }

  return (
    <>
      <SideBar>
        <Button
          variant="contained"
          sx={{ marginBottom: '8px' }}
          onClick={() => setAddModel(!addmodel)}>
          <AddIcon />
          Add New Car
        </Button>
        <MUIDataTable title={'Cars List'} data={rows} columns={columns} options={options} />
        {model && <CarEdit onClose={handleModalClose} />}
        {addmodel && <AddCar onClose={handleAddModal} />}
      </SideBar>
    </>
  )
}

export default AdminCars
