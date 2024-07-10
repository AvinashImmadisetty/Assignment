import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
    const [userId,setUserId] = useState('');
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState('');

    const createAccount = ()=>{
        const UserId = document.getElementById('userId');
        const UserName = document.getElementById('userName');
        const UserPassword = document.getElementById('userPassword');
        const UserConfirmPassword = document.getElementById('userConfirmPassword');
        if(UserPassword.value!==UserConfirmPassword.value)
            alert('Password not match');
        else
        {
            setUserId(UserId.value);
            setUserName(UserName.value);
            setUserPassword(UserPassword.value);
            UserId.value = "";
            UserName.value = "";
            UserPassword.value = "";
            UserConfirmPassword.value = "";
        }
    }

    const data={
        id:userId,
        userName:userName,
        password:userPassword
    }

    useEffect(()=>{
        if(data.id!=='' && data.userName!=='' && data.Password!=='')
            axios.post('http://localhost:8080/api/signup',data).then(res=>alert(res.data)).catch(err=>alert(err.response.data));
    },[data]);

    return ( 
        <div className='registerPage'>
            <h3>Registration</h3>
            <label htmlFor='userId'>UserId:
                <input type='text' name='userId' id='userId' placeholder='User Id'/>
            </label>
            <label htmlFor="userName">UserName:
                <input type='text' name='userName' id='userName' placeholder='User Name'/><br/>
            </label>
            <label htmlFor="password">Password:
                <input type='password' name='userPassword' id='userPassword' placeholder='Password'/><br/>    
            </label>
            <label htmlFor="confirmPassword">Confirm Password:
                <input type='password' name='userConfirmPassword' id='userConfirmPassword' placeholder='Confirm Password'/><br/>    
            </label>
            <button className='registerButton' onClick={createAccount}>Create Account</button>
        </div>
     );
}

export default Signup;