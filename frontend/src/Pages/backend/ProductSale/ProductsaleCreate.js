import { useState } from "react";
import { Link } from "react-router-dom";
import productsaleservice from "../../../Services/ProductSaleService";

function ProductSaleCreate() {
    const [product_id, setProductId] = useState(0);
    const [price_sale, setPriceSale] = useState('');
    const [qty,setQty] = useState('');
    const [day_begin, setDayBegin] = useState('');
    const [day_end, setDayEnd] = useState('');
    async function productStore(event){
        event.preventDefault();
        var product = new FormData();
            product.append ("product_id",product_id);
            product.append ("qty",qty);
            product.append ("price_sale",price_sale);
            product.append ("day_begin",day_begin);
            product.append ("day_end",day_end);
        
        try {
            await productsaleservice.create(product).then(function (res) {
              alert(res.data.message);
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }

    return (
        <form onSubmit={productStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/productSale" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">ID PRODUCT</label>
                                    <input onChange={(e) => setProductId(e.target.value)} value={product_id} name="product_id" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-9">

                            <div className="md-3">
                                <label htmlFor="price_sale">Giá Sale</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="text" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="qty">So luong</label>
                                <input onChange={(e) => setQty(e.target.value)} type="text" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="day_begin">Day Begin</label>
                                <input onChange={(e) => setDayBegin(e.target.value)} type="date" name="day_begin" value={day_begin} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="day_end">Day End</label>
                                <input onChange={(e) => setDayEnd(e.target.value)} type="date" name="day_end" value={day_end} className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default ProductSaleCreate;