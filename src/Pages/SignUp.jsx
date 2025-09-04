import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify"; 

const SignUp = () => {
  const { userdata, setUserData ,setCurrentUser } = useContext(recipecontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setUserData([...userdata, data]);
    setCurrentUser(data);
    reset();
    navigate("/");
    toast.success("Signed Up successfully!");
  };

  return (
    <div className="w-full h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className=" w-[28rem] p-8 rounded shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-white text-center hover:underline">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className='w-full px-4 py-2  text-white border-b focus:outline-none'
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className='w-full px-4 py-2  text-white border-b focus:outline-none'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
             className='w-full px-4 py-2  text-white border-b focus:outline-none'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          
          <button
            type="submit"
            className="w-full mt-8 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

