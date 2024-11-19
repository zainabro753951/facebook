import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS file import karna zaroori hai

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const genderCheck = (e) => {
    setGender(e.target.value);
  };
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    let settingData = await axios.post(
      "http://localhost:5000/signup",
      {
        firstName,
        lastName,
        day,
        month,
        year,
        gender,
        phoneNumber,
        password,
      },
      { withCredentials: true }
    );
    console.log(settingData.data);

    if (settingData.data.WarningMsg) {
      toast.warning(settingData.data.WarningMsg, {
        theme: "colored",
      });
    } else if (settingData.data.phoneValidationMsg) {
      toast.warning(settingData.data.phoneValidationMsg),
        {
          theme: "colored",
        };
    } else {
      navigate("/");
      setfirstName("");
      setlastName("");
      setday("");
      setmonth("");
      setyear("");
      setGender("");
      setPhoneNumber("");
      setPassword("");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="max-w-[1400px] bg-[#F0F2F5] mx-auto w-full min-h-screen">
        <div className="w-[35%] h-full mx-auto">
          <img className="mx-auto w-[25vw]" src="/imgs/logo.svg" alt="" />
          <form
            onSubmit={submitHandle}
            className="w-full h-full bg-white rounded-lg p-3"
            style={{ boxShadow: "0 0 10px gray" }}
            method="post"
          >
            <h1 className="text-center text-2xl font-bold">
              Create a ew account
            </h1>
            <p className="text-center text-gray-600 pb-4">
              It's quick and easy
            </p>
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-3 w-full">
                <input
                  className="p-2 border border-gray-300 w-full rounded-md"
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
                <input
                  className="p-2 border border-gray-300 w-full rounded-md"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <select
                  value={day}
                  onChange={(e) => setday(e.target.value)}
                  className="flex flex-col gap-4 border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select
                  value={month}
                  onChange={(e) => setmonth(e.target.value)}
                  className="flex flex-col gap-4 border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Month</option>
                  <option value="January">Jan</option>
                  <option value="February">Feb</option>
                  <option value="March">Mar</option>
                  <option value="April">Apr</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">Jul</option>
                  <option value="August">Aug</option>
                  <option value="September">Sep</option>
                  <option value="October">Oct</option>
                  <option value="November">Nov</option>
                  <option value="December">Dec</option>
                </select>
                <select
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  className="flex flex-col gap-4 border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <label
                  className="flex justify-between items-center border border-gray-300 p-2 rounded-lg"
                  htmlFor="male"
                >
                  Male{" "}
                  <input
                    type="radio"
                    id="male"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={genderCheck}
                    name="gender"
                    required
                  />{" "}
                </label>
                <label
                  className=" flex justify-between items-center border border-gray-300 p-2 rounded-lg"
                  htmlFor="female"
                >
                  Female{" "}
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={genderCheck}
                    id="female"
                    name="gender"
                    required
                  />{" "}
                </label>
                <label
                  className=" flex justify-between items-center border border-gray-300 p-2 rounded-lg"
                  htmlFor="custom"
                >
                  Custom{" "}
                  <input
                    type="radio"
                    id="custom"
                    value="Custom"
                    checked={gender === "Custom"}
                    onChange={genderCheck}
                    name="gender"
                    required
                  />{" "}
                </label>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <input
                  className="p-3 border border-gray-300 w-full rounded-md"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
                <p className="text-red-700">
                  {!phoneNumber.startsWith("+")
                    ? "Phone number must have country code"
                    : ""}
                </p>
                <input
                  className="p-3  border border-gray-300 rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <p className="text-[12px]">
                  People who use our service may have uploaded your contact
                  information to Facebook. Learn more.
                </p>
                <p className="text-[12px]">
                  By clicking Sign Up, you agree to our Terms, Privacy Policy
                  and Cookies Policy. You may receive SMS notifications from us
                  and can opt out at any time.
                </p>
                <input
                  className="p-3 bg-[#42B72A] font-semibold text-xl text-white transition-all duration-300  hover:bg-[#36A420] rounded-md"
                  type="submit"
                  value="Sign up"
                />
                <Link className="text-center text-xl text-[#0866FF]" to="/">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
