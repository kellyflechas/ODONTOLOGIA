import React from "react";

const Login =()=>{
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required/>
        </div>

        <div className="input-box">
          <input type="Contraseña" placeholder="Contraseña" required/>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox"/>Recordar contraseña</label>
          <a href="#">Olvide contraseña</a>
        </div>

        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login;