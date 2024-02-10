import React from 'react'
import DisplayAllUser from './DisplayAllUser'
import {useGetAllAlertsQuery } from '../services/userAuthApi'; 

function AdminDashboard() {
  const {data} = useGetAllAlertsQuery();
  return (
    <div className='my-5'>
      <div className="admin-table pt-5">
        <DisplayAllUser alertData={data}/>
      </div>
    </div>
  )
}

export default AdminDashboard