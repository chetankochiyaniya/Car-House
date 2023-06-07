import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminRoute({ component: Component }) {
  const adminRole = useSelector((state) => state.userManagementReducer.adminRole)
  return adminRole ? (
    <Suspense
      fallback={
        <>
          <CircularProgress color="error" />
        </>
      }>
      <Component />
    </Suspense>
  ) : (
    <Navigate to="/" />
  )
}

export default AdminRoute
