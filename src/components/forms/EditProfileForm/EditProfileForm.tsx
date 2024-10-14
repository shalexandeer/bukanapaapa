import React, { useReducer } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../elements/Input";
import EyePassword from "../../templates/EyePassword";
import Button from "../../elements/Button";
import toast from "react-hot-toast";
import { editProfileSchema } from "./schema";

export interface EditProfileFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const EditProfileForm: React.FC = () => {
  const [hidePassword, dispatchHidePassword] = useReducer(
    (state: boolean) => !state,
    true,
  );
  const [hideConfirmPassword, dispatchHideConfirmPassword] = useReducer(
    (state: boolean) => !state,
    true,
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileFormInputs>({
    resolver: yupResolver(editProfileSchema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");

  const allInputsFilled =
    nameValue && emailValue && passwordValue && confirmPasswordValue;

  const onSubmit: SubmitHandler<EditProfileFormInputs> = (data) => {
    // Handle profile update logic here
    toast.success("Profile updated successfully!");
    console.log(data);
  };

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("name")}
          disabled={isSubmitting}
          label="Name"
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          disabled={isSubmitting}
          label="Email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          disabled={isSubmitting}
          label="Password"
          placeholder="Enter your password"
          type={hidePassword ? "password" : "text"}
          rightIcon={
            <EyePassword
              name="password"
              isHide={hidePassword}
              handleHidingEye={() => dispatchHidePassword()}
            />
          }
          error={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          disabled={isSubmitting}
          label="Confirm Password"
          placeholder="Confirm your password"
          type={hideConfirmPassword ? "password" : "text"}
          rightIcon={
            <EyePassword
              name="confirmPassword"
              isHide={hideConfirmPassword}
              handleHidingEye={() => dispatchHideConfirmPassword()}
            />
          }
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button className="w-full" disabled={!allInputsFilled || isSubmitting}>
        Update Profile
      </Button>
    </form>
  );
};

export default EditProfileForm;
