import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "../../alert/Alert";
import { useCreateAlertMutation } from "../../services/alertAuthApi";
import { useGetAlertsQuery } from "../../services/alertAuthApi";

function Dashboard() {
  const alertType = [
    "Driving Licence Expiry",
    "Fitness Expiry",
    "RC Expiry",
    "Pollution Certificate Expiry",
    "Permit Expiry",
    "Insurance Expiry",
  ];

  // State for alert form data
  const [alertData, setAlertData] = useState({
    alertName: "",
    alertType: "",
    vehicleNumber: "",
    alertDate: null,
  });

  // State for displaying the alert data once submitted
  const [createAlert] = useCreateAlertMutation();
  const [allAlerts, setAllAlerts] = useState({});
  const token = localStorage.getItem("token");
  const { data, isSuccess } = useGetAlertsQuery(token);

  useEffect(() => {
    if (isSuccess) {
      setAllAlerts(data);
    }
  }, [data, isSuccess]);

  console.log(alertData);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!alertData.alertName) throw new Error("Alert name is required");
      if (!alertData.alertType) throw new Error("Alert type is required");
      if (!alertData.alertDate) throw new Error("Alert date is required");
      if (!alertData.vehicleNumber)
        throw new Error("Vehicle number is required");

      setAlertData(alertData);

      const response = await createAlert({ alertData, token });
      if (response.data?.setAlert.status === true) {
        alert("Alert Created Successfully");
        window.location.reload();
      } else {
        alert("Fail to create Alert. Please try again");
      }
    } catch (error) {
      alert(error?.message);
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="alert alert-primary" role="alert">
          <span className="">
            Note :- Create alert with required details and Rely N Relax will
            notify you on selected reminder date via call, whatsapp or sms,
            email, etc.
          </span>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 my-5 px-5">
            <span className="">Your Alerts</span>
            <div className="row row-cols-1 row-cols-lg-2">
              <Alert allAlert={allAlerts} />
            </div>
          </div>
          <form className="col-lg-6 jumbotron" onSubmit={handleSubmit}>
            <h3 className="mb-3 bg bg-primary w-100 text-center p-2 text-light">
              Create Alert
            </h3>
            <div className="mb-3">
              <label htmlFor="reminderDate" className="form-label">
                Reminder Date
              </label>
              <div className="col ">
                <DatePicker
                  id="reminderDate"
                  selected={alertData.alertDate}
                  onChange={(date) =>
                    setAlertData({
                      ...alertData,
                      alertDate: date,
                    })
                  }
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                  placeholderText="Select Reminder Date"
                />
              </div>
            </div>
            <div className="alert_form mb-4">
              <div className="mb-3">
                <label htmlFor="alertName" className="form-label">
                  Alert Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alertName"
                  placeholder="Enter Alert Name"
                  name="alertName"
                  aria-label="Alert name"
                  value={alertData.alertName}
                  onChange={(e) =>
                    setAlertData({
                      ...alertData,
                      alertName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="vehicleNumber" className="form-label">
                  Vehicle Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="vehicleNumber"
                  placeholder="Enter Vehicle Number"
                  name="vehicleNumber"
                  aria-label="Vehicle number"
                  value={alertData.vehicleNumber}
                  onChange={(e) =>
                    setAlertData({
                      ...alertData,
                      vehicleNumber: e.target.value?.toUpperCase(),
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="alertType" className="form-label">
                  Alert Type
                </label>
                <select
                  id="alertType"
                  name="alertType"
                  className="form-select"
                  value={alertData.alertType}
                  onChange={(e) =>
                    setAlertData({
                      ...alertData,
                      alertType: e.target.value,
                    })
                  }
                >
                  <option value="">Select Alert Type</option>
                  {alertType.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Alert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
