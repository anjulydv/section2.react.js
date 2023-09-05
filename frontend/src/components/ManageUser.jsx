import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch( 'http://localhost:5000/user/getall' );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserList(data);
    };

    const deleteUser = async(id ) =>{
      const res = await fetch ('http://localhost:5000/user/delete/'+id ,{method :'DELETE'});
       console.log(res.status);
       if(res.status ===200){
        fetchUserData();
        toast.success( 'User Deleted Successfully ')
       }
    }

    // fetchUserData();

    useEffect(() => {
      fetchUserData();
    }, []); 

    const displayUserData = () => {
      return <table className='table table-dark'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  userList.map( (user) => ( <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={ '/updateuser/'+user._id}button className='btn btn-primary'>Edit</Link>
                    </td>
                    <td>
                      <button onClick ={( ) =>{deleteUser(user._id)}}className='btn btn-danger'>Delete</button>
                    </td>
                  </tr> ) )
                }
              </tbody>
            </table>
    }

  return (
    <div>
      <h1 className='text-center fw-bold'>Manage User Data</h1>
      <hr />

      <div className="container">
          {displayUserData()}
      </div>      

    </div>
  )
}

export default ManageUser;