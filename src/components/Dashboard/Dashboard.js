import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Alert from '../../alert/Alert';
import { useCreateAlertMutation } from '../../services/alertAuthApi';
import { useGetAlertsQuery } from '../../services/alertAuthApi';

function Dashboard() {

  const alertType = ['Driving Licence', 'Fitness Expiry', 'RC Expiry', 'Pucc expiry Reminder']
  const [selectedDate, setSelectedDate] = useState(null)
  const [alertData, setAlertData] = useState(null)
  const [createAlert] = useCreateAlertMutation()

  const [allAlerts, setAllAlerts] = useState({})

  const token = localStorage.getItem('token');

  const {data, isSuccess} = useGetAlertsQuery(token);

  useEffect(() => {
    if(isSuccess){
      setAllAlerts(data);
    }
  }, [data, isSuccess])


  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const alertData = {
      alertName: formData.get('alertName'),
      alertType: formData.get('alertType'),
      vehicleNumber: formData.get('vehicleNumber'),
      alertDate: selectedDate,
    }

    if(!alertData.alertName) throw new Error('Alert name is required');
    if(!alertData.alertType) throw new Error('Alert type is required');
    if(!alertData.alertDate) throw new Error('Alert date is required');
    if(!alertData.vehicleNumber) throw new Error('Vehicle number is required');

    setAlertData(alertData);

    const response = await createAlert({alertData, token});
    console.log(response, alertData);

  }

  return (
    <>
     <div className='main_container'>
        <div className='row my-5'>
        <div className='col-lg-6 my-5'>
          <span className='me-3'>Your Alerts</span>
          <div className="row row-cols-1 row-cols-lg-2">
            <Alert allAlert={allAlerts} />
          </div>
        </div>

            <form className='col-lg-6 my-5' onSubmit={handleSubmit}>
              <div className=''>
                  <span className='me-3'>Create Alert</span>
                  <div className='alert_form my-4'>
                    <div className="col  my-3">
                        <input type="text" className="form-control" placeholder="Alert name" name='alertName' aria-label="Alert name" />
                    </div>
                    <div className="col  my-3">
                        <input type="text" className="form-control" placeholder="Vehicle number" name='vehicleNumber' aria-label="Vehicle name" />
                    </div>
                    <div className="col  my-3">
                      <select id="" name='alertType' className="form-select">
                      {
                          alertType.map((item, index) => {
                            return (
                              <option name='alertType' key={index}>{item}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    
                    <div className="col  my-3">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className='form-control'
                        placeholderText="Select Reminder Date"
                      />
                    </div>
                    {/* <div className="col my-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="smsCheckbox" name="smsReminder" />
                        <label className="form-check-label" htmlFor="smsCheckbox">
                          Remind me via SMS
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="emailCheckbox" name="emailReminder" />
                        <label className="form-check-label" htmlFor="emailCheckbox">
                          Remind me via Email
                        </label>
                      </div>
                    </div> */}
                  </div>
                  <button type="submit" className="btn btn-primary">Create Alert</button>
              </div>
            </form>
        </div>
        
     </div>
      <div className="alert alert-danger" role="alert">
          <span className=''> Note :- Create a alert with required details and relyNess will notified you on the selected Reminder Date via SMS an Email  
          </span>
      </div>
    </>
  )
}

export default Dashboard