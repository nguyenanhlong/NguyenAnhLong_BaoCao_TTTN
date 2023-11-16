import { Component } from "react";
import { Link } from "react-router-dom";
class Deal extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <section className="padding-bottom">
                <div className="card card-deal">
                    <div className="col-heading content-body">
                        <header className="section-heading">
                            <h3 className="section-title">Deals and offers</h3>
                            <p>Hygiene equipments</p>
                        </header>
                        {/* sect-heading */}
                        <div id="countdown" class="countdown">
                            <div class="countdown-number">
                                <span class="days countdown-time">12</span>
                                <span class="countdown-text">Days</span>
                            </div>
                            <div class="countdown-number">
                                <span class="hours countdown-time">5</span>
                                <span class="countdown-text">Hours</span>
                            </div>
                            <div class="countdown-number">
                                <span class="minutes countdown-time">45</span>
                                <span class="countdown-text">Minutes</span>
                            </div>
                            <div class="countdown-number">
                                <span class="seconds countdown-time">2</span>
                                <span class="countdown-text">Seconds</span>
                            </div>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="row no-gutters items-wrap">
                        <div className="col-md col-6">
                            <figure className="card-product-grid card-sm">
                                <Link href="#" className="img-wrap">
                                    <img src={require("../../../assets/images/items/3.jpg")} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link href="#" className="title">
                                        Summer clothes
                                    </Link>
                                    <span className="badge badge-danger"> -20% </span>
                                </div>
                            </figure>
                        </div>
                        {/* col.// */}
                        <div className="col-md col-6">
                            <figure className="card-product-grid card-sm">
                                <Link href="#" className="img-wrap">
                                    <img src={require("../../../assets/images/items/4.jpg")} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link href="#" className="title">
                                        Some category
                                    </Link>
                                    <span className="badge badge-danger"> -5% </span>
                                </div>
                            </figure>
                        </div>
                        {/* col.// */}
                        <div className="col-md col-6">
                            <figure className="card-product-grid card-sm">
                                <Link href="#" className="img-wrap">
                                    <img src={require("../../../assets/images/items/5.jpg")} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link href="#" className="title">
                                        Another category
                                    </Link>
                                    <span className="badge badge-danger"> -20% </span>
                                </div>
                            </figure>
                        </div>
                        {/* col.// */}
                        <div className="col-md col-6">
                            <figure className="card-product-grid card-sm">
                                <Link href="#" className="img-wrap">
                                    <img src={require("../../../assets/images/items/6.jpg")} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link href="#" className="title">
                                        Home apparel
                                    </Link>
                                    <span className="badge badge-danger"> -15% </span>
                                </div>
                            </figure>
                        </div>
                        {/* col.// */}
                        <div className="col-md col-6">
                            <figure className="card-product-grid card-sm">
                                <Link href="#" className="img-wrap">
                                    <img src={require("../../../assets/images/items/7.jpg")} />
                                </Link>
                                <div className="text-wrap p-3">
                                    <Link href="#" className="title text-truncate">
                                        Smart watches
                                    </Link>
                                    <span className="badge badge-danger"> -10% </span>
                                </div>
                            </figure>
                        </div>
                        {/* col.// */}
                    </div>
                </div>
            </section>

        );
    }
}
export default Deal;