import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Chat from './ChatSupport'

function General() {
  const path = useLocation()
  return (
    <>
      {' '}
      {path.pathname.includes('dashboard') ? (
        ''
      ) : (
        <>
          <Navbar />
          <Chat />
        </>
      )}
    </>
  )
}

export default General
