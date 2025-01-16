import axios from "axios"
import { useState } from "react"

function Add(){
    const [roll_no,setRollno] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [course,setCourse] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/std/',{roll_no,name,email,course}).then(res=>{
            setRollno('')
            setName('')
            setEmail('')
            setCourse('')
        }).catch(error=>console.log(error.message)
    )
        }
        return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="number" name='rollno' id='rollno' value={roll_no} onChange={(e)=>setRollno(e.target.value)} />
            <input type="text" name='name' id="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text " name='course' id="course" value={course} onChange={(e)=>setCourse(e.target.value)}/>
            <input type="email" name='email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           
            <input type="submit" value='add' />

        </form>
        
        </>
        )
}
export default Add