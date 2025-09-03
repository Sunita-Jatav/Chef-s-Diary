import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../Context/RecipeContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { userdata ,setCurrentUser } = useContext(recipecontext);

  const handleSignOut = () => {
    setCurrentUser(null); 
    toast.success("Signed out successfully!");
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (formData) => {
    // Check if a user with this email and password exists
    const user = userdata.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setCurrentUser(user);
      reset();
      navigate("/");
      toast.success("Signed In successfully!");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="w-full h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className="bg-gray-900 w-[28rem] p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-white text-center hover:underline">
          Sign In
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <i className="ri-mail-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className={`w-full pl-10 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border border-red-500 focus:ring-red-500"
                  : "border border-gray-700 focus:ring-blue-500"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <i className="ri-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              className={`w-full pl-10 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border border-red-500 focus:ring-red-500"
                  : "border border-gray-700 focus:ring-blue-500"
              }`}
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

          {/* Submit Button */}
     <div className="flex justify-around">
  {/* Sign In Button */}
  <button
    type="submit"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Sign In
  </button>

  {/* Sign Out Button */}
  <button
    type="button" // ✅ not submit
    onClick={handleSignOut}
    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
  >
    Sign Out
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default SignIn;

