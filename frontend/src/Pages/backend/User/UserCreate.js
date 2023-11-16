import { useState } from "react";
import { Link } from "react-router-dom";
import userservice from "../../../Services/UserService";

function UserCreate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [roles, setRoles] = useState('');
    const [status, setStatus] = useState(1);

    async function userStore(event){
        event.preventDefault();
        var user = new FormData();
        user.append("name",name);
        user.append("email",email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        await userservice.create(user)
        .then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={userStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM NGƯỜI DÙNG
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/user" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên người dùng</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} input="email" value={email} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="phone">Số điện thoại</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} input="phone" value={phone} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="username">username</label>
                                <textarea onChange={(e) => setusername(e.target.value)} input="username" value={username} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="password">Mật khẩu</label>
                                <textarea onChange={(e) => setPassword(e.target.value)} input="password" value={password} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="address">Địa chỉ</label>
                                <textarea onChange={(e) => setAddress(e.target.value)} input="address" value={address} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="roles">Vai trò</label>
                                <textarea onChange={(e) => setRoles(e.target.value)} input="roles" value={roles} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default UserCreate;