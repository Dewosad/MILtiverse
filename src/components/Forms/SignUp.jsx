import React, { useState } from "react";
import buttonicon from "../../assets/buttonicon.svg";

const SignupForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "", conform_password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send signup request
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-6f4 px-[40px]">
      <h1 className="text-[#7C21E1] text-[39px] leading-[111%] font-[900] text-gradient text-stroke">Create your profile to unlock missions, 
earn badges, and level up your digital powers.</h1>
<label className="text-left text-[20px] text-[white] font-[600]">Full Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Who’s piloting this spaceship"
        className="p-2 rounded border border-[#FFFFFF33] text-white placeholder:text-[#FFFFFFB2]"
        required
      />
<label className="text-left text-[20px] text-white font-[600] placeholder:text-[#FFFFFFB2]">Email</label>

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="For mission updates and secret briefings"
        className="p-2 rounded border border-[#FFFFFF33] text-white placeholder:text-[#FFFFFFB2]"
        required
      />
<label className="text-left text-[20px] text-white font-[600]">Password</label>

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Secure your ship’s controls (8+ characters, mix it up for safety)"
        className="p-2 rounded border border-[#FFFFFF33] text-white placeholder:text-[#FFFFFFB2]"
        required
      />

      <label className="text-left text-[20px] text-white font-[600]">Password</label>

      <input
        name="conform_password"
        type="conform_password"
        value={form.conform_password}
        onChange={handleChange}
        placeholder="Double-check before you launch"
        className="p-2 rounded border border-[#FFFFFF33] text-white placeholder:text-[#FFFFFFB2]"
        required
      />
      <button type="submit" className=" text-white py-2 rounded flex items-center justify-center custom-button">
        <img src={buttonicon} alt="button icon" />
        Launch My Journey
      </button>
    </form>
  );
};

export default SignupForm;
