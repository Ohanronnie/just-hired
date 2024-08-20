import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/global/InputField";
import { Button } from "@/components/ui/button";
import {
  IChangePasswordBody,
  IResetPasswordActivate,
  InputType,
} from "@/interfaces/authInterface";
import { AuthStatic } from "@/static/authStatic";
import { newPasswordSchema } from "@/validations/authValidations";
import { useState } from "react";
import { usePostRequest } from "@/hooks/usePostRequests";
import Loader from "@/components/global/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import CloseToast from "@/components/global/CloseToast";

export default function NewPassword() {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostRequest<void, IChangePasswordBody>({
    url: "/admin/reset/password",
    addId: false,
    showSuccess: "Password successfully changed",
    onSuccess: () => {
      reset(), navigate("/login");
    },
  });

  const [params] = useSearchParams();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordActivate>({
    resolver: yupResolver(newPasswordSchema),
  });

  const onSubmit: SubmitHandler<{ password: string }> = (data) => {
    const token = params.get("token");
    if (!token) {
      toast.error("Token is missing from url", { action: <CloseToast /> });
      return;
    }
    mutate({ password: data.password, token: token || "" });
  };

  const [passwordType, setPasswordType] = useState<InputType>("password");
  const [passwordConfirmType, setPasswordConfirmType] =
    useState<InputType>("password");

  return (
    <AuthLayout
      title={AuthStatic.newPassword.title}
      tiltleHeading={AuthStatic.newPassword.titleHeading}
      image="/auth/newpassword.png"
      align="center"
      style="aspect-[2/2.5] max-w-[350px] relative top-12"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          title="Password"
          className="rounded-2xl border-main"
          register={register}
          fieldName="password"
          type={passwordType}
          showPasswordToggle
          onPasswordToggle={() => {
            setPasswordType((prev) =>
              prev === "password" ? "text" : "password",
            );
          }}
          placeholder="• • • • •"
          error={errors.password?.message}
        />

        <InputField
          title="Confirm Password"
          className="rounded-2xl border-main"
          register={register}
          fieldName="confirmPassword"
          showPasswordToggle
          type={passwordConfirmType}
          onPasswordToggle={() => {
            setPasswordConfirmType((prev) =>
              prev === "password" ? "text" : "password",
            );
          }}
          placeholder="• • • • •"
          error={errors.confirmPassword?.message}
        />
        <Button disabled={isPending} className="w-full block mt-12" size="lg">
          {isPending ? <Loader /> : "Reset Password"}
        </Button>
      </form>
    </AuthLayout>
  );
}
