import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { loginUser } from "../../auth/actions/userActions";

const LoginPhoneNo = ({ loginUser }) => {
  const navigate = useNavigate() 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data, errors) => {
    console.log(data);
    loginUser(data, errors);
  };

  return (
    <div>
      <div className="form-container ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Email Here"
              className="outline-none w-full mt-1 rounded-md h-[56px] px-5 bg-[#F6F4FF] "
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p className="text-[#e03434] text-sm">Please check the email</p>
            )}

            <label className=" flex justify-between mt-5">
              Password{" "}
              <span className="text-xs text-[#6A52FD]" onClick={()=>navigate('/forgot-password')}>Forgot password?</span>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter Password Here"
              className="w-full outline-none mt-1 rounded-md h-[56px] px-5 bg-[#F6F4FF]"
              {...register("password", {
                required: true,
                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && (
              <p className="text-[#e03434] text-sm">
                Password should begin with caps and contain a number
              </p>
            )}
            <button className=" text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] ">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default (LoginPhoneNo);
