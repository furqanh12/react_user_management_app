import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const SubmitFunction = () => {
    alert("form submitted");
  };
  return (
    <div>
      <header>
        <h1>Users Management Software</h1>
        <div
          style={{ marginTop: "30px", marginBottom: "18px" }}
          className="d-flex justify-content-between"
        >
          <button className="btn btn-primary" onClick={handleShow}>
            Add Employee
          </button>
          <p>
            Total Employees: <span>10</span>
          </p>
        </div>
      </header>
      {/* Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="mb-3">
              <label for="id" className="form-label">
                Id
              </label>
              <input type="tel" className="form-control" id="id" />
            </div>
            <div className="mb-3">
              <label for="fname" className="form-label">
                Enter your first name:
              </label>
              <input type="text" className="form-control" id="fname" />
            </div>
            <div className="mb-3">
              <label for="lname" className="form-label">
                Enter your last name:
              </label>
              <input type="text" className="form-control" id="lname" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Enter your email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label for="salary" className="form-label">
                Enter your current salary:
              </label>
              <input type="tel" className="form-control" id="salary" />
            </div>
            <div className="mb-3">
              <label for="date" className="form-label">
                Enter your joining date:
              </label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="text-end">
              <button type="reset" className="btn btn-danger me-2">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={SubmitFunction}
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
