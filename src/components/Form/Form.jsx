import { useState } from "react"
import { AiOutlineUserAdd} from "react-icons/ai";

import './Form.css'


function Form(){

    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [dateOfBirth,setDateOfBirth] = useState('')
    const [data,setData] = useState(localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[])


    const submit = (e)=>{
        e.preventDefault()

        data.push({
            name:name,
            lastname:lastname,
            email:email,
            dateOfBirth:dateOfBirth,
            phoneNumber:phoneNumber,
        })

        localStorage.setItem('users',JSON.stringify(data))
        setLastname('')
        setName('')
        setEmail('')
        setPhoneNumber('')
        setDateOfBirth('')
    }

    return(
        <div className="FormDiv">
            <form onSubmit={(e)=>submit(e)} className="Form" >
                
                <input 
                    type='text' 
                    name="name" 
                    value={name}
                    placeholder="First Name"
                    minLength={3}
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
                
                <input 
                    type='text' 
                    name="lastname" 
                    value={lastname}
                    placeholder="Last Name" 
                    minLength={3}
                    onChange={(e)=>setLastname(e.target.value)}
                    required
                />

                <input 
                    type='email' 
                    name="email" 
                    value={email}
                    placeholder='email' 
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />

                <input 
                    type='number' 
                    name="phonenumber" 
                    value={phoneNumber}
                    placeholder='phone Number' 
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    required
                />

                <input 
                    type='date'
                    name="date"
                    value={dateOfBirth}
                    onChange={(e)=>setDateOfBirth(e.target.value)}
                    required
                />  

                <button className="AddButton">add <AiOutlineUserAdd></AiOutlineUserAdd></button>

            </form>
        
        </div>
    )

}


export default Form