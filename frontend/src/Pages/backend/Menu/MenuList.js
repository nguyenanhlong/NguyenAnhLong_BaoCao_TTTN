import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import menuservice from "../../../Services/MenuService";
import { useEffect, useState } from "react";


function MenuList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [menus, setMenu] = useState([]);
    useEffect(function () {
      (async function () {
        await menuservice.getAll().then(function (result) {
            setMenu(result.data.menus);
        });
      })();
    }, [status_delete]);
    function menuDelete($id) {
        menuservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">SẢN PHẨM</strong>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-sm btn-success" to="/admin/menu/create">
                            <FaPlus/>Thêm
                        </Link>
                        </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Link</th>
                            <th>Bang ID</th>
                            <th>Kieu</th>
                            <th>Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map(function(menu,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>
                                    {menu.id}
                                </td>
                                <td>
                                    {menu.name}
                                </td>
                                <td>
                                    {menu.link}
                                </td>
                                <td>
                                    {menu.table_id}
                                </td>
                                <td>
                                    {menu.type}
                                </td>
                                <td>
                                    {menu.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/menu/show/"+menu.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+menu.id}>
                                        <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => menuDelete(menu.id)}><FaTrash /></button>
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
export default MenuList;