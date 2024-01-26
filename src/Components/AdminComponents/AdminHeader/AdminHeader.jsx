import React from 'react'
import { useDispatch } from 'react-redux'
import { dispalyForm, getInsurance } from '../../../Redux/Slice/InsuranceSlice'
import './AdminHeader.css'

function AdminHeader() {

    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(dispalyForm(true))
    }

    const handleCloseForm = () => {

        dispatch(dispalyForm(false))
    }

    const handleSearch = ({ query }) => {

        dispatch(getInsurance({ query }))
    }

    return (
        <header>
            <div className='container'>
                <div className="admin-header">
                    <div className="brand-logo">
                        <h1>Insurance</h1>
                    </div>
                    <input type="search" placeholder='search' onChange={event => handleSearch({ query: event.target.value.trim() })} />
                    <div className='buttons'>
                        <button onClick={() => handleClick()}>Add Customer</button>
                        <button onClick={() => handleCloseForm()}>close Form</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader