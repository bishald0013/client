import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "../../alert/Alert";
import { useCreateAlertMutation } from "../../services/alertAuthApi";
import { useGetAlertsQuery } from "../../services/alertAuthApi";

function Dashboard() {
  const selectedAlertType = [
    "Driving Licence Expiry",
    "Fitness Expiry",
    "RC Expiry",
    "Pollution Certificate Expiry",
    "Permit Expiry",
    "Insurance Expiry",
  ];

  const [alertName, setAlertName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [alertType, setAlertType] = useState('');

  const [allAlerts, setAllAlerts] = useState({});
  const [createAlert] = useCreateAlertMutation();
  const token = localStorage.getItem("token");
  const { data, isSuccess } = useGetAlertsQuery(token);

  useEffect(() => {
    if (isSuccess) {
      setAllAlerts(data);
    }
  }, [data, isSuccess]);


  const handleSaveAlert = async () => {
    if (!alertName || !vehicleNumber || !reminderDate || !selectedAlertType) {
      alert('Please fill in all fields');
      return;
    }
    const formattedReminderDate = new Date(reminderDate).toLocaleDateString('en-GB');
    const alertData = {
      alertName,
      vehicleNumber,
      alertDate: formattedReminderDate,
      alertType
    };
    const response = await createAlert({ alertData, token });
    console.log(response);
    if (response.data.setAlert.status === true) {
      alert("Alert Created Successfully");
      window.location.reload();
    } else {
      alert("Fail to create Alert. Please try again");
    }
  };

  return (
    <>
      <div className="container my-5 pt-5">
        <div className="card w-100 shadow border-0">
            <div className="card-header shadow alert-bg-colour">
                <div className="alert" role="alert">
                    <span className="">
                        Note :- Create alert with required details and relyNrelax will
                        notify you on selected reminder date via call, whatsapp or sms,
                        email, etc.
                    </span>
                </div>
            </div>
            <div className="card-body my-4 border-0">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="alert alert-secondary">
                            Your Alert Lists
                        </div>
                        <Alert allAlert={allAlerts} />
                    </div>
                    <div className="col-lg-4">
                        <div className="alert alert-secondary">
                            Create Alert
                        </div>
                        <div className="conatiner">
                            <select
                                    className="form-select mb-3"
                                    aria-label="Select Alert Type"
                                    value={alertType}
                                    onChange={(e) => setAlertType(e.target.value)}
                            >
                                <option value="">Select Alert Type</option>
                                {selectedAlertType.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                                ))}
                            </select>
                            <div className="mb-3">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Alert Name"
                                value={alertName}
                                onChange={(e) => setAlertName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Vehicle number"
                                value={vehicleNumber}
                                onChange={(e) => setVehicleNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="date"
                                className="form-control"
                                placeholder="Reminder Date"
                                value={reminderDate}
                                onChange={(e) => setReminderDate(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-success btn-lg" onClick={handleSaveAlert}>
                                Save Alert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer shadow-sm text-body-success">
                <div className="text-center">
                    <p className="mb-0">&copy; 2024 relynrelax. All rights reserved.</p>

                    <p className="mb-0">
                        Contact us: helpdesk.relynrelax@gmail.com | Phone: +91 9395783957
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
