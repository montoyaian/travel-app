import React from 'react'
import {Navigate ,Outlet} from 'react-router-dom'
import storage from '../Storage/storage'
export const ProtectedRoutes = ({children}) => {
    const authToken=storage.get('token')
    if(!authToken){
        return <Navigate to={"/Login"}/>
    }
    return <Outlet />
}
