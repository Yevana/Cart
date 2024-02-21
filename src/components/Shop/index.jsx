import React from 'react'
import { Outlet } from 'react-router-dom'
import MyBreadcrumb from '../../utilities/MyBreadcrumb'

function ShopLayout() {
    return (
        <>
            <MyBreadcrumb />
            <Outlet />
        </>
    )
}

export default ShopLayout