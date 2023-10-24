import React from 'react';

const Alert = ({alertData}) => {
    return (
        <div className='card_cont w-50 my-3'>
            <div class="card text-bg-light mb-3">
            <div class="card-header">Name: {alertData.alertName}</div>
            <div class="card-body">
                <h5 class="card-title">Type: {alertData.alertType}</h5>
                <p className="card-text">Reminder date: {alertData.alertDate.toLocaleDateString()}</p>
                <span>Status : Pending</span>
            </div>
            </div>
        </div>
    );
}

export default Alert;
