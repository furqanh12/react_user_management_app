import React, { useState } from "react";
import usersData from "../data";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const SubmitFunction = () => {
    alert("form submitted");
  };
  const length = usersData.length;
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-fuchsia-900 sm:text-center md:text-left lg:text-center xl:text-right">
          Users Management Software
        </h1>
        <div
          style={{ marginTop: "30px", marginBottom: "18px" }}
          className="d-flex justify-content-between"
        >
          <button className="btn btn-primary" onClick={handleShow}>
            Add Employee
          </button>
          <p>
            Total Employees: <strong>{length}</strong>
          </p>
        </div>
      </header>
    </div>
  );
}
