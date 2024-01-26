import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInsurance } from '../../../Redux/Slice/InsuranceSlice'
import InsuranceForm from '../../UserComponents/InsuranceForm/InsuranceForm'
import AdminHeader from '../AdminHeader/AdminHeader'
import StatusTabs from '../StatusTabs/StatusTabs'
import './AdminDashbord.css'


function AdminDashbord() {

    const dispatch = useDispatch()
    const [status, setStatus] = useState('pending');
    const { ShowCustomerDetailsForm } = useSelector((state) => state.insurance)

    useEffect(() => {
        dispatch(getInsurance({ query: "" }))
    }, [dispatch])


    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    return (
        <div className='admin-dashbord'>
            <AdminHeader />
            <div className="container">
                <div className="status-buttons">
                    <button
                        className={status === 'pending' ? 'active' : ''}
                        onClick={() => handleStatusChange('pending')}
                    >
                        Pending
                    </button>
                    <button
                        className={status === 'Approved' ? 'active' : ''}
                        onClick={() => handleStatusChange('Approved')}
                    >
                        Approved
                    </button>
                    <button
                        className={status === 'completed' ? 'active' : ''}
                        onClick={() => handleStatusChange('completed')}
                    >
                        Completed
                    </button>
                </div>
                <StatusTabs status={status} />
                <div className='add-customer-form'>
                    {ShowCustomerDetailsForm && <InsuranceForm />}
                </div>
            </div>
        </div>
    )
}

export default AdminDashbord