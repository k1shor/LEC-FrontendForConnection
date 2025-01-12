import React from 'react'
import { isAuthenticated } from '../api/userAPI'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
    return (
        <>
            {
                (isAuthenticated() && isAuthenticated().user.role == 1) ?
                    <Outlet /> :
                    <Navigate to={'/login'} />
            }
        </>
    )
}

export default AdminRoutes