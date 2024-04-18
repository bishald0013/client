import React from "react";

const Alert = ({ allAlert }) => {
  return (
    <>
      {allAlert && allAlert.data && allAlert.data.length > 0 ? (
        allAlert.data.map((a_data) => (
          <div
            className="card_cont my-3"
            key={a_data._id}
            style={{
              width: "100%",
            }}
          >
            <div className="card text-bg-light mb-3">
              <div className="card-header">Name: {a_data.a_name}</div>
              <div className="card-body">
                <h5 className="card-title">Type: {a_data.a_type}</h5>
                <p className="card-text">
                  Reminder date:{" "}
                  {new Date(a_data.a_end_date).toLocaleDateString()}
                </p>
                <p className="card-text">Vehicle number: {a_data.a_v_number}</p>
                <span>Status: {a_data.a_status}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Alert;
