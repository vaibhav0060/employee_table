

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import "../App.css"

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
      };
    
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.age.toString().includes(searchTerm)
      );

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5000/deleteUser/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        window.location.reload();
    };

    return (
        <>
        <div className='container nav_position_fix'>
         <div className="row">
         <div className="col-lg-4">
  
         <input
        type="text"
        placeholder="Search..."
        className="search-input position_fixed"
        value={searchTerm}
        onChange={handleSearchChange}
      /></div>
      <div className="col-sm-2">
      <Link to="/create"  className="add-user-btn">Add User + </Link>
      </div>
    </div>
    </div>
        <div className="container">
           
        <div className="row d-flex justify-content-center">
       
          <div className="col">
        <table className="text-center">
      
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Email</th>
                    <th> Age </th>
                     <th> Action</th>
        
                     </tr>
                     </thead>
          
        <tbody>
        {
            filteredUsers.map((user)=>{
                return <tr>
                    <td> {user.name}</td>
                    <td> {user.email}</td>
                    <td> {user.age}</td>
                    <td> 
                    <Link to={`/update/${user._id}`} className = "user-action-btn update" >Update</Link>
                         <button  onClick = {(e)=>handleDelete(user._id)} className="user-action-btn delete">Delete</button>
                         </td>
                    
                </tr>
            })
        }
        
        </tbody>
        
        </table>
        </div>
        </div>
        
            </div>
            </>
    );
};

export default Home;
