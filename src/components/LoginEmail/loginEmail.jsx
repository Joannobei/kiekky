import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/features/authSlice";

const LoginEmail = () => {
  const login = () => {
    localStorage.setItem("user", "test");
  };
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  console.log(user, isError);

  const onSubmit = (data) => {
    let userdata = {
      email: data.email,
      password: data.password,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      grant_type: process.env.REACT_APP_GRANT_TYPE,
    };

    dispatch(login(userdata));
  };

  useEffect(() => {
    if (isError) {
      // toast.error(message)
    }
    if (isSuccess) {
      navigate("/home");
    }
  });

  return (
    <div>
      <div className="form-container ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              className={`text-[#e03434] text-center mb-5 ${
                errorMsg ? "errmsg" : "offscreen"
              }`}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter here"
              className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="text-[#e03434] text-sm">Please check your email</p>
            )}

            <label className=" flex justify-between mt-5">
              Password
              <span
                className="text-xs text-[#6A52FD]"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </span>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter here"
              className="w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-[#e03434] text-sm">
                Please check your password
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

export default LoginEmail;
