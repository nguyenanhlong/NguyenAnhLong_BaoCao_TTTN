import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import menuservice from "../../../Services/MenuService"
import { useEffect, useState } from 'react';

function MenuShow() {
    const { id } = useParams("id");
    const [menu, setMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                setMenu(result.data.data);
            });
        })();
    }, []);

    return (
        <section className="card">
            <form onSubmit={MenuShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT</strong>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/admin/menu" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/menu/update/" + menu.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button className="btn btn-sm btn-outline-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger"style={{width:300}}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Tên</td>
                            <td>{menu.name}  </td>
                        </tr>
                        <tr>
                            <td>link</td>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <td>Bảng ID</td>
                            <td>{menu.table_id}  </td>
                        </tr>
                        <tr>
                            <td>Kiểu</td>
                            <td>{menu.type}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{menu.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default MenuShow;