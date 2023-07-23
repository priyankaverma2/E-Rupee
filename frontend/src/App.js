import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        balance,
      });
      // const response = await axios.post("/api/register", {
      //   name,
      //   email,
      //   password,
      //   balance,
      // });
      console.log(response.data.message);
      alert("done");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("error");
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Balance:</label>
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default App;
