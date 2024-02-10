import React, {useState, useEffect} from 'react'
import DisplayAllUser from './DisplayAllUser'
import {useGetAllAlertsQuery } from '../services/userAuthApi'; 

function AdminDashboard() {
  const {data, isSuccess} = useGetAllAlertsQuery();
  const [alert, setAlert] = useState([]);

  useEffect(() => {
   setAlert(data);
  }, [data, isSuccess]);

  return (
    <div className='my-5'>
      <div className="admin-table pt-5">
        <DisplayAllUser alertData={alert}/>
      </div>
    </div>
  )
}

export default AdminDashboard