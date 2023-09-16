import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";

export default function AdminLogin() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await login(values);
      setIsLoading(false);
      toast.success("Admin login successful");
      navigate(PATH_DASHBOARD.admin.index);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
      console.error(error);
    }

    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="email" required aria-required {...register("email")} />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            required
            aria-required
            {...register("password")}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
