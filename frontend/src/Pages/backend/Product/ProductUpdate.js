import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../Services/ProductService";
import { useEffect, useState } from "react";

function ProductUpdate() {
    //
    const { id } = useParams("id");
    const [name, setName] = useState("");
    const [qty,setQty] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [price, setPrice] = useState('');
    const [price_sale,setPriceSale] = useState('');
    const [detail,setDetail] = useState('');
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [sort_order, setSortOder] = useState(0);
    const [status, setStatus] = useState(1);
    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                setName(tmp.name)
                setQty(tmp.qty)
                setCategoryId(tmp.category_id)
                setBrandId(tmp.brand_id)
                setPrice (tmp.price)
                setPriceSale (tmp.price_sale)
                setDetail(tmp.detail)
                setMetakey(tmp.metakey)
                setMetadesc(tmp.metadesc)
                setStatus(tmp.status)
                setSortOder(tmp.sort_order)
            });
        })();
    }, []);
    //
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.data);
            });
        })();
    }, []);


    async function productEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name", name);
        product.append ("qty",qty);
        product.append("category_id", category_id);
        product.append("brand_id", brand_id);
        product.append ("price",price);
        product.append ("price_sale",price_sale);
        product.append ("detail",detail);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("sort_order", sort_order);
        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "");
        }
        else {
            product.append("image", image.files[0]);
        }
        await productservice.update(product, id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/product', { replace: true });
        });
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
                            <div className="mb-3"><label htmlFor="name">Tên danh mục</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="md-3">
                                <label htmlFor="qty">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="text" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price">Giá Gốc</label>
                                <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price_sale">Giá Đã Giảm</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="text" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="detail">Thông tin SP</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} type="text" name="detail" value={detail} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sort_order">Sắp xếp</label>
                                <select
                                    type="text"
                                    name="sort_order"
                                    value={sort_order}
                                    onChange={(e) => setSortOder(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">None</option>
                                    {products.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.sort_order + 1}>
                                                Sau: {cat.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="parent_id">ID DANH MỤC</label>
                                <input onChange={(e) => setCategoryId(e.target.value)} value={category_id} name="category_id" className="form-control"></input>
                                <label htmlFor="parent_id">ID THƯƠNG HIỆU</label>
                                <input onChange={(e) => setBrandId(e.target.value)} value={brand_id} name="brand_id" className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form"></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    type="text"
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} className="form-control"
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

export default ProductUpdate;