import "./login.scss"

const Login = ({login,register,timerContent}) =>{
   return(
    <div id = "login-page">
        <div onClick = {() => {document.getElementById("login-page").style.display = "none";document.getElementById("covering").style.display = "none"}}
             className = "close-btn">
            <a ><i className="fa fa-times-circle" aria-hidden="true"></i></a>
        </div>
        <div className = "login-title">
            Log in
        
        </div>


        <div className = "login-form">
            
                <div className = "login-input">
                {/* <label>User Name:</label> */}
                <input id = "name" className ="username" type = "text"  placeholder="username"/>
                
                </div>
                

                <div className = "login-input">
                {/* <label>Password: </label> */}
                <input id = "passport" className = "password" type = "password"  placeholder="password"/>
               
                </div>
                <div id = "reminder">{timerContent}</div>
                <div className="login-btn-div">
                <button className = "login-btn" id = "login" 
                        onClick={()=> login(document.getElementsByClassName("username").value, document.getElementsByClassName("password").value)}>
                    Log in
                </button>
                <button className = "register" id = "register"
                        onClick={()=> register(document.getElementsByClassName("username").value, document.getElementsByClassName("password").value)}>
                    register
                </button>
                </div>
           
        </div>

    </div>

   ) 
}

export default Login


