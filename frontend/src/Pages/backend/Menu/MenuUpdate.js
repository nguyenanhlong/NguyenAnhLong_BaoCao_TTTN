import { Link,useParams,useNavigate } from "react-router-dom";
import menuservice from "../../../Services/MenuService";
import { useEffect,useState } from "react";

function MenuUpdate() {
    //
    const {id} = useParams("id");
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [table_id, setTableId] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState(1);
    useEffect(function(){
        (async function(){
            await menuservice.getById(id).then(function(result)
            {
                const tmp=result.data.data  ;
                setName(tmp.name)
                setLink(tmp.link)
                setTableId(tmp.table_id)
                setType(tmp.type)
                setStatus(tmp.status)
            });
        })();
    },[]);
    //
    const navigate=useNavigate();
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
        await menuservice.getAll().then(function (result) {
            setMenus(result.data.data);
        });
        })();
    }, []);
    

    async function menuEdit(event) 
    {
        event.preventDefault();
        var menu = new FormData();
        menu.append ("name",name);
        menu.append ("link" ,link);
        menu.append ("table_id" ,table_id);
        menu.append ("type" ,type);
        menu.append ("status",status);
        await menuservice.update(menu,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/menu',{replace:true});
        });
    }
    
    return (
        <form onSubmit={menuEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">THÊM DANH MỤC</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/menu" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Link</label>
                <textarea
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Bảng ID</label>
                <textarea
                  name="table_id"
                  value={table_id}
                  onChange={(e) => setTableId(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Kiểu</label>
                <textarea
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
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
  
  export default MenuUpdate;