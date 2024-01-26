import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispalyChangeStatusModal, getInsurance } from '../../../Redux/Slice/InsuranceSlice';
import ChangeStatusModal from '../ChangeStatusModal/ChangeStatusModal';
import './StatusTabs.css';

function StatusTabs({ status }) {

    const dispatch = useDispatch();
    const [id, setId] = useState()
    const { insurance, ShowChangeStatusModal } = useSelector((state) => state.insurance);

    useEffect(() => {
        dispatch(getInsurance());
    }, [dispatch]);


    const handleClick = (_id) => {

        setId(_id)
        dispatch(dispalyChangeStatusModal(true))
    }

    return (
        <div className='status-tabs'>
            <div className="cards">
                <div className='title'>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Age</p>
                    <p>status</p>
                    <p>actions</p>
                </div>
                {insurance.insurances
                    ?.filter((proposal) => proposal.status === status)
                    ?.map((proposal) => (
                        <div key={proposal._id} className="proposal-card">
                            <p>{proposal.Name}</p>
                            <p>{proposal.Email}</p>
                            <p>{proposal.phone}</p>
                            <p>{proposal.age}</p>
                            <p>{proposal.status}</p>
                            <i class="fa-solid fa-ellipsis" onClick={() => handleClick(proposal._id)}></i>
                        </div>
                    ))}
                {ShowChangeStatusModal && <ChangeStatusModal id={id} />}
            </div>
        </div>
    );
}

export default StatusTabs;
