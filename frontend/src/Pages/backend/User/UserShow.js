import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import userservice from "../../../Services/UserService";


function UserShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [user,setUser]=useState([]);
    useEffect(function(){
        (async function(){
            await userservice.getById(id).then(function(result){//// show controller 
                setUser(result.data.data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT NGƯỜI DÙNG</strong></div>
                        <div className="col-md-6 d-flex justify-content-end " >
                            <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/user/update/"+user.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2 mr-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2 mr-2">Lưu</button>
                            <Link to="/admin/user" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                 <tr>
                            <td width={250}>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Tên người dùng</td>
                            <td>{user.name}  </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}  </td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td>{user.phone}  </td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>{user.address}  </td>
                        </tr> 
                        <tr>
                            <td>username</td>
                            <td>{user.username}  </td>
                        </tr>
                        <tr>
                            <td>Vai trò</td>
                            <td>{user.roles}  </td>
                        </tr>
                       
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{user.status}  </td>
                        </tr>
                    </tbody>
                 </table>
             </div>

        </div>
     );
}

export default UserShow;