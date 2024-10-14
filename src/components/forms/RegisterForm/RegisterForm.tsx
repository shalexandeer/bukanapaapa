import React, { useReducer, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import Input from "../../elements/Input";
import EyePassword from "../../templates/EyePassword";
import Button from "../../elements/Button";
import { useAuth } from "../../../provider/AuthProvider";
import { useAdminLogin } from "../../../service/Auth/Auth.query";
import toast from "react-hot-toast";

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const { login } = useAuth();

  const [hideEye, dispatch] = useReducer((state: boolean) => !state, true);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const { 
    isPending,
    isSuccess,
  } = useAdminLogin({
    onSuccess: ({ message, data }: LoginResponse) => {
      toast.success(message);
      setTimeout(() => {
        login(data);
      }, 1500);
    },
    onError: () => {
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");

  const allInputsFilled =
    nameValue &&
    emailValue &&
    passwordValue &&
    confirmPasswordValue &&
    agreeTerms;

  const onSubmit: SubmitHandler<RegisterFormInputs> = () => {
    // Handle the registration process
  };

  return (
    <form className="mt-10 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <Input
          {...register("name")}
          disabled={isPending}
          label="Name"
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          disabled={isPending}
          label="Email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          disabled={isPending}
          label="Password"
          placeholder="Enter your password"
          type={hideEye ? "password" : "text"}
          rightIcon={
            <EyePassword
              name="password"
              isHide={hideEye}
              handleHidingEye={() => dispatch()}
            />
          }
          error={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          disabled={isPending}
          label="Confirm Password"
          placeholder="Confirm your password"
          type={hideEye ? "password" : "text"}
          rightIcon={
            <EyePassword
              name="confirmPassword"
              isHide={hideEye}
              handleHidingEye={() => dispatch()}
            />
          }
          error={errors.confirmPassword?.message}
        />
        <label className="label cursor-pointer space-x-2">
          <div className="mb-4 flex items-center gap-3">
            <input
              disabled={isPending}
              onClick={() => setAgreeTerms(!agreeTerms)}
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <span className="label-text">
              I agree to the Terms and Conditions
            </span>
          </div>
        </label>
      </div>

      <Button
        className="w-full"
        disabled={!allInputsFilled || isSubmitting || isPending || isSuccess}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
