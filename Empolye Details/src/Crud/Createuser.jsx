import React, { useState } from 'react'
import style from './Createuser.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createuser = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")
    let Navigate=useNavigate()
    
    let formHabdle = (e) => {
        e.preventDefault()
        let palyload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.post("http://localhost:3001/Empolyee",(palyload))
        .then(()=>{console.log("data is get"); 
            Navigate("/users")
        })
        .catch(()=>{console.log("data is not get");})
    }
    return (
        <div id={style.box}>
            <form action="">
                <h1>Create User</h1>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="">Salary</label></td>
                        <td><input type="number" value={salary} onChange={(e) => { setSalary(e.target.value) }} /></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="">Company</label></td>
                        <td><input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} /></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={formHabdle}>Submit</button>
            </form>

        </div>
    )
}

export default Createuser