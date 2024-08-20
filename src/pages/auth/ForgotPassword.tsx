import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/global/InputField";
import { Button } from "@/components/ui/button";
import { IResetpassword } from "@/interfaces/authInterface";
import { AuthStatic } from "@/static/authStatic";
import { resetPasswordSchema } from "@/validations/authValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostRequest } from "@/hooks/usePostRequests";
import Loader from "@/components/global/Loader";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetpassword>({ resolver: yupResolver(resetPasswordSchema) });

  const { mutate, isPending } = usePostRequest<void, { email: string }>({
    url: "/admin/forgot/password",
    addId: false,
    showSuccess: "Verification sent to mail",
  });

  const onSubmit: SubmitHandler<IResetpassword> = (data) => {
    mutate(data);
  };

  return (
    <AuthLayout
      title={AuthStatic.forgotPassword.title}
      tiltleHeading={AuthStatic.forgotPassword.titleHeading}
      image="/auth/forgot-password.png"
      align="bottom"
      style="aspect-[8/7]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          title="Email"
          className="rounded-2xl border-main"
          register={register}
          fieldName="email"
          type="email"
          placeholder="deniel123@gmail.com"
          error={errors.email?.message}
        />

        <Button disabled={isPending} className="w-full block mt-8" size="lg">
          {isPending ? <Loader /> : <span>Reset password</span>}
        </Button>

        <Link to={"/login"}>
          <Button
            disabled={isPending}
            size="lg"
            variant="outline"
            className="block mt-6 mx-auto px-12"
          >
            Log in
          </Button>
        </Link>
      </form>
    </AuthLayout>
  );
}
