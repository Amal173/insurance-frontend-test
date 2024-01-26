import React from 'react'
import InsuranceForm from '../InsuranceForm/InsuranceForm'
import UserHeader from '../UserHeader/UserHeader';
import PolicyCards from '../PolicyCards/PolicyCards';
import './UserDashbord.css'

function UserDashbord() {

    return (
        <div className='user-dashbord'>
            <UserHeader />
            <PolicyCards />
            <h3>Apply Insurance</h3>
            <InsuranceForm />
        </div>
    )
}

export default UserDashbord