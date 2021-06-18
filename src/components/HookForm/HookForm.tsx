import React, { useEffect, useState } from 'react';
import './HookForm.css';
import {useForm} from 'react-hook-form';
import { getDates, getYears, heights, months, postedBy } from '../constants';


interface FormFileds {
    firstName:string
    lastName:string
    mobileNo:string
    email:string
    password:string
    day:number
    month:string
    year:string
    height:string,
    gender:string
    complexion:string
    profilePostedBy:string
    reference:string
}

const HookForm = () => {
    const { register , handleSubmit , formState:{errors} } = useForm<FormFileds>()
    const [dates ,setDates] = useState<number[]>()
    const [years ,setYears] = useState<number[]>()
    const [formData,setFormData]=useState<FormFileds>()
    const [submittingForm,setSubmittingForm]=useState<boolean>(false)

    const formSubmit = (data:FormFileds):void =>{
         setFormData(data)
         if(!formData){
            setSubmittingForm(true)
         }else{
            setSubmittingForm(false)
         }

         console.log(data);
         
    }

    useEffect(()=>{
        setYears(getYears(new Date().getFullYear() - 20))
       setDates(getDates(31))
    },[])

    console.log("errors", errors);
    return (
        <div className="hookform__wrapper">
            <h1 className="hookform__title">React-Hook-Form</h1>
             <form className="hookform__form-wrapper" onSubmit={handleSubmit(formSubmit)}>

            <div className="flex">
           
            <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">First Name</label>
                  <input type="text" className="hookform__form-input" {...register("firstName",{required:"Enter your first name"})}/>
                  {errors?.firstName?.message && <p className="form__errorText">{errors?.firstName?.message}</p>}
             </div>
             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Last Name</label>
                  <input type="text" className="hookform__form-input" {...register("lastName",{required:"Enter your last name"})}/>
                  {errors?.lastName?.message && <p className="form__errorText">{errors?.lastName?.message}</p>}
            </div>

            </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Mobile No</label>
                  <input type="number" className="hookform__form-input" {...register("mobileNo",{required:"Enter your Mobile No",maxLength:{value:10,message:"Mobile No should not exceed more than 10 digits"}})}/>
                  {errors?.mobileNo?.message && <p className="form__errorText">{errors?.mobileNo?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Email</label>
                  <input type="email" className="hookform__form-input" {...register("email",{required:"Enter your email"})}/>
                  {errors.email?.message && <p className="form__errorText">{errors.email?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Password</label>
                  <input type="Password" className="hookform__form-input" {...register("password",{required:"Enter your password",minLength:{value:8,message:"Password should be more than 8 characters"}})}/>
                  {errors.password?.message && <p className="form__errorText">{errors.password?.message}</p>}
             </div>

             {/* dropdown menus for dates */}
             <div className="flex">
             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Day</label>
                  <select className="hookform__form-input"  {...register("day",{ required:"Enter Day"})}>
                  <option hidden value="">Day</option>
                     {dates?.map((date,index)=>(
                       <option value={date} key={index}>{date}</option>
                      ))}
            
                 </select>
                 {errors.day?.message && <p className="form__errorText">{errors.day?.message}</p>}
             </div>
             
             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Month</label>
                  <select className="hookform__form-input" {...register("month",{ required:"Choose Month"})}>
                  <option hidden value="">Month</option>
                     {months?.map((month,index)=>(
                       <option value={month} key={index}>{month}</option>
                      ))}
            
                 </select>
                 {errors.month?.message && <p className="form__errorText">{errors.month?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Year</label>
                  <select className="hookform__form-input" {...register("year",{ required:"Choose Year"})}>
                  <option hidden value="">Year</option>
                     {years?.map((year,index)=>(
                       <option value={year} key={index}>{year}</option>
                      ))}
            
                 </select>
                 {errors.year?.message && <p className="form__errorText">{errors.year?.message}</p>}
             </div>
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Height</label>
                  <select  className="hookform__form-input" {...register("height",{ required:"Choose Height"})}>
                  <option hidden value="">Select Height</option>
                     {heights?.map((height,index)=>(
                       <option value={height} key={index}>{height}</option>
                      ))}    
                 </select>
                 {errors.height?.message && <p className="form__errorText">{errors.height?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Gender</label>
                  <select className="hookform__form-input" {...register("gender",{ required:"Choose Gender"})}>
                  <option hidden value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                 </select>
                 {errors.gender?.message && <p className="form__errorText">{errors.gender?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Complexion</label>
                  <select  className="hookform__form-input" {...register("complexion",{ required:"Choose complexion"})}>
                  <option hidden value="">Complexion</option>
                  <option value="Wheatish Brown">Wheatish Brown</option>
                  <option value="Wheatish Fair">Wheatish Fair</option>
                  <option value="Fair">Fair</option>
                  <option value="Very Fair">Very Fair</option>
                 </select>
                 {errors.complexion?.message && <p className="form__errorText">{errors.complexion?.message}</p>}
             </div>

             <div className="hookform__form-inputWrapper ">
                  <label className="hookform__form-label">Profile Posted By</label>
                  <select className="hookform__form-input" {...register("profilePostedBy",{ required:"Choose Profile Posted By"})}>
                  <option hidden value=""> Select Profile Posted By</option>
                     {postedBy?.map((posted,index)=>(
                       <option value={posted} key={index}>{posted}</option>
                      ))}    
                 </select>
                 {errors.profilePostedBy?.message && <p className="form__errorText">{errors.profilePostedBy?.message}</p>}
             </div>
             
             {
                 submittingForm ? 
                 <button type="submit" className="hookform__form-button disabled" disabled>Profile Created</button>
                     :
                 <button type="submit" className="hookform__form-button">Create Profile</button>
             }

             <div>
             </div>

            </form>


            {formData && <h3 className="form__data">{JSON.stringify(formData)}</h3>}
        </div>
    )
}

export default HookForm
