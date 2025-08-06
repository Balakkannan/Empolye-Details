import React, { useEffect, useState } from 'react'
import style from "./Createuser.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
    let [name,setName]=useState([])
    let [salary,setSalary]=useState([])
    let [company,setCompany]=useState([])
    let obj=useParams()
    let Navigate=useNavigate()
    console.log(obj);
    useEffect(()=>{
        axios.get(`http://localhost:3001/Empolyee/${obj.id}`)
        .then((res)=>{
            setName(res.data.empName)
            setSalary(res.data.empSalary)
            setCompany(res.data.empCompany)
        })
        .catch(()=>{console.log("not get the data");})
    },[])
    function formhandle(e){
        e.preventDefault()

        let playload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.put(`http://localhost:3001/Empolyee/${obj.id}`,playload)
        .then(()=>{console.log("data is updated");
            Navigate("/users")
        })
        .catch(()=>{console.log("dont updated The data");})
    }
  return (
    <div id={style.box}>
            <form action="">
                <h1>Edit user</h1>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td><input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="">Salary</label></td>
                        <td><input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="">Company</label></td>
                        <td><input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={formhandle}>Update</button>
            </form>
        </div>
  )
}

export default Edituser