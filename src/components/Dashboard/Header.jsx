import React, { useState } from "react";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const SubmitFunction = () => {
    alert("form submitted");
  };
  // const length = usersData.length;
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-fuchsia-900 lg:text-center text-4xl mb-5">
          Users Management Software
        </h1>
      </header>
    </div>
  );
}
