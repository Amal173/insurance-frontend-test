import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInsuranceType } from '../../../Redux/Slice/InsuranceSlice';
import './PolicyCards.css'

function PolicyCards() {

    const dispatch = useDispatch()
    const { insuranceType } = useSelector((state) => state.insurance)

    useEffect(() => {
        dispatch(getInsuranceType())
    }, [dispatch])


    return (
        <div className='policy-cards'>
            {insuranceType.insuranceTypes && insuranceType.insuranceTypes.map((data) => (
                <div className="card" key={data._id}>
                    <div className="card-details">
                        <h2>{data.insuranceName}</h2>
                        <h3>₹{data.Amount}</h3>
                        <ul>
                            {data?.InsuranceDetails?.map((details) => (
                                <li>{details}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PolicyCards