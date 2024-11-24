import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

const Login = () => {
  return (
    <>
      <p className="text-center text-2xl mb-5">
        Don&rsquo;t have an Account? <strong>Create One</strong>{" "}
      </p>
      <RegisterForm />
    </>
  );
};

export default Login;
