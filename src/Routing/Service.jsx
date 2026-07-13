import React from "react";
import { Link, Outlet } from "react-router-dom";
import UseSearchParamHOok from "../Component/UseSearchParamHOok";

export default function Service() {
  return (
    <div>
      <h2>Service component</h2>
      <UseSearchParamHOok />
      <div className="sub-header">
        <Link to={""}>web Development</Link>
        <Link to={"AppDevelopment"}>App Development</Link>
      </div>
      <Outlet />
    </div>
  );
}
