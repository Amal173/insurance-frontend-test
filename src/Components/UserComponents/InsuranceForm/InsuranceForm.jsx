import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createInsurance, getInsurance } from '../../../Redux/Slice/InsuranceSlice';
import { useForm } from 'react-hook-form';
function InsuranceForm() {
    const dispatch = useDispatch()
    const { insurance } = useSelector((state) => state.insurance)
    console.log(insurance);
    useEffect(() => {
        dispatch(getInsurance())
    }, [dispatch])


    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        dispatch(createInsurance(data))
    }

    return (
        <div className='insurance-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Salutation</label>
                    <select {...register("Salutation")}>
                        <option value="" >
                            Select option
                        </option>
                        <option value="mr">mr</option>
                        <option value="ms">ms</option>
                    </select>

                </div>
                <div className="form-control">
                    <label>Name</label>
                    <input
                        type="text"
                        name="Name"
                        {...register("Name", {
                            required: "name is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        name="Email"
                        {...register("Email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid."
                            }
                        })}
                    />

                </div>
                <div className="form-control">
                    <label>phone</label>
                    <input
                        type="text"
                        name="phone"
                        {...register("phone", {
                            required: "phone is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>gender</label>
                    <select {...register("gender")}>
                        <option value="" >
                            Select option
                        </option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>


                </div>
                <div className="form-control">
                    <label>date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        {...register("dob", {
                            required: "dob is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input
                        type="text"
                        name="Address"
                        {...register("Address", {
                            required: "Address is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Qualifications</label>
                    <input
                        type="text"
                        name="Qualifications"
                        {...register("Qualifications", {
                            required: "Qualifications is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Profession</label>
                    <input
                        type="text"
                        name="Profession"
                        {...register("Profession", {
                            required: "Profession is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Nominee</label>
                    <input
                        type="text"
                        name="Nominee"
                        {...register("Nominee", {
                            required: "Nominee is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label>Relationship with Nominee</label>
                    <input
                        type="text"
                        name="RelationNominee"
                        {...register("RelationNominee", {
                            required: "RelationNominee is required.",

                        })}
                    />


                </div>
                <div className="form-control">
                    <label>Insurance Details</label>
                    <input
                        type="text"
                        name="Insurance"
                        {...register("Insurance", {
                            required: "Insurance is required.",

                        })}
                    />

                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default InsuranceForm