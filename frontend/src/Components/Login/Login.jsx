import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();
  let loginHandle = async (e) => {
    e.preventDefault();
    try {
      let checkingLogin = await axios.post(
        "http://localhost:5000/login",
        {
          phoneNumber,
          password,
        },
        { withCredentials: true }
      );
      if (checkingLogin.data.notFound) {
        toast.error(checkingLogin.data.notFound, {
          theme: "dark",
        });
      } else if (checkingLogin.data.wrongCred) {
        toast.error(checkingLogin.data.wrongCred, {
          theme: "dark",
        });
      } else {
        navigate("/home");
      }
    } catch (error) {
      toast.error("An error occurred while logging in.", {
        theme: "dark",
      });
    }
  };

  return (
    <div className="bg-[#F2F4F7]">
      <ToastContainer />
      <div className="font-themeFont h-screen w-screen max-w-[1400px] mx-auto">
        <div className="w-full h-full px-24 grid grid-cols-2 place-content-center place-items-center items-center gap-5">
          <div>
            <img
              className="w-[25vw]"
              src="/imgs/logo.svg"
              alt="Facebook Logo"
            />
            <p className="text-2xl pl-7">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div>
            <form
              onSubmit={loginHandle}
              method="post"
              className="bg-white p-4 rounded-lg flex flex-col gap-3 w-[32vw]"
              style={{ boxShadow: "0 0 10px gray" }}
            >
              <input
                className="p-3  border border-gray-300 rounded-md"
                type="tel"
                placeholder="Phone number "
                required
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <input
                className="p-3  border border-gray-300 rounded-md"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <input
                className="p-3 bg-[#0866FF] font-semibold text-xl text-white transition-all duration-300 border-2 border-[#0866FF] hover:bg-[#1877F2] rounded-md"
                type="submit"
                value="Log in"
              />
              <a className="text-center text-sm text-[#0866FF]" href="#">
                Forgotton Password?
              </a>
              <div className=" border-t w-full flex border-gray-300 py-4">
                <Link
                  className="p-3 text-center text-lg font-medium transition-all duration-300 hover:bg-[#36A420] text-white m-auto rounded-lg bg-[#42B72A]"
                  to="/signup"
                >
                  Create New Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
