import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../Config";
import categoryservice from "../../Services/CategoryService";
import productservice from "../../Services/ProductService";
function Header() {
  const [categorys, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.data);
      });
    })();
  }, []);
  useEffect(
    function(){
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var searchBox = new FormData();
          searchBox.append("search", search);
          searchBox.append("limit", -1);
          searchBox.append("page", -1);
          const result = await productservice.productBySearch(searchBox);
          setProduct(result.data.data);
        }
        fetchItems();
      },1500);
      return () => clearTimeout (delayDebounceFn);
    },
    [search]
  );
  return (<header className="section-header">
    <section className="header-main border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-3 col-md-12">
            <Link to="/" className="brand-wrap">
              <img className="logo" src={require("../../assets/images/logo.jpg")} />
            </Link>
            {/* brand-wrap.// */}
          </div>
          <div className="col-xl-6 col-lg-5 col-md-6">
            <form action="#" className="search-header">
              <div className="input-group w-100">
                {/*
              <select
                className="custom-select border-right"
                name="category_name"
              >
                <option value>All type</option>
                <option value="codex">Special</option>
                <option value="comments">Only best</option>
                <option value="content">Latest</option>
              </select>
              */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bạn đang tìm gì"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-danger" type="submit">
                    <i className="fa fa-search" />
                  </button>
                  {search !== "" &&
                    products != null &&
                    search.length >= 3 ? (
                  <ul
                        className="search-results"
                        style={{ position: "absolute", left: 0, top: 40 }}
                      >
                        {products.map((item, index)=>{
                          return(
                        <li key={index}>
                          <Link
                            to={`/product-detail/${item.slug}`}
                            className="search-link"
                          >
                            <span>
                              <img className="thumbnail"
                                src={`${urlImage}product/${item.image}`}
                                alt=""
                              />
                            </span>
                            <span className="title">{item.name}</span>
                          </Link>
                        </li>
                        );
                        })}
                      </ul>) : ""}
                  
                </div>
              </div>
            </form>
            {/* search-wrap .end// */}
          </div>
          {/* col.// */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="widgets-wrap float-md-right">
              <div className="widget-header mr-3">
                <Link to="/page-profile-main" className="widget-view">
                  <div className="icon-area">
                    <i className="fa fa-user" />
                    <span className="notify">3</span>
                  </div>
                  <small className="text"> My profile </small>
                </Link>
              </div>{" "}
              <div className="widget-header mr-3">
                <Link to="#" className="widget-view">
                  <div className="icon-area">
                    <i className="fa fa-comment-dots" />
                    <span className="notify">1</span>
                  </div>
                  <small className="text"> Message </small>
                </Link>
              </div>{" "}
              <div className="widget-header mr-3">
                <Link to="/page-profile-orders" className="widget-view">
                  <div className="icon-area">
                    <i className="fa fa-store" />
                  </div>
                  <small className="text"> Orders </small>
                </Link>
              </div>{" "}
              <div className="widget-header">
                <Link to="/page-shopping-cart" className="widget-view">
                  <div className="icon-area">
                    <i className="fa fa-shopping-cart" />
                  </div>
                  <small className="text"> Cart </small>
                </Link>
              </div>
            </div>
            {/* widgets-wrap.// */}
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </div>
      {/* container.// */}
    </section>
    {/* header-main .// */}
    <nav className="navbar navbar-main navbar-expand-lg border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
          aria-controls="main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >

                <i className="fa fa-bars text-muted mr-2" /> Trang liên kết
              </Link>
              <div className="dropdown-menu dropdown-large">
                <nav className="row">
                  <div className="col-6">
                    <Link to="/">Home page 1</Link>
                    <Link to="/page-index-2">Home page 2</Link>
                    <Link to="/page-category">All category</Link>
                    <Link to="/page-listing-list">Listing list</Link>
                    <Link to="/page-listing-grid">Listing grid</Link>
                    <Link to="/page-shopping-cart">Shopping cart</Link>
                    <Link to="/product-detail/1">Product detail</Link>
                    <Link to="/page-content">Page content</Link>
                    <Link to="/page-user-login">Page login</Link>
                    <Link to="/page-user-register">Page register</Link>
                  </div>
                  <div className="col-6">
                    <Link to="/page-profile-main">Profile main</Link>
                    <Link to="/page-profile-orders">Profile orders</Link>
                    <Link to="/page-profile-seller">Profile seller</Link>
                    <Link to="/page-profile-wishlist">Profile wishlist</Link>
                    <Link to="/page-profile-setting">Profile setting</Link>
                    <Link to="/page-profile-address">Profile address</Link>
                    <Link to="rtl-page-index-1">RTL home page</Link>
                    <Link to="/admin/login">Admin</Link>
                    <Link to="/page-components" target="_blank">
                      More components
                    </Link>
                  </div>
                </nav>
                {/*  row end .// */}
              </div>
              {/*  dropdown-menu dropdown-large end.// */}
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >

                <i className="text-muted mr-2" /> Danh mục
              </Link>
              <div className="dropdown-menu dropdown-large">
                <nav className="row">
                  <div className="col">
                    {categorys.map((item, index)=>{
                      return <Link key={index} to={`/page-listing-grid/${item.slug}/all/1`}>{item.name}</Link>;
                    })}
                  </div>

                </nav>
                {/*  row end .// */}
              </div>
              {/*  dropdown-menu dropdown-large end.// */}
            </li>
          </ul>
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/lien-he">
                Liên hệ
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="http://example.com"
                data-toggle="dropdown"
              >
                English
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                    {categorys.map((item, index)=>{
                      return <Link key={index} to={`/page-listing-grid/${item.slug}/1`}>{item.name}</Link>;
                    })}
              </div>
            </li>
          </ul>
        </div>
        {/* collapse .// */}
      </div>
      {/* container .// */}
    </nav>
  </header>);
}

export default Header;


