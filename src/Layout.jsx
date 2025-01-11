import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer>
                &copy; Copyright 2024-2025.
            </footer>
        </>
    )
}

export default Layout