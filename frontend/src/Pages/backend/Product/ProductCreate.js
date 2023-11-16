import { useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../Services/ProductService";

function ProductCreate() {
    const [name, setName] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    //const [qty,setQty] = useState('');
    const [price, setPrice] = useState('');
    const [detail,setDetail] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);
    async function productStore(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        const image2 = document.querySelector("#image2");
        var product = new FormData();
            product.append ("name",name);
            product.append ("image", image.files[0]);
            product.append ("image2", image2.files[0]);
            product.append ("category_id",category_id);
            product.append ("brand_id",brand_id);
            product.append ("price",price);
            product.append ("detail",detail);
            product.append ("metadesc",metadesc);
            product.append ("metakey",metakey);
            product.append ("status",status);
        
        try {
            await productservice.create(product).then(function (res) {
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
                            <Link to="/admin/product" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price">Giá Gốc</label>
                                <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="detail">Thông tin SP</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} type="text" name="detail" value={detail} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">ID DANH MỤC</label>
                                    <input onChange={(e) => setCategoryId(e.target.value)} value={category_id} name="category_id" className="form-control"></input>
                                <label htmlFor="parent_id">ID THƯƠNG HIỆU</label>
                                    <input onChange={(e) => setBrandId(e.target.value)} value={brand_id} name="brand_id" className="form-control"></input>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="image2">Hình đại diện 2</label>
                                <input type="file" id="image2" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default ProductCreate;