import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "../../alert/Alert";
import { useCreateAlertMutation } from "../../services/alertAuthApi";
import { useGetAlertsQuery } from "../../services/alertAuthApi";

function Dashboard() {
  const alertType = [
    "RC Expiry",
    "Permit Expiry",
    "Fitness Expiry",
    "Insurance Expiry",
    "Driving Licence Expiry",
    "Pollution Certificate Expiry",
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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log('clicked')
      if (!alertData.alertName) throw new Error("Alert name is required");
      if (!alertData.alertType) throw new Error("Alert type is required");
      if (!alertData.alertDate) throw new Error("Alert date is required");
      if (!alertData.vehicleNumber)
        throw new Error("Vehicle number is required");

      setAlertData(alertData);
      const response = await createAlert({ alertData, token });
      if (response.data.setAlert.status === true) {
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
      <div className="container mt-5 pt-5">
        <div className="alert alert-success shadow-sm" role="alert">
          <span className="">
            Note :- Create alert with required details and relyNrelax will
            notify you on selected reminder date via call, whatsapp or sms,
            email, etc.
          </span>
        </div>
        <div className="container">
          <div className="row my-2">
            <div className="col-lg-5">
              <div className="card w-100 my-3 shadow">
                <div class="card-header card-header-colour text-light">
                  Your Alerts
                </div>
                <div className="card-body"> 
                  <Alert allAlert={allAlerts} />
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <div class="card border border-0 my-3 shadow">
                <div class="card-header card-header-colour text-light">
                  Create Alerts
                </div>
                <div class="card-body">
                  <div className="container">
                    <form onSubmit={handleSubmit}>
                      <div class="row g-3">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Alert Name" value={alertData.alertName} name='alertName' aria-label="Alert Name" />
                        </div>
                        <div class="col">
                        <select 
                        class="form-select" 
                        aria-label="Default select example"
                        value={alertData.alertType}
                        onChange={(e) =>
                          setAlertData({
                            ...alertData,
                            alertType: e.target.value,
                          })
                        }
                        >
                          {
                            alertType.map((item, index) => {
                              return (
                                <option name='alertType' key={index}>{item}</option>
                              )
                            })
                          }
                        </select>
                        </div>
                        <div class="col-12">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="inputAddress" 
                            name='vehicleNumber' 
                            value={alertData.vehicleNumber}
                            onChange={(e) =>
                              setAlertData({
                                ...alertData,
                                vehicleNumber: e.target.value?.toUpperCase(),
                              })
                            }
                            placeholder="Vehicle Number"/>
                        </div>
                        <div class="col-12">
                          <input 
                            type="date" 
                            class="form-control"  
                            onChange={(date) =>
                            setAlertData({
                              ...alertData,
                              alertDate: date,
                              })
                            } 
                            id="inputAddress" 
                            placeholder="Reminder Date"
                          />
                        </div>
                        <button type="submit" class="custom_button text-light shadow-sm">Create</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
