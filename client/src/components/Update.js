import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/getUser/` + id)
      .then(res => {
        console.log(res.data);
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
      })
      .catch(err => console.log(err))
  }, [])

  const update = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/updateUser/` + id, { name, email, age })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    navigate("/")

  }
  return (
    <div>
      <form onSubmit={update} className="update-user-form">
        <h2>Update User</h2>
        <div className="input-group">
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
        <div className="input-group">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className="input-group">
          <label for="exampleInputAge" className="form-label">Age</label>
          <input type="number" className="form-control" id="exampleInputAge" onChange={(e) => setAge(e.target.value)} value={age} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

    </div>
  )
}

export default Update