import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import productservice from "../../../Services/ProductService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../Config";


function ProductList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [products, setProduct] = useState([]);
    useEffect(function () {
      (async function () {
        await productservice.getAll().then(function (result) {
          setProduct(result.data.data);
        });
      })();
    }, [status_delete]);
    function productDelete($id) {
        productservice.remove($id)
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
                        <Link className="btn btn-sm btn-success" to="/admin/product/create">
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
                            <th>Hình ảnh 2</th>
                            <th>Tên Sản Phẩm</th>
                            <th>ID Danh mục</th>
                            <th>Slug</th>
                            <th>Giá</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function(product,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>
                                    <img src={urlImage +'product/'+ product.image} width={50}/>
                                </td>
                                <td>
                                    <img src={urlImage +'product/'+ product.image2} width={50}/>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.category_id}
                                </td>
                                <td>
                                    {product.slug}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    {product.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/product/show/"+product.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/product/update/"+product.id}>
                                    <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => productDelete(product.id)}><FaTrash /></button>

                                </td>
                                <td>
                                    {product.id}
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
export default ProductList;