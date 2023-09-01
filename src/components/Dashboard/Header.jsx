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
  tailwind.config = {
    theme: {
      extend: {
        screens: {
          sm: { max: "767px" },
        },
        colors: {
          new_color: "#62c4f0",
        },
      },
    },
  };
  return (
    <div>
      <header>
        <h1 className="text-new_color xl:text-right lg:text-center md:text-left sm:text-center">
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
