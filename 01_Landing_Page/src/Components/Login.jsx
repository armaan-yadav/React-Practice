import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center bg-[#afafaf1a]">
        <div className="absolute text-green-500 top-[10%] right-[10%]">
          <Link to="/">
            {" "}
            <CloseIcon
              fontSize="large"
              sx={{ color: "#D01C28", fontSize: 50 }}
            />{" "}
          </Link>
        </div>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  dark:text-gray-700">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-500">
              Sign in to access your account
            </p>
          </div>
          <form novalidate="" action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md placeholder:text-white dark:bg-[#FF6F63] text-white"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md placeholder:text-white dark:bg-[#FF6F63] text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-[#D01C28] text-white"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don't have an account yet?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-[#314674]"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
