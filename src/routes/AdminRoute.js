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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
            }}>
            <CircularProgress color="error" />
          </div>
        </>
      }>
      <Component />
    </Suspense>
  ) : (
    <Navigate to="/" />
  )
}

export default AdminRoute
