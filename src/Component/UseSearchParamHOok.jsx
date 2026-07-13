import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParamHOok() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setSearchParams({ category: "lap", Price: "50000" });
  };
  return (
    <div>
      <button onClick={handleChange}>Change filter</button>
    </div>
  );
}

