import './Registration.css'; 
import {useState} from "react"; 
import {validatePassword, validateEmail} from "../validationUtils";
import {Link} from 'react-router-dom';
 


const SuccessfulRegistration  = (firstName) => {

    return (
        <div>

            <p>{`Cool that you're on Board ${firstName}`}</p>
            <Link to={"/"}><small>{"Back to home"}</small></Link>
        </div>
    );
}


const AllErrors = (password) => {

    const validationErrors = validatePassword(password);
    const errorMessages = ["Password should have at least 8 characters", "Password should have at least one special character",
    "Password should have at least one lowercase letter", "Password should have at least one uppercase letter", "Password should have at least one number"
    ]

    return (
        <ul>
            {validationErrors.map((x, i) => {x && <li>{errorMessages[i]}</li>} )}
        </ul>
      );

}


 
export function Registration() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [isRegistered, setisRegistered] = useState(false);

 const getIsFormValid = () => { 
    return validatePassword(password).filter(x => x === false).length === 0 && validateEmail(email);
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!");
   fetch("http:localhost:9000").then(() => {
    console.log("created account successfully");
    setisRegistered(true);
    }).catch("Someting went wrong please try again later");
   clearForm(); 
   setisRegistered(true);
 }; 

 if (isRegistered){
    return (
        <SuccessfulRegistration firstName={firstName}></SuccessfulRegistration>
    );
 }
 
 return ( 
   <div className="Registration"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
            <div>
                <AllErrors password={password}/>
            </div>
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
         <Link to={'/login'}><small>Already have an Account? Sign in Now.</small></Link>
       </fieldset> 
     </form> 
   </div> 
 ); 
} 
