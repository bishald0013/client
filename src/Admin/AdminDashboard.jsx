import React from 'react'
import MyTabs from './MyTabs';

function AdminDashboard() {
  return (
    <div className='my-5'>
      <div className="admin-table pt-5">
        <div className="container mx-auto my-3">
          <MyTabs/>
        </div>
          {/* <DisplayAllUser alertData={data}/> */}
      </div>
    </div>
  )
}

export default AdminDashboard