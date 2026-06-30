import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData, //previous data
      [name]: value, // updated
      //   [e.target.name]: e.target.value, // updated
    });
  };

  console.log(formData);

  return (
    <div>
      <h2>Reg-From</h2>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <input
        name="email"
        type="text"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter a email"
      />
      <input
        name="age"
        type="text"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter a age"
      />
    </div>
  );
}
