import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import brandservice from "../../../Services/BrandListService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../Config";

function BrandList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [brands, setBrand] = useState([]);
    useEffect(function () {
      (async function () {
        await brandservice.getAll().then(function (result) {
          setBrand(result.data.data);
        });
      })();
    }, [status_delete]);
    function brandDelete($id) {
        brandservice.remove($id)
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
                        <Link className="btn btn-sm btn-success " to="/admin/brand/create">
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
                            <th>Tên thương hiệu</th>
                            <th>Slug</th>
                            <th>Hình ảnh</th>
                            <th>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                
                                <td>
                                    {brand.name}
                                </td>
                                <td>
                                    {brand.slug}
                                </td>
                                <td>
                                    <img src={urlImage +'brand/'+ brand.image} width={50}/>
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/brand/show/"+brand.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/brand/update/"+brand.id}>
                                        <FaEdit/>
                                    </Link>
                                        <button className="btn btn-sm btn-danger" onClick={() => brandDelete(brand.id)}><FaTrash /></button>
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
export default BrandList;