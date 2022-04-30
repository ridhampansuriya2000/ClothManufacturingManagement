import React, {useState} from 'react';
import './Signup.css';
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>{
  const history = useHistory()
      const [Fullname,setfullname] = useState("")
      const [Email,setemail] = useState("")
      const [Contact_number,setcontact_number] = useState("")
      const [Password,setpassword] = useState("")
      const PostData = ()=>{
        fetch("/signup",{
          method:"post",
          headers:{
            "Contant-Type":"appliction/json"
          },
          body:JSON.stringify({
            Fullname,
            Email,
            Contact_number,
            Password

          })
        }).then(res=>res.json())
        .then(data=>{
          if(data.error){
            M.toast({html: data.error})
          }
          else{
            M.toast({html:data.message})
            history.push('/Signin')
          }
        })
      }
 return(
  <div class="Signupselection">
  <div class="info">
    <h1 className="signupSection" >Register your self</h1>
    <label1>Enter your information</label1>
      </div>      
            <br/>
            <form  class="signupForm" >
            <br/>
		<ul class="noBullet">
		<li>
          <label> Fullname </label><br/>
          <input  type="text" class="inputFields"  
          value={Fullname}  
          onChange={(e)=>setfullname(e.target.value)} /> <br/>
		</li>
            <label> Email </label><br/>
            <input  type="email" class="inputFields" 
            value= {Email} 
            onChange={(e)=>setemail(e.target.value)} /> <br/>
			
		<li>	
            <label> Contact </label><br />
            <input type="number" class="inputFields"
            value={Contact_number}
            onChange={(e)=>setcontact_number(e.target.value)} /> <br/>
    </li>
            <label> Password</label><br />
            <input type="password" class="inputFields"
            value={Password}
            onChange={(e)=>setpassword(e.target.value)} /> <br/>
             
             
      <button id="join-btn" 
      onClick={()=>PostData()}>Get Started</button>
	</ul>
  </form>
  </div>
 )


}

export default Signup;