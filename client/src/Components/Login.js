import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const navigate = useNavigate();

    const verifyCredentials = ()=>{
        const UserName = document.getElementById('userName');
        const UserPassword = document.getElementById('userPassword');
        setUserName(UserName.value);
        setUserPassword(UserPassword.value);
        UserName.value = "";
        UserPassword.value = "";
    }

    const data = {
        id:userName,
        password:userPassword
    }

    useEffect(()=>{
        if(data.userName!=='' && data.password!=='')
            axios.post('http://localhost:8080/api/login',data).then(res=>{
                if(res.status===200)
                    navigate('/');
                else
                    alert(res.status);    
            }).catch(err=>alert(err.response.data));
    },[data]);
    
    return ( 
        <div className='loginPage'>
            <h3>Login</h3>
            <label htmlFor="userName">UserId:
                <input type='text' name='userName' id='userName' placeholder='User Id'/><br/>
            </label>
            <label htmlFor="password">Password:
                <input type='password' name='userPassword' id='userPassword' placeholder=''/><br/>    
            </label>
            <button className='loginButton' onClick={verifyCredentials}>Login</button>
        </div>
     );
}

export default Login;