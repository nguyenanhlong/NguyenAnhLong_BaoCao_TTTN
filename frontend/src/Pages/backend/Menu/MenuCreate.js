import { useState } from "react";
import { Link } from "react-router-dom";
import menuservice from "../../../Services/MenuService";

function MenuCreate() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [table_id, setTableId] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState(1);
    async function menuStore(event){
        event.preventDefault();
        var menu = new FormData();
            menu.append ("name",name);
            menu.append ("link" ,link);
            menu.append ("table_id" ,table_id);
            menu.append ("type" ,type);
            menu.append ("status",status);
        
        try {
            await menuservice.create(menu).then(function (res) {
              alert(res.data.message);
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }

    return (
        <form onSubmit={menuStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Link</label>
                                <input onChange={(e) => setLink(e.target.value)} type="text" name="link" value={link} className="form-control" />
                            </div>                            
                            <div className="md-3">
                                <label htmlFor="name">Bảng Id</label>
                                <input onChange={(e) => setTableId(e.target.value)} type="text" name="table_id" value={table_id} className="form-control" />
                            </div>                            
                            <div className="md-3">
                                <label htmlFor="name">Kiểu</label>
                                <input onChange={(e) => setType(e.target.value)} type="text" name="type" value={type} className="form-control" />
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

export default MenuCreate;