
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [user,setUser] = useState({
    name: "",
    email:"",
    password:""
  })
  const displayUser = (e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={(e)=>{displayUser(e)}}>
          <label>Name</label>
          <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} />
          <label>Email</label>
          <input type="email" onChange={(e)=>setUser({...user,email:e.target.value})} />
          <label>Password</label>
          <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
