import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createInsurance, dispalyForm, getInsurance, getInsuranceType } from '../../../Redux/Slice/InsuranceSlice';
import './InsuranceForm.css'

function InsuranceForm() {

    const dispatch = useDispatch()
    const { insuranceType } = useSelector((state) => state.insurance)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    useEffect(() => {
        dispatch(getInsuranceType())
    }, [dispatch])


    const onSubmit = async (data) => {

        await dispatch(createInsurance(data))
        await dispatch(getInsurance({ query: '' }))
        reset();
        dispatch(dispalyForm(false))
    }

    return (
        <div className="form-container">
            <div className='insurance-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label>Salutation</label>
                        <select {...register("Salutation")}>
                            <option value="" >
                                Select option
                            </option>
                            <option value="mr">Mr</option>
                            <option value="ms">Ms</option>
                        </select>
                        <p className="error-message">{errors.Salutation?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>Name</label >
                        <input
                            type="text"
                            name="Name"
                            {...register("Name", {
                                required: "name is required.",
                            })}
                        />
                        <p className="error-message">{errors.Name?.message}</p>
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
                        <p className="error-message">{errors.Email?.message}</p>
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
                        <p className="error-message">{errors.phone?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>gender</label>
                        <select {...register("Gender")}>
                            <option value="" >
                                Select option
                            </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        <p className="error-message">{errors.Gender?.message}</p>
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
                        <p className="error-message">{errors.dob?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>Address</label>
                        <textarea
                            type="text"
                            name="Address"
                            {...register("Address", {
                                required: "Address is required.",
                            })}
                        />
                        <p className="error-message">{errors.Address?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>Qualifications</label>

                        <div className='qualification-input'>
                            <div className='row'>
                                <p> Masters</p>
                                <input
                                    type="checkbox"
                                    name="Qualifications"
                                    value="Masters"
                                    {...register("Qualifications", {
                                        required: "Qualifications is required.",
                                    })}
                                />
                                <p>  +2</p>
                                <input
                                    type="checkbox"
                                    name="Qualifications"
                                    value="+2"
                                    {...register("Qualifications", {
                                        required: "Qualifications is required.",
                                    })}
                                />
                            </div>
                            <div className="row">
                                <p>  Degree</p>
                                <input
                                    type="checkbox"
                                    name="Qualifications"
                                    value="Degree"
                                    {...register("Qualifications", {
                                        required: "Qualifications is required.",
                                    })}
                                />
                                <p> 10th</p>
                                <input
                                    type="checkbox"
                                    name="Qualifications"
                                    value="10th"
                                    {...register("Qualifications", {
                                        required: "Qualifications is required.",
                                    })}
                                />
                            </div>
                        </div>
                        <p className="error-message">{errors.Qualifications?.message}</p>
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
                        <p className="error-message">{errors.Profession?.message}</p>
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
                        <p className="error-message">{errors.Nominee?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>Relationship with Nominee</label>
                        <select {...register("RelationshipwithNominee")}>
                            <option value="" >
                                Select option
                            </option>
                            <option value="father">father</option>
                            <option value="mother">mother</option>
                            <option value="wife">wife</option>
                            <option value="husband">husband</option>
                        </select>
                        <p className="error-message">{errors.RelationshipwithNominee?.message}</p>
                    </div>
                    <div className="form-control">
                        <label>Insurance Type</label>
                        <div className="select-radio">
                            {insuranceType.insuranceTypes?.map((data) => (
                                <div className='radio-btn' key={data._id}>

                                    <p>{data.insuranceName}</p>
                                    <input
                                        type="radio"
                                        value={data.insuranceName}
                                        name="InsuranceType"
                                        {...register("InsuranceType", {
                                            required: "Insurance is required.",
                                        })}
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="error-message">{errors.InsuranceType?.message}</p>
                    </div>
                    <div className="form-control">
                        <label></label>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InsuranceForm