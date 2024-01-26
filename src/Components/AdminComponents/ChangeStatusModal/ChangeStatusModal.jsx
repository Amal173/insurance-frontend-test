import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispalyChangeStatusModal, displayUpdateWarningModal } from '../../../Redux/Slice/InsuranceSlice';
import UpdateInsuranceStatus from '../UpdateInsuranceStatus/UpdateInsuranceStatus';
import './ChangeStatusModal.css'


function ChangeStatusModal({ id }) {

    const dispatch = useDispatch()
    const [status, setStatus] = useState()
    const { ShowUpdateWarningModal } = useSelector((state) => state.insurance);

    const handleStatusPending = (id) => {

        dispatch(displayUpdateWarningModal(true))
        setStatus("pending")
    };

    const handleStatusApproved = () => {

        dispatch(displayUpdateWarningModal(true))
        setStatus("Approved")
    };

    const handleStatusCompleted = () => {

        dispatch(displayUpdateWarningModal(true))
        setStatus("completed")
    };

    const handleClose = () => {

        dispatch(dispalyChangeStatusModal(false))
    }


    return (
        <>
            <div className='overlay'></div>
            <div className="ThreeDotResponsebun" >
                <i class="fa-solid fa-xmark" onClick={() => handleClose()}></i>
                <div className="modal-title">
                    <h2>Change Status</h2>
                </div>
                <div className="View-details" onClick={() => handleStatusPending(id)}>
                    <i class="fa-solid fa-clock"></i>
                    <span>Pending</span>
                </div>

                <div className="status-aprove" onClick={() => handleStatusApproved(id)}>
                    <i className="fa-solid fa-pencil"></i>
                    <span>Approve</span>
                </div>

                <div className="status-complete" onClick={() => handleStatusCompleted(id)}>
                    <i class="fa-solid fa-check"></i>
                    <span>Completed</span>
                </div>
                {ShowUpdateWarningModal && <UpdateInsuranceStatus status={status} id={id} />}
            </div>
        </>
    );
}

export default ChangeStatusModal;
