import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
const SignUp =()=>{
    const [data,setData]=useState({
        NomUtilisateur:"",
        email:"",
       password:"",
        type:""
        
    });
    const[error,setError]=useState("")
    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const url="http//localhost:8080/api/users";
            const {data:res}=await axios.post(url,data);
            //Navigate("/login");
            console.log(res.message);
            
        } catch (error) {
            if(error.response && error.response.status>=400 && error.response.status<=500)
                {
                    setError(error.response.data.message)

                }
            
        }
    }
    return(
    <div className={styles.signup_container}>
<div className={styles.signup_form_container}>
<div className={styles.left}>
<h1> Welcome Back</h1>
    <link to="/login">
    <button type="button" className={styles.white_btn}>
    SignIn
        
     </button>
     </link>
</div>
<div className={styles.rigth}>
   <form clasName={styles.form_container} onSubmit={{handleSubmit}}>
    <h1> creer un compte </h1>
    <input
    type="text"
    placeholder= "NomUtilisateur"
    name='NomUtilisateur'
    onChange={handleChange}
    value={data.NomUtilisateur}
    required
    className={styles.input}
    
    
    
    />
 <input
    type="text"
    placeholder= "type"
    name='type'
    onChange={handleChange}
    value={data.type}
    required
    className={styles.input}
    
    
    
    />
     <input
    type="email"
    placeholder= "email"
    name='email'
    onChange={handleChange}
    value={data.email}
    required
    className={styles.input}
    
    
    
    />
     <input
    type="password"
    placeholder= " password"
    name='password'
    onChange={handleChange}
    value={data.password}
    required
    className={styles.input}
    
    
    
    />
    {error && <div className={styles.error_msg}> {error} </div>}
    <button type="submit" className={styles.green_btn}></button>




   </form>
</div>
        
</div>
        
    </div>


    )
} ;
export default SignUp