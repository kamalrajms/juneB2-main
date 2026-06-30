import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   const handleChange2=(e)=>{
  //     const {checked,name}=e.target;
  //     setFormData({
  //         ...formData,
  //         [name]:checked
  //     })
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      // console.log("h");
      setError("All the are required!");
      return;
    }
    if (!formData.terms) {
      setError("you must accept the check box");
      return;
    }
    setError("");
    alert("form is successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>conditional Form</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
