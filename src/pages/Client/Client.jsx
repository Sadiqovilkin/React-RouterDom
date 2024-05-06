import React from 'react'
import ClientHeader from '../../components/Client/Header/ClientHeader'
import { Outlet } from 'react-router-dom'

const Client = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default Client