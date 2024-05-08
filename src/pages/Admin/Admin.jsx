import React, { useEffect } from 'react'
import AdminHeader from '../../components/Admin/Header/AdminHeader'
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { getAll } from '../../API/reguest';
import useLocalStorage from "../../hooks/useLocalStorage";


const Admin = () => {
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const[localAdminID, setLocalAdminID] = useLocalStorage('adminID', null);
  const navigate = useNavigate();
  const localID = JSON.parse(localStorage.getItem('adminID'));
  const [adminID, setAdminID] = useState(localID ? localID : null);

  useEffect(() => {
    getAll("users").then((resp) => {
      setUsers(resp.data);
    });
    getAll("countries").then((resp)=>{
      setCountries(resp.data);
    })
    if (adminID===null) {
      navigate('/admin/login');
    }
  }, [adminID]);
  return (
    <>
    <AdminHeader adminID={adminID} setAdminID={setAdminID} setLocalAdminID={setLocalAdminID}/>
    <Outlet context={[users, setAdminID, setLocalAdminID, countries, setCountries]} />
    </>
  )
}

export default Admin