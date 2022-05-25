import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged,signInWithPhoneNumber,signInWithEmailAndPassword,signOut} from "firebase/auth"

import {auth} from './firebase-config.js'
function App() {
  const [registerName, setRegisterName] =useState("")
  const [registerPhone, setRegisterPhone] =useState("")

const [registerEmail, setRegisterEmail] =useState("")
const [registerPassword, setregisterPassword] =useState("")

const [loginEmail, setLoginEmail] =useState("")
const [loginPassword, setLoginPassword] =useState("")

const [users, setUsers]=useState({})

useEffect(()=>{
  onAuthStateChanged(auth, (currentUser)=>{
  setUsers(currentUser);
});
})




  const Register = async () =>{

try{
  const user =   await createUserWithEmailAndPassword(auth, registerEmail,registerPassword,registerName,registerPhone)
  console.log(user)
}
 catch(error){
   console.log(error.message)
 }
  } 

   const Login = async () =>{
    try{
      const user =   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    }
     catch(error){
       console.log(error.message)
     }
  }  

   const LogOut = async () =>{
await signOut(auth);
  }




  return (
<>
<div className="container">
  <form className="Login">
  <h2>Login</h2>

<input type="email" placeholder="Email/Phone No" onChange={(event)=>{setLoginEmail(event.target.value)}} required />
<input type="password" placeholder="Password"  onChange={(event)=>{setLoginPassword(event.target.value)}}   required     />
<button type='button' onClick={Login}>Login</button>
</form>
<form className="Registation">
  <h2>Register</h2>
  <input type="text" placeholder="Name" onChange={(event)=>{setRegisterName(event.target.value)}} required />
  <input type="tel" placeholder="Phone No" maxlength="10" onChange={(event)=>{setRegisterPhone(event.target.value)}} required />
  <input type="email" placeholder="Email" onChange={(event)=>{setRegisterEmail(event.target.value)}} required/>
  <input type="password" placeholder="Password" onChange={(event)=>{setregisterPassword(event.target.value)}} required/>

<button type='button' onClick={Register}>Register</button>
</form>
<div className="loggeduser">
  <h2>User Logged In:</h2>
  {users?.email}
  <button onClick={LogOut}>Logout</button>
</div>
</div>


</>
  );
}

export default App;
