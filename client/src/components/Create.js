import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/create", { name, email, age })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleForm} className="update-user-form">
        <h2>Add User</h2>
        <div className="input-group">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label for="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;



