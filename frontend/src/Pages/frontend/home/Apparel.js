import { Component } from "react";
import { Link } from "react-router-dom";
class Apparel extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <>
                <section className="padding-bottom">
                    <header className="section-heading heading-line">
                        <h4 className="title-section text-uppercase">Scale Figure</h4>
                    </header>
                    <div className="card card-home-category">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <div className="home-category-banner bg-light-orange">
                                    <h5 className="title">Best trending clothes only for summer</h5>
                                    <p>
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </p>
                                    <Link href="#" className="btn btn-outline-primary rounded-pill">
                                        Source now
                                    </Link>
                                    <img src={require("../../../assets/images/items/2.jpg")} className="img-bg" />
                                </div>
                            </div>
                            {/* col.// */}
                            <div className="col-md-9">
                                <ul className="row no-gutters bordered-cols">
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Well made women clothes with trending collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/1.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Great clothes with trending collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/2.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Beijing, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">Demo clothes with sample collection</h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/3.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Tokyo, Japan
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/4.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Tashkent, Uzb
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/5.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> London, Britain
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/6.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Well made clothes with trending collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/7.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Hong Kong, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen interior stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/6.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* col.// */}
                        </div>
                        {/* row.// */}
                    </div>
                    {/* card.// */}
                </section>
                {/* =============== SECTION 1 END =============== */}
                {/* =============== SECTION 2 =============== */}
                <section className="padding-bottom">
                    <header className="section-heading heading-line">
                        <h4 className="title-section text-uppercase">Sản phẩm Order</h4>
                    </header>
                    <div className="card card-home-category">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <div className="home-category-banner bg-light-orange">
                                    <h5 className="title">Machinery items for manufacturers</h5>
                                    <p>
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </p>
                                    <Link href="#" className="btn btn-outline-primary rounded-pill">
                                        Source now
                                    </Link>
                                    <img src={require("../../../assets/images/items/14.jpg")} className="img-bg" />
                                </div>
                            </div>
                            {/* col.// */}
                            <div className="col-md-9">
                                <ul className="row no-gutters bordered-cols">
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Well made electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/7.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Tokyo, Japan
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Another demo text for item stuff goes here
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/8.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Hong Kong, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/9.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Tashkent, Uzb
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Group of electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/10.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/11.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/12.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/1.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-6 col-lg-3 col-md-4">
                                        <Link href="#" className="item">
                                            <div className="card-body">
                                                <h6 className="title">
                                                    Home and kitchen electronic stuff collection
                                                </h6>
                                                <img
                                                    className="img-sm float-right"
                                                    src={require("../../../assets/images/items/2.jpg")}
                                                />
                                                <p className="text-muted">
                                                    <i className="fa fa-map-marker-alt" /> Guanjou, China
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* col.// */}
                        </div>
                        {/* row.// */}
                    </div>
                    {/* card.// */}
                </section>
            </>

        );
    }
}
export default Apparel;