import React, {useState, useContext} from 'react'
import {UserContext} from '../UserContext'

const Login = (props) => {

    const{login, setlogin} = useContext(UserContext)
    const[uname, setUname] = useState("")
    const[password, setPassword] = useState("")
    const[loginattempts, setloginAttempts] = useState(3)
    // const[login, setlogin] = useState(false)
    // const[uname, setUname] = useState(UserContext)
    // const[password, setPassword] = useState(UserContext)
    // const[loginattempts, setloginAttempts] = useState(UserContext)


console.log(login);

    const setUnameHandler = (event) => {
       setUname(event)
    }

    const setPasswordHandler = (event) => {
        setPassword(event)
    }

    const checkLoginHandler = () => {
        if(uname === "admin" && password === "root") {
        setlogin(true)
        console.log("Login");
    }else {
        setlogin(false)
        setloginAttempts(loginattempts -1)
        console.log("login fail");
    }
}

    return (
        <div>
        {loginattempts === 0 ? 
        <div>
            <input type="text" placeholder="username" onChange={(event) => setUnameHandler(event.target.value)} disabled="true"/>
            <input type="password" placeholder="password" onChange={(event) => setPasswordHandler(event.target.value)} disabled="true"/>
            <button onClick={() => checkLoginHandler()} disabled="true">Login</button>
            <h1>Sorry, Please try again in 48 hours</h1>
        </div>: <div>
            <input type="text" placeholder="username" onChange={(event) => setUnameHandler(event.target.value)}/>
            <input type="password" placeholder="password" onChange={(event) => setPasswordHandler(event.target.value)}/>
            <button onClick={() => checkLoginHandler()}>Login</button>
            {login?
            props.history.push("/distance") : null
            }
        </div>
}
        </div>
    )
}

export default Login




// import React, {useState, useContext} from 'react'
// import {UserContext} from '../UserContext'



// const Login = () => {

//     const {value, setValue} = useContext(UserContext);
//     const 
   

// const onClickHandler = () => {
//     setValue(true)
// }
//     // const msg = useContext(UserContext);
//     return (
//         <div>
//             {console.log(value)}
//             <button onClick={() => onClickHandler()}>click</button>
//         </div>
//     )
// }

// export default Login
