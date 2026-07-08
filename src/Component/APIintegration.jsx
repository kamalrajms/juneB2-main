import React, { useState, useEffect } from "react";

export default function APIintegration() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>loading...!</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h2>uses list</h2>
      {user.map((person) => (
        <div
          key={person.id}
          style={{
            border: "2px solid #333",
            padding: "10px",
            marginTop: "5px",
          }}
        >
          <h3>{person.name}</h3>
          <h3>{person.email}</h3>
        </div>
      ))}
    </div>
  );
}
