import React from "react";
import AlertCard from "./AlertCard";

const Alert = ({ allAlert, onDelete }) => {
  return (
    <>
      {allAlert && allAlert.data && allAlert.data.length > 0 ? (
        <>
          <div className="d-none d-md-block">
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
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(a_data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-md-none">
            {allAlert.data.map((a_data) => (
              <AlertCard
                key={a_data._id}
                alertData={a_data}
                onDelete={onDelete}
              />
            ))}
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Alert;
