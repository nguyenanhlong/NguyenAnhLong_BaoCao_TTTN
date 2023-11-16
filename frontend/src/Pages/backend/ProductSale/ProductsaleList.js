import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import productsaleservice from "../../../Services/ProductSaleService";
import { useEffect, useState } from "react";


function ProductSaleList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [productsSale, setProductSale] = useState([]);
    useEffect(function () {
      (async function () {
        await productsaleservice.getAll().then(function (result) {
            setProductSale(result.data.data);
        });
      })();
    }, [status_delete]);
    function productSaleDelete($id) {
        productsaleservice.remove($id)
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
                        <strong className="text-primary">SẢN PHẨM SALE</strong>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-sm btn-success" to="/admin/productSale/create">
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
                            <th>ID Product</th>
                            <th>Giá Sale</th>
                            <th>Qty</th>
                            <th>Ngày begin</th>
                            <th>ngay End</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsSale.map(function(productSale,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>
                                    {productSale.product_id}
                                </td>
                                <td>
                                    {productSale.pricesale}
                                </td>
                                <td>
                                    {productSale.qty}
                                </td>
                                <td>
                                    {productSale.date_begin}
                                </td>
                                <td>
                                    {productSale.date_end}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1 mr-2" to={"/admin/productSale/show/"+productSale.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1 mr-2" to={"/admin/productSale/update/"+productSale.id}>
                                    <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => productSaleDelete(productSale.id)}><FaTrash /></button>

                                </td>
                                <td>
                                    {productSale.id}
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
export default ProductSaleList;