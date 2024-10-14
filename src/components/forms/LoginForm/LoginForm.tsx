/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import Input from "../../elements/Input";
import EyePassword from "../../templates/EyePassword";
import Button from "../../elements/Button";
import { useAuth } from "../../../provider/AuthProvider";
import { useAdminLogin } from "../../../service/Auth/Auth.query";
import toast from "react-hot-toast";

export interface LoginFormInputs {
  email: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const [hideEye, dispatch] = useReducer((state: boolean) => !state, true);
  const [remember, setRemember] = useState<boolean>(false);

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
      // toast.error(data?.message);
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  // const phoneNumberValue = watch("phoneNumber");
  const usernameValue = watch("email");
  const passwordValue = watch("password");

  const allInputsFilled = usernameValue && passwordValue;

  // TODO: handle submit correctly using auth provider
  const onSubmit: SubmitHandler<LoginFormInputs> = () => {
    // doLogin(data);
  };

  return (
    <form
      className="mt-5 w-full space-y-2 sm:mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        {/* <Input
          {...register("phoneNumber")}
          label="Nomor Telepon"
          placeholder="Nomor Telepon"
          leftIcon={<PhoneIcon className="h-5 w-5 text-textGrayColor" />}
          error={errors.phoneNumber?.message}
        /> */}
        <Input
          {...register("email")}
          disabled={isPending}
          label="Email"
          placeholder="Masukkan Email"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          disabled={isPending}
          label="Password"
          placeholder="Masukkan Password"
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
      </div>

      <label className="label cursor-pointer space-x-2">
        <div className="flex items-center gap-3">
          <input
            disabled={isPending}
            onClick={() => setRemember(!remember)}
            type="checkbox"
            className="checkbox checkbox-sm rounded-md"
          />
          <span className="label-text">Remember me</span>
        </div>
      </label>

      <Button
        className="w-full"
        disabled={!allInputsFilled || isSubmitting || isPending || isSuccess}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
