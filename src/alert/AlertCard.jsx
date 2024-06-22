import React, { useState } from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const AlertCard = ({ alertData, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{alertData.a_name}</h5>
        {!showDetails && (
          <button
            className="btn btn-sm btn-outline-success"
            onClick={toggleDetails}
          >
            Show Details <FaCircleArrowDown />
          </button>
        )}
        {showDetails && (
          <div>
            <p className="card-text">
              <strong>Alert Type:</strong> {alertData.a_type}
              <br />
              <strong>Reminder Date:</strong> {alertData.a_end_date}
              <br />
              <strong>Vehicle Number:</strong> {alertData.a_v_number}
              <br />
              <strong>Status:</strong> {alertData.a_status}
            </p>
            <button
              className="btn btn-sm btn-outline-success me-2"
              onClick={toggleDetails}
            >
              Hide Details <FaCircleArrowUp />
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(alertData._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertCard;
