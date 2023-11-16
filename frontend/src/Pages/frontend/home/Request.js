import { Component } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/banners/request.jpg";
class Request extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Sản phẩm theo yêu cầu</h4>
                </header>
                <div className="row">
                    <div className="col-md-8">
                        <div
                            className="card-banner banner-quote overlay-gradient"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                              }}
                        >
                            <div className="card-img-overlay white">
                                <h3 className="card-title">
                                    Một cách dễ dàng để gửi yêu cầu đến các nhà cung cấp
                                </h3>
                                <p className="card-text" style={{ maxWidth: 400 }}>
                                   Cung cấp thông tin đầy đủ về sản phẩm mà bạn mong muốn
                                </p>
                                <Link href="" className="btn btn-primary rounded-pill">
                                    Tìm hiểu thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* col // */}
                    <div className="col-md-4">
                        <div className="card card-body">
                            <h4 className="title py-3">Bạn Cần Sản Phẩm gì ?</h4>
                            <form>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name=""
                                        placeholder="Nhập Sản phẩm mong muốn"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            className="form-control"
                                            placeholder="Mức Giá"
                                            name=""
                                            type="text"
                                        />
                                        <select className="custom-select form-control">
                                            <option>$</option>
                                            <option>Đồng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group text-muted">
                                    <p>Chọn loại yêu cầu:</p>
                                    <label className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="option1"
                                        />
                                        <span className="form-check-label">Yêu cầu giá</span>
                                    </label>
                                    <label className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="option2"
                                        />
                                        <dspaniv className="form-check-label">Yêu cầu mẫu</dspaniv>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* col // */}
                </div>
                {/* row // */}
            </section>

        );
    }
}
export default Request;