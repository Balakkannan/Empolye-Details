import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  let [name, setName] = useState([])
  let [fleg, setFleg] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3001/Empolyee")
      .then((res) => { setName(res.data); setFleg(false) })
      .catch(() => { console.log("not get the data"); })
  }, [fleg])
  let deleteuser = (id) => {
    axios.delete(`http://localhost:3001/Empolyee/${id}`)
    setFleg(true)
  }
  return (

    <div className='h-[100vh] w-[100%] border border-red-700 flex justify-center items-center flex-wrap gap-5' >
      {name.map((user) => {
        return (
          <article key={user.id} className='h-[200px] w-[200px] flex justify-center items-center border border-green-500 flex-col'>
            <div className='h-[70%] w-[100%] flex justify-center items-center flex-col'>
              <h1>Emlpye Name:{user.empName}</h1>
              <h1>Emlpye Salary:{user.empSalary}</h1>
              <h1>Emlpye Company:{user.empCompany}</h1>
            </div>
            <div className='h-[30%] w-[100%] border justify-around flex items-center'>
              <button className='h-[30px] w-[70px] border border-black bg-green-600 text-white'><Link to={`/edit/${user.id}`}>Edit</Link></button>
              <button className='h-[30px] w-[70px] border border-black bg-red-600 text-white' onClick={() => { deleteuser(user.id) }}>Delete</button>
            </div>
          </article>
        )
      })}

    </div>

  )
}

export default Users