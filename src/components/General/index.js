import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Chat from './ChatSupport'
import { useSelector } from 'react-redux'

function General() {
  const path = useLocation()
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)
  return (
    <>
      {' '}
      {path.pathname.includes('dashboard') ? (
        ''
      ) : (
        <>
          <Navbar />
          {loggedInUser && loggedInUser[0]?.values.email === 'admin@gmail.com' ? '' : <Chat />}
        </>
      )}
    </>
  )
}

export default General
