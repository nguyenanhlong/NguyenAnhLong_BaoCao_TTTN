import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userservice from "../../../Services/UserService";
import gif from "../../../assets/giphy.gif";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function login(e){
    e.preventDefault();
    var user = new FormData();
    user.append('username',username);
    user.append('password',password);
    user.append('roles',2);
    await userservice.login(user).then(function(res){
      if(res.data.success === true){
        alert('thanh cong');
        navigate('/page-profile-main');
      }else{
        alert('tai khoan hoac mat khau sai');
      }
    });
  }

  return ( 
    <section className="section-conten padding-y" style={{ minHeight: "84vh", backgroundImage:`url(${gif})`, backgroundRepeat: "none", backgroundSize: "cover"}}>
    {/* ============================ COMPONENT LOGIN   ================================= */}
    <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>
      <div className="card-body">
        <h4 className="card-title mb-4">Sign in</h4>
        <form method="post" onSubmit={login}>
          <a href="#" className="btn btn-facebook btn-block mb-2">
            {" "}
            <i className="fab fa-facebook-f" /> &nbsp; Sign in with Facebook
          </a>
          <a href="#" className="btn btn-google btn-block mb-4">
            {" "}
            <i className="fab fa-google" /> &nbsp; Sign in with Google
          </a>
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Username"
              type="text"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Password"
              type="password"
              value={password} onChange={(e) => setPassword(e.target.value)}

            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <a href="#" className="float-right">
              Forgot password?
            </a>
            <label className="float-left custom-control custom-checkbox">
              {" "}
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
              />{" "}
              <div className="custom-control-label"> Remember </div>{" "}
            </label>
          </div>{" "}
          {/* form-group form-check .// */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Login
            </button>
          </div>{" "}
          {/* form-group// */}
        </form>
      </div>{" "}
      {/* card-body.// */}
    </div>{" "}
    {/* card .// */}
    <p className="text-center mt-4">
      Don't have account? <a href="page-user-register">Sign up</a>
    </p>
    <br />
    <br />
    {/* ============================ COMPONENT LOGIN  END.// ================================= */}
  </section>

   );
}

export default Login;
