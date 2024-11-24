import Link from "next/link";

const Login = () => {
  return (
    <>
      <p className="text-center text-2xl mb-5">
        Don&rsquo;t have an Account? <strong>Create One</strong>{" "}
      </p>
      <form action="." className="max-w-xs mx-auto">
        <div className="mb-3">
          <input name="username" autoComplete="off" type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="mb-3">
          <input name="password" autoComplete="off" type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        </div>
        <button className="btn btn-primary" type="submit">
          Create Account
        </button>
      </form>
    </>
  );
};

export default Login;
