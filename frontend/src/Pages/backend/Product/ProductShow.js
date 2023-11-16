import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import productservice from "../../../Services/ProductService"
import { useEffect, useState } from 'react';
import { urlImage } from '../../../Config';
function ProductShow() {
    const { id } = useParams("id");
    const [product, setProduct] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                setProduct(result.data.data);
            });
        })();
    }, []);

    return (
        <section className="card">
            <form onSubmit={ProductShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT SẢN PHẨM</strong>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/admin/product" className="btn btn-sm btn-outline-success me-1 mr-2">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/product/update/" + product.id} className="btn btn-sm btn-outline-primary me-1 mr-2">
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
                            <td>ID Danh Mục</td>
                            <td>{product.category_id}  </td>
                        </tr>
                        <tr>
                            <td>ID Thương Hiệu</td>
                            <td>{product.brand_id}  </td>
                        </tr>
                        <tr>
                            <td>Tên Sản Phẩm</td>
                            <td>{product.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{product.slug}  </td>
                        </tr>
                        <tr>
                            <td>Giá Gốc</td>
                            <td>{product.price}  </td>
                        </tr>
                        <tr>
                            <td>Số Lượng</td>
                            <td>{product.qty}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'product/'+product.image} alt={product.name} /></td>
                        </tr>
                        <tr>
                            <td>Hình 2</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'product/'+product.image2} alt={product.name} /></td>
                        </tr>
                        <tr>
                            <td>Thông tin SP</td>
                            <td>{product.detail}  </td>
                        </tr>
                        <tr><td>Metakey</td>
                            <td>{product.metakey}  </td>
                        </tr>
                        <tr>
                            <td>Metadesc</td>
                            <td>{product.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{product.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default ProductShow;