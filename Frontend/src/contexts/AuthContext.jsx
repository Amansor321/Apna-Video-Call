import React, { createContext, useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";
import server from "../environment";

// Create context
export const AuthContext = createContext();

// Axios instance
const client = axios.create({
  baseURL: `${server}/api/auth`, // 👈 backend route prefix
  withCredentials: true, // include cookies if backend sets them
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Register
  const handleRegister = async (name, username, password) => {
    try {
      const res = await client.post("/register", {
        name,
        username,
        password,
      });
      return res.data.message; // backend should send success message
    } catch (err) {
      throw err; // handled in Authentication.jsx
    }
  };

  // 🔹 Login
  const handleLogin = async (username, password) => {
    try {
      const res = await client.post("/login", {
        username,
        password,
      });

     
     // Save token
     if (res.data.token) {
      localStorage.setItem("token", res.data.token);
     }

      setUser(res.data.user); // assuming backend returns user info
       navigate("/home"); // redirect after login
      return res.data;
    } catch (err) {
      throw err; // handled in Authentication.jsx
    }
  };

//   // 🔹 Logout
//   const handleLogout = async () => {
//     try {
//       await client.post("/logout");
//       setUser(null);
//       navigate("/auth");
//     } catch (err) {
//       console.error(err);
//     }
//   };




const getHistoryOfUser= async ()=>{
  try{
    let request= await client.get("/get_all_activity",{
      params:{
        token:localStorage.getItem("token")
      }
    });
    return request.data
  } catch(err){
    throw(err);
  }
}

const addToUserHistory= async (meetingCode)=>{

  try{
     let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request

  }catch(e){
    throw e;
  }
}



  return (
    <AuthContext.Provider
      value={{ user, handleRegister, handleLogin,getHistoryOfUser ,addToUserHistory}}
    >
      {children}
    </AuthContext.Provider>
  );
};
