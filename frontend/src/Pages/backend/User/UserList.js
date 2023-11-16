import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import userservice from "../../../Services/UserService";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUser] = useState([]);
  const [status_delete, setStatus_delete] = useState([]);
  const [roles, setRoles] = useState(2);
  useEffect(
    function () {
      (async function () {
        await userservice.getAll(roles).then(function (result) {
          setUser(result.data.data);
        });
      })();
    },
    [status_delete,roles]
  );
  console.log(users);
  function userDelete($id) {
    userservice.remove($id).then(function (res) {
      setStatus_delete(res.data.data.id);
      alert(res.data.message);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">NGƯỜI DÙNG</strong>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={roles}
              onChange={(e)=>setRoles(e.target.value)}  
            >
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <Link className="btn btn-sm btn-success" to="/admin/user/create">
              <FaPlus />
              Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body text-center">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>username</th>
              <th>Vai trò</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {users.map(function (user, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>

                  <td>{user.username}</td>
                  <td>{(()=>{
                    switch (user.roles){
                        case "1":
                            return "Admin";
                        default:
                            return "User";
                    }
                  })()}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1 mr-2"
                      to={"/admin/user/show/" + user.id}
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      className="btn btn-sm btn-primary me-1 mr-2"
                      to={"/admin/user/update/" + user.id}
                    >
                      <FaEdit />
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => userDelete(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserList;