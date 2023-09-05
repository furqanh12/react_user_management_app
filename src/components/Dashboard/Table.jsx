import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
const Table = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [date, setDate] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);
  const length = data.length;
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data.length + 1;
    axios
      .post("http://localhost:3000/users", {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        salary: salary,
        date: date,
      })
      .then((res) => {
        location.reload();
      })
      .catch((er) => console.log(er));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((er) => console.log(er));
  };
  return (
    <>
      <div className="container-fluid">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Control
              type="text"
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Control
              type="tel"
              placeholder="Enter salary"
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Control
              type="date"
              placeholder="Enter joining date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <button className="btn btn-primary">Add Employee</button>
        </Form>
      </div>
      <p className="my-5">
        Total Employees: <strong>{length}</strong>
      </p>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((data) => (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.salary}</td>
                  <td>{data.date}</td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Employees</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
