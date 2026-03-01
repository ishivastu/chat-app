import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({value}) => {
  return (
    <div>
      <h1 className="text-red-700 text-5xl ">Hey</h1>
      <Link className="text-red-200 text-3xl m-3.5" to={"/"}>
        Home
      </Link>
      <Link className="text-red-200 text-3xl m-3.5" to={"/login"}>
        Login
      </Link>
      <Link className="text-red-200 text-3xl m-3.5" to={"/profile"}>
        Profile
      </Link>
      <Link className="text-red-200 text-3xl m-3.5" to={"/settings"}>
        Settings
      </Link>
      <Link className="text-red-200 text-3xl m-3.5" to={"/signup"}>
        Signup
      </Link>
    </div>
  );
}

export default Navbar
