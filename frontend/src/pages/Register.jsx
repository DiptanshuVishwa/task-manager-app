import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async(e)=>{
    e.preventDefault();

    try{
      await API.post("/auth/register",{name,email,password});
      navigate("/");
    }catch{
      alert("Registration failed");
    }
  };

  return(
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-80"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Register;