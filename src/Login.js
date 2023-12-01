import React, { useState } from "react";
import Banner from "./components/Banner";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    if (username === "yourUsername" && password === "yourPassword") {
      // Successful login
      console.log("Login successful!");
      setError("");
    } else {
      // Failed login
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Banner>
    <div className="w-full h-screen flex items-center justify-center">

<div className="bg-white p-8 rounded-md shadow-md">
  <h2 className="text-3xl font-bold mb-6 text-[#F73D27]">Login</h2>
  {error && <p className="text-red-500 mb-4">{error}</p>}
  <form>
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-600">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your username"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your password"
      />
    </div>
    <button
      type="button"
      onClick={handleLogin}
      className="bg-[#F73D27] text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Login
    </button>
  </form>
</div>
</div>
        
    </Banner>
    
  );
};

export default LoginPage;
