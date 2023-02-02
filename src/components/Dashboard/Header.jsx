import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <h1>Users Management Software</h1>
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button className="btn btn-primary" onClick={() => setIsAdding(true)}>Add Employee</button>
          {/* <Logout setIsAuthenticated={setIsAuthenticated} /> */}
        </div>
      </header>
    </div>
  );
}
