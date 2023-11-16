import { Link,useParams,useNavigate } from "react-router-dom";
import userservice from "../../../Services/UserService";
import { useEffect,useState } from "react";

function UserUpdate() {
    //
    const {id} = useParams("id");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [roles, setRoles] = useState('');
    const [status, setStatus] = useState(1);
    useEffect(function(){
        (async function(){
            await userservice.getById(id).then(function(result)
            {
                const tmp=result.data.data;
                setName(tmp.name)
                setEmail(tmp.email)
                setPhone(tmp.phone)
                setusername(tmp.username)
                setPassword(tmp.password)
                setAddress(tmp.address)
                setRoles(tmp.roles)
                setStatus(tmp.status)
               
            });
        })();
    },[]);
    //
    const navigate=useNavigate();
  
    

    async function userEdit(event) 
    {
        event.preventDefault();
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        await userservice.update(user,id).then(function (res) {
          alert(res.data.message);
          navigate('/admin/user',{replace:true});
      });
       
    }
    
    return (
        <form onSubmit={userEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">SỬA THƯƠNG HIỆU</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button type="submit" className="btn btn-sm btn-success me-3 mr-2">
                Lưu
              </button>
              <Link to="/admin/user" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tên thương hiệu</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <textarea
                  input="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Số điện thoại</label>
                <textarea
                  input="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="username">username</label>
                <textarea
                  input="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <textarea
                  input="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <textarea
                  input="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="roles">Vai trò</label>
                <textarea
                  input="roles"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}className="form-control"
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      );
  }
  
  export default UserUpdate;