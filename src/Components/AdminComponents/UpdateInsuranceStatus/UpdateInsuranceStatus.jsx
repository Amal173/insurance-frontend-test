import React from 'react'
import { useDispatch } from 'react-redux';
import { dispalyChangeStatusModal, displayUpdateWarningModal, getInsurance, updateInsuranceStatus } from '../../../Redux/Slice/InsuranceSlice';
import './UpdateInsuranceStatus.css'

function UpdateInsuranceStatus({ id, status }) {

    const dispatch = useDispatch()

    const HandleCancel = () => {

        dispatch(displayUpdateWarningModal(false))
    }

    const HandleChange = async () => {

        await dispatch(updateInsuranceStatus({ id, status }))
        await dispatch(getInsurance({ query: "" }))
        HandleCancel()
        dispatch(dispalyChangeStatusModal(false))

    }

    return (
        <>
            <div className='update-warning-Modal'>
                <div className="modalFirstRow">
                    <div className="CloseCrossButn" onClick={HandleCancel}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="warningContent">
                    <span>Are You Sure You Want To Update Status ?</span>
                </div>
                <div className="modalButtons">
                    <button className="CancelModal" onClick={HandleCancel}>Cancel</button>
                    <button className="DeleteModal" onClick={HandleChange} >Confirm</button>
                </div>
            </div>
            <div className='overlay'></div>
        </>
    )
}

export default UpdateInsuranceStatus