import React from 'react'

function AdminDashboard() {
  return (
    <div className='my-5'>
      <div className="admin-table pt-5">
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th className='text-center'>Name</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Type</th>
              <th className='text-center'>Reminder Data</th>
              <th className='text-center'>Send Reminder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'>Bishal Deb</td>
              <td className='text-center'>Bishal Deb</td>
              <td className='text-center'>Bishal Deb</td>
              <td className='text-center'>Bishal Deb</td>
              <td className='text-center'>Bishal Deb</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard