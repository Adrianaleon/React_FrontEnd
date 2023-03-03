import React, { useState } from 'react'
//Onsubmit -Onclick - Onchange
const Form = () => {
  
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handlechange =(e)=>{
        setData({...data,email: e.target.value})
    }
    console.log(data)
    const handleChangePassword =(e)=>{
        setData({...data,password: e.target.value})
    }

  return (
    <div>
        <form>

            <input 
            type="text" 
            name="userMail"
            onChange={handlechange}
            
            />
            <input 
            type="text" 
            name="userPassword"
            onChange={handleChangePassword}
            />
            
            <button>Ingrese</button>
            </form>
        
    </div>
  )
}

export default Form