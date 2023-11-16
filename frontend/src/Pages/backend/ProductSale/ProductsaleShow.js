import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import productsaleservice from "../../../Services/ProductSaleService"
import { useEffect, useState } from 'react';
function ProductSaleShow() {
    const { id } = useParams("id");
    const [productSale, setProductSale] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getById(id).then(function (result) {
                setProductSale(result.data.data);
            });
        })();
    }, []);

    return (
        <section className="card">
            <form onSubmit={ProductSaleShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT SẢN PHẨM</strong>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/admin/productSale" className="btn btn-sm btn-outline-success me-1 mr-2">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/productSale/update/" + productSale.id} className="btn btn-sm btn-outline-primary me-1 mr-2">
                            <FaEdit /> Sửa
                        </Link>
                        <button className="btn btn-sm btn-outline-danger me-1 mr-2">
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
                            <td>ID PRODUCT</td>
                            <td>{productSale.product_id}  </td>
                        </tr>
                        <tr>
                            <td>Gia sale</td>
                            <td>{productSale.price_sale}  </td>
                        </tr>
                        <tr>
                            <td>So luong</td>
                            <td>{productSale.qty}  </td>
                        </tr>
                        <tr>
                            <td>Day Begin</td>
                            <td>{productSale.day_begin}  </td>
                        </tr>
                        <tr>
                            <td>Day End</td>
                            <td>{productSale.day_end}  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    );
}
export default ProductSaleShow;