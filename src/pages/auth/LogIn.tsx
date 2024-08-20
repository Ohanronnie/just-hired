import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/global/InputField";
import Loader from "@/components/global/Loader";
import { Button } from "@/components/ui/button";
import { usePostRequest } from "@/hooks/usePostRequests";
import {
  ISignInForm,
  IUserLoginRes,
  InputType,
} from "@/interfaces/authInterface";
import { AuthStatic } from "@/static/authStatic";
import { loginSchema } from "@/validations/authValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({ resolver: yupResolver(loginSchema) });

  const [passwordType, setPasswordType] = useState<InputType>("password");

  const [, setCookie] = useCookies(["authCookie"]);

  const navigate = useNavigate();

  const { mutate, isPending } = usePostRequest<IUserLoginRes, ISignInForm>({
    url: "/admin/login",
    addId: false,
    onSuccess: (data: IUserLoginRes) => {
      const today = new Date();
      const token = data.data?.token;
      const tomorrow = new Date(today.setDate(today.getDate() + 1));
      setCookie("authCookie", token, {
        expires: tomorrow,
      });
      navigate("/dashboard");
    },
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    mutate(data);
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <AuthLayout
      title={AuthStatic.login.title}
      tiltleHeading={AuthStatic.login.titleHeading}
      image="/auth/login.png"
      align="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          title="Email"
          className="rounded-2xl border-main"
          register={register}
          fieldName="email"
          placeholder="deniel123@gmail.com"
          type="email"
          error={errors.email?.message}
        />
        <InputField
          title="Password"
          className="rounded-2xl border-main"
          register={register}
          type={passwordType}
          showPasswordToggle
          onPasswordToggle={() => {
            setPasswordType((prev) =>
              prev === "password" ? "text" : "password",
            );
          }}
          placeholder="• • • • •"
          fieldName="password"
          error={errors.password?.message}
        />

        <div className="flex-center px-2 justify-between">
          <div className="flex-center">
            <button
              type="button"
              className="h-5 w-5 rounded-full  border p-[2px] bg-white"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              <span
                className={`h-full block cursor-pointer w-full rounded-full ${isVisible ? "bg-main" : ""}`}
              ></span>
            </button>
            <span className="ml-2">Remember me</span>
          </div>

          <Link
            to={"/forgot-password"}
            className="text-main hover:underline font-medium"
          >
            Forgot Password
          </Link>
        </div>

        <Button disabled={isPending} className="w-full block mt-6" size="lg">
          {isPending ? <Loader /> : "Sign In"}
        </Button>
      </form>
    </AuthLayout>
  );
}
