import React from 'react';
import { format } from 'date-fns';
import { useSendAlertsMutation } from '../services/alertAuthApi';

const DisplayAllUser = ({ alertData }) => {
    console.log(alertData)
    const [sendAlerts] = useSendAlertsMutation()
    if (!alertData || !Array.isArray(alertData) || alertData.length === 0) {
        return <div>No data available</div>;
    }

    const sendAlert = async(userData) => {
        const res = await sendAlerts({userData});
        if(res.data.status === true){
            alert(res.data.message)
        }else{
            alert(res.data.message)
        }
    }

    return (
        <div>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th className='text-center'>User Name</th>
                        <th className='text-center'>Reminder Date</th>
                        <th className='text-center'>Reminder Status</th>
                        <th className='text-center'>Reminder Type</th>
                        <th className='text-center'>Vehicle Number</th>
                        <th className='text-center'>Send Reminder</th>
                    </tr>
                </thead>
                <tbody>
                    {alertData.map((data, index) => (
                        <tr key={index}>
                            <td className='text-center'>{data.a_created_by}</td>
                            <td className='text-center'>{format(new Date(data.a_end_date), 'yyyy-MM-dd HH:mm:ss')}</td>
                            <td className='text-center'>{data.a_status}</td>
                            <td className='text-center'>{data.a_type}</td>
                            <td className='text-center'>{data.a_v_number}</td>
                            <td className='text-center'>
                                <button className='btn btn-primary' onClick={() => sendAlert(data._id)}>
                                    Send
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAllUser;
