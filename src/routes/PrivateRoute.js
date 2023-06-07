import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

function PrivateRoute({ component: Component }) {
  const loggedInUser = useSelector((state) => state.userManagementReducer.loggedInUser)
  return loggedInUser ? (
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

export default PrivateRoute
