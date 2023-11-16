

import { Link, useNavigate } from "react-router-dom";

function CategoryBanner() {
    let navigate = useNavigate();
    return (
        <>
            <section class="section-index-bannerlink">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 ">
                            <div class="bannerlink-block content-item" >
                                <div class="bannerlink-block--image ">
                                    <Link to="/page-listing-grid/nendoroid/all/1" aria-label="Nendoroid">
                                        <img src={require("../../../assets/images/banners/categorybanner_1_img.jpg")} className="img-bg" ></img>
                                    </Link>
                                </div>
                                <div class="bannerlink-block--caption">
                                    <p class="tagline">Bộ sưu tập</p>
                                    <h2 class="htitle">Nendoroid</h2>
                                    <p class="txtdesc" style={{ maxWidth: 300 }}>Dòng chibi figure được yêu thích nhất, nhiều gương mặt, thoả sức tạo dáng</p>
                                    <p class="action">
                                        <button class="custom-btn btn-5" onClick={() => navigate('/page-listing-grid/nendoroid/1')}>
                                            <span>Xem ngay <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                        </button>
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 ">
                            <div class="bannerlink-block content-item" >
                                <div class="bannerlink-block--image ">
                                    <Link to="/page-listing-grid/pop-up-parade/all/1" aria-label="Pop Up Parade">
                                        <img src={require("../../../assets/images/banners/categorybanner_2_img.jpg")} className="img-bg" ></img>
                                    </Link>
                                </div>
                                <div class="bannerlink-block--caption">
                                    <p class="tagline">Bộ sưu tập</p>
                                    <h2 class="htitle">Pop Up Parade</h2>
                                    <p class="txtdesc" style={{ maxWidth: 300 }}>Dòng scale figure kích thước sinh viên, giá tiểu học</p>
                                    <p class="action">                                       
                                        <button class="custom-btn btn-5" onClick={() => navigate('/page-listing-grid/pop-up-parade/1')}>
                                            <span>Xem ngay <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryBanner;


