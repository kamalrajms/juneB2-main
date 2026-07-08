import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetailes() {
  const { id, name } = useParams();
  return (
    <div>
      <h2>Blog detailes---{id}</h2>
      <h2>{name}</h2>
    </div>
  );
}
