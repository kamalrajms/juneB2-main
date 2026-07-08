import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>user List</h2>
      <ul>
        {user.map((person) => (
          <li key={person.id}>
            <Link to={`/blog/:${person.email}/:${person.name}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
