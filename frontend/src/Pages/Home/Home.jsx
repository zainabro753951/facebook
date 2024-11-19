import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Components/Header";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("http://localhost:5000/home", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (err) {
        navigate("/");
        setIsAuthenticated(false);
      }
    };

    checkSession();
  }, [navigate]);
  if (isAuthenticated) {
    return (
      <div>
        <Header />
      </div>
    );
  }
};

export default Home;
