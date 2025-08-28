import React, { useState } from "react";


const SigninForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send signin request
    onSubmit();
  };

  return (

    <>

    <h1 className="text-[#7C21E1] text-[39px] leading-[111%] font-[900] text-gradient text-stroke">Your spaceship is waiting — continue your journey through the MILtiverse.</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64 px-[40px]">
      <label className="text-left text-[20px] text-white font-[600]">Email</label>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 rounded border"
        required
      />
      <label className="text-left text-[20px] text-white font-[600]">Password</label>
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="p-2 rounded border"
        required
      />
      <button type="submit" className="text-white py-2 rounded flex items-center justify-center custom-button">
        Resume Journey
      </button>
    </form>
    </>
  );
};

export default SigninForm;
