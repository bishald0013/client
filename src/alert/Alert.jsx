import React from "react";

const Alert = ({ allAlert }) => {
  return (
    <>
      {allAlert && allAlert.data && allAlert.data.length > 0 ? (
        <table className="table table-secondary table-striped rounded shadow-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Alert Type</th>
              <th>Reminder Date</th>
              <th>Vehicle Number</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allAlert.data.map((a_data) => (
              <tr key={a_data._id}>
                <td>{a_data.a_name}</td>
                <td>{a_data.a_type}</td>
                <td>{a_data.a_end_date}</td>
                <td>{a_data.a_v_number}</td>
                <td>{a_data.a_status}</td>
                <td><button className="btn btn-danger" disabled>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Alert;
