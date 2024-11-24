import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Haiku App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
