import { Link, useNavigate, useParams } from "react-router-dom";
import productsaleservice from "../../../Services/ProductSaleService";
import { useEffect, useState } from "react";

function ProductSaleUpdate() {
    //
    const { id } = useParams("id");
    const [product_id, setProductId] = useState('');
    const [price_sale,setPriceSale] = useState('');
    const [qty,setQty] = useState('');
    const [day_begin, setDayBegin] = useState("");
    const [day_end, setDayEnd] = useState("");
    useEffect(function () {
        (async function () {
            await productsaleservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                setProductId(tmp.product_id)
                setPriceSale(tmp.price_sale)
                setQty(tmp.qty)
                setDayBegin(tmp.day_begin)
                setDayEnd(tmp.day_end)
            });
        })();
    }, []);
    //
    const navigate = useNavigate();
    const [productsSale, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getAll().then(function (result) {
                setProducts(result.data.data);
            });
        })();
    }, []);


    async function productEdit(event) {
        event.preventDefault();
        var productSale = new FormData();
        productSale.append("product_id", product_id);
        productSale.append ("price_sale",price_sale);
        productSale.append ("qty",qty);
        productSale.append("day_begin", day_begin);
        productSale.append("day_end", day_end);
    }

    return (
        <form onSubmit={productEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">THÊM DANH MỤC</strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit" className="btn btn-sm btn-success me-3 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="md-3">
                                <label htmlFor="parent_id">ID PRODUCT</label>
                                <input onChange={(e) => setProductId(e.target.value)} value={product_id} name="product_id" className="form-control"></input>
                            </div>

                            <div className="md-3">
                                <label htmlFor="price_sale">Giá Đã Giảm</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="text" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="qty">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="text" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="day_begin">Day begin</label>
                                <input
                                    name="day_begin"
                                    value={day_begin}
                                    onChange={(e) => setDayBegin(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="day_end">Day end</label>
                                <input
                                    name="day_end"
                                    value={day_end}
                                    onChange={(e) => setDayEnd(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProductSaleUpdate;