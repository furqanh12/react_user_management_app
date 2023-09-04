import React from "react";
import usersData from "../data";
const Table = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
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
            {usersData.length > 0 ? (
              usersData.map((usersData) => (
                <tr key={usersData.id}>
                  <td>{usersData.id}</td>
                  <td>{usersData.firstName}</td>
                  <td>{usersData.lastName}</td>
                  <td>{usersData.email}</td>
                  <td>{usersData.salary}</td>
                  <td>{usersData.date}</td>
                  <td className="">
                    <button
                      onClick={() => handleEdit(employee.id)}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(employee.id)}
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
      <div className="container mx-auto">
        <div className="text-white py-5 gap-5 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
          <div className="bg-[green] p-5 text-center col-span-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
          <div className="bg-[green] p-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            doloribus fugit aspernatur, accusamus hic excepturi in vel error
            expedita quos.
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
