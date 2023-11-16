import React, { useState } from "react";
import userservice from "../../../Services/UserService"
import { useNavigate } from "react-router-dom";
import gif from "../../../assets/giphy.gif";


function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [phone, setPhone] = useState('');

  async function register(e){
    if(password === repassword){
      e.preventDefault();
    var user = new FormData();
    user.append('email',email);
    user.append('username',username);
    user.append('name',name);
    user.append('address',address);
    user.append('password',password);
    user.append('phone',phone);
    user.append('roles',2);
    user.append('status',1);

    await userservice.create(user).then(function(res){
      if(res.data.success === true){
        alert('thanh cong');
        navigate('/page-user-login');
      }else{
        alert('tai khoan hoac mat khau sai');
      }
    });
    }else{
      alert('mat khau khong trung khop!');
    }
    
  }
  return ( 
    <section className="section-content padding-y" style={{ backgroundImage:`url(${gif})`, backgroundRepeat: "none", backgroundSize: "cover"}}>
    {/* ============================ COMPONENT REGISTER   ================================= */}
    <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
      <article className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Sign up</h4>
        </header>
        <form method="post" onSubmit={register}>
          <div className="form-row">
            <div className="col form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
            <div className="col form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
          </div>{" "}
          {/* form-row end.// */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>{" "}
          {/* form-group end.// */}
          <div className="form-group">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                className="custom-control-input"
                defaultChecked=""
                type="radio"
                name="gender"
                defaultValue="option1"
              />
              <span className="custom-control-label"> Male </span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                className="custom-control-input"
                type="radio"
                name="gender"
                defaultValue="option2"
              />
              <span className="custom-control-label"> Female </span>
            </label>
          </div>{" "}
          <div className="form-row">
            <div className="col form-group">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
            <div className="col form-group">
              <label>Phone number</label>
              <input type="text" className="form-control" placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
          </div>{" "}
          {/* form-row.// */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Create password</label>
              <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
            <div className="form-group col-md-6">
              <label>Repeat password</label>
              <input className="form-control" type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
            </div>{" "}
            {/* form-group end.// */}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Register
            </button>
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <label className="custom-control custom-checkbox">
              {" "}
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                required
              />{" "}
              <div className="custom-control-label">
                {" "}
                I am agree with <a href="#">terms and contitions</a>
              </div>{" "}
            </label>
          </div>{" "}
          {/* form-group end.// */}
        </form>

      </article>
      {/* card-body.// */}
    </div>{" "}
    {/* card .// */}
    <p className="text-center mt-4 text-white">
      Have an account? <a text-white href="page-user-login">Log In</a>
    </p>
    <br />
    <br />
    {/* ============================ COMPONENT REGISTER  END.// ================================= */}
  </section>
   );
}

export default Register;