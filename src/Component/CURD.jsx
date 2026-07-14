import React, { useState, useEffect } from "react";

export default function CURD() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        // res={name:"erre",email:"rgrg"}
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          // res={name:"erre",email:"rgrg",id:11}
          setUser([...user, newUser]);
          //              user=[{1},{2},{3},{4}.....{10}   +   {new}]
          setName("");
          setEmail("");
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((user) => {
          // user=[{id:1},{2},{3},{4},{5}....{10}]
          // person={id:1}
          return user.filter((person) => person.id !== id);
        });
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>s.no</td>
            <td>name</td>
            <td>Email</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItem}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
