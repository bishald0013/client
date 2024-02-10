import React from 'react';
import { format } from 'date-fns';

const DisplayAllUser = ({alertData}) => {
    return (
        <div>
            <table class="table table-success table-striped">
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
                                <button className='btn btn-primary'>
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
