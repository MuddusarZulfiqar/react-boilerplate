import React from 'react'
import { Outlet } from 'react-router'

function PublicLayout() {
  return (
    <div>
        PublicLayout
        <Outlet />
        {/* This Outlet will render the child routes of the public layout */}
    </div>
  )
}

export default PublicLayout