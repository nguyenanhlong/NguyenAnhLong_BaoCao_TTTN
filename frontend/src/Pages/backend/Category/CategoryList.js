import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import categoryservice from "../../../Services/CategoryService";
import { useEffect, useState } from "react";
import { urlImage } from '../../../Config';


function CategoryList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [categories, setCategory] = useState([]);
    useEffect(function () {
      (async function () {
        await categoryservice.getAll().then(function (result) {
          setCategory(result.data.data);
        });
      })();
    }, [status_delete]);
    function categoryDelete($id) {
        categoryservice.remove($id)
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
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-sm btn-success" to="/admin/category/create">
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
                            <th>Hình ảnh</th>
                            <th>Tên danh mục</th>
                            <th>Danh mục cha</th>
                            <th>Slug</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(function(category,index){
                            return(
                                <tr key={index}>
                                    <td>
                                    </td>
                                <td>
                                    <img src={urlImage +'category/'+ category.image} width={50}/>
                                </td>
                                <td>
                                    {category.name}
                                </td>
                                <td>
                                    {category.parent_id}
                                </td>
                                <td>
                                    {category.slug}
                                </td>
                                <td>
                                    {category.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/category/show/"+category.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/category/update/"+category.id}>
                                        <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => categoryDelete(category.id)}><FaTrash /></button>
                                </td>
                                <td>
                                    {category.id}
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
export default CategoryList;