import { useEffect, useState } from "react";
import categoryservice from "../../../Services/CategoryService";
import brandservice from "../../../Services/BrandListService";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../Config";
import productservice from "../../../Services/ProductService";

function CategoryGridView() {
  const [viewtype, setViewType] = useState(true);
  const { parent } = useParams("parent");
  const { children } = useParams("children");
  const { page } = useParams("page");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [products_total, setProducts_Total] = useState([]);
  useEffect(
    function () {
     const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await categoryservice.getBySlug(parent);
          setCategories(result.data.data);
          const result1 = await brandservice.getAll();
          setBrands(result1.data.data);
        }
        fetchItems();
      }, 700);
      return () => clearTimeout(delayDebounceFn);
    },
    [parent]
  );
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await productservice.getProductsByCatAndBrand(
            parent,
            children,
            selectedBrands,
            page,
            viewtype ? 4 : 12
          );
          setProducts(result.data.data);
          setProducts_Total(result.data.data_total);
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    [children, page, parent, selectedBrands, viewtype]
  );
  
  const grid = () => {
    return (
      <div>
        {/* sect-heading */}
        {products.map((item, index) => {
          return (
            <article className="card card-product-list" key={index}>
              <div className="row no-gutters">
                <aside className="col-md-3">
                  <Link to="#" className="img-wrap">
                    <span className="badge badge-danger"> NEW </span>
                    <img src={`${urlImage}product/${item.image}`} alt="" />
                  </Link>
                </aside>{" "}
                {/* col.// */}
                <div className="col-md-6">
                  <div className="info-main">
                    <Link to="#" className="h5 title">
                      {" "}
                      {item.name}
                    </Link>{" "}
                    {/* rating-wrap.// */}
                    <p className="mb-3">
                      <span className="tag">
                        {" "}
                        <i className="fa fa-check" /> Verified
                      </span>
                    </p>
                    <p>{item.description}</p>
                  </div>{" "}
                  {/* info-main.// */}
                </div>{" "}
                {/* col.// */}
                <aside className="col-sm-3">
                  <div className="info-aside">
                    <div className="price-wrap">
                      <span className="h5 price">${item.price}</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                    <p className="text-muted mt-3">BRAND</p>
                    <p className="mt-3">
                      <Link to="#" className="btn btn-outline-primary mr-2">
                        {" "}
                        <i className="fa fa-cart-plus" /> Add to cart
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <i className="fa fa-heart" /> Save{" "}
                      </Link>
                    </p>
                  </div>{" "}
                  {/* info-aside.// */}
                </aside>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>
          );
        })}
      </div>
    );
  };

  const list = () => {
    return (
      <div className="row">
        {products.map((item, index) => {
          return (
            <div className="col-md-3" key={index}>
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <span className="badge badge-danger"> NEW </span>
                  <img src={`${urlImage}product/${item.image}`} alt="" />
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <Link to="#" className="title mb-2">
                    {item.name}
                  </Link>
                  <div className="price-wrap">
                    <span className="price">${item.price}</span>
                  </div>{" "}
                  {/* price-wrap.// */}
                  <p className="text-muted ">brand</p>
                  <hr />
                  <p className="mb-3">
                    <span className="tag">
                      {" "}
                      <i className="fa fa-check" /> Verified
                    </span>
                  </p>
                  <Link to="#" className="btn btn-outline-primary">
                    {" "}
                    <i className="fa fa-cart-plus"></i> Add to cart{" "}
                  </Link>
                </figcaption>
              </figure>
            </div>
          );
        })}

        {/* col.// */}
      </div>
    );
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        {/* ============================  FILTER TOP  ================================= */}
        <div className="card mb-3">
          <div className="card-body">
            <ol className="breadcrumb float-left">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                className={`breadcrumb-item ${
                  children === "all" ? "active" : ""
                }`}
              >
                {children === "all" ? parent : <Link to="#">{parent}</Link>}
              </li>
              {children !== "all" ? (
                <li className="breadcrumb-item active">{children}</li>
              ) : (
                ""
              )}
            </ol>
          </div>{" "}
          {/* card-body .// */}
        </div>{" "}
        {/* card.// */}
        {/* ============================ FILTER TOP END.// ================================= */}
        <div className="row">
          <aside className="col-md-2">
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_1"
                >
                  {" "}
                  Product type{" "}
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_1">
                <div className="inner">
                  <ul className="list-menu">
                    <li
                      className={
                        children === "all" ? "tw-pointer-events-none" : ""
                      }
                    >
                      <Link to={`/category/${parent}/all/1`}>All products</Link>
                    </li>
                    {categories.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            children === item.slug
                              ? "tw-pointer-events-none"
                              : ""
                          }
                        >
                          <Link to={`/category/${parent}/${item.slug}/1`}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>{" "}
            {/* filter-group  .// */}
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_2"
                >
                  {" "}
                  Brands{" "}
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_2">
                <div className="inner">
                  {brands.map((item, index) => {
                    return (
                      <label
                        className="custom-control custom-checkbox"
                        key={index}
                      >
                        <input
                          type="checkbox"
                          defaultChecked=""
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands((prevIds) => [
                                ...prevIds,
                                item.id,
                              ]); // Thêm id vào mảng
                            } else {
                              setSelectedBrands((prevIds) =>
                                prevIds.filter((prevId) => prevId !== item.id)
                              ); // Loại bỏ id khỏi mảng
                            }
                          }}
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          {item.name}
                          <b className="float-right">
                            <img className="icon-brand-sm col-7" src={`${urlImage}brand/${item.image}`} alt="" />
                          </b>
                        </div>
                      </label>
                    );
                  })}
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>{" "}
            {/* filter-group .// */} {/* filter-group .// */}{" "}
            {/* filter-group .// */} {/* filter-group .// */}
          </aside>{" "}
          {/* col.// */}
          <main className="col-md-10">
            <header className="mb-3">
              <div className="form-inline">
                <strong className="mr-md-auto">
                  {products_total.length} items found
                </strong>
                <select className="mr-2 form-control">
                  <option>Latest items</option>
                  <option>Trending</option>
                  <option>Most Popular</option>
                  <option>Cheapest</option>
                </select>
                <div className="btn-group">
                  <button
                    className={`btn btn-light ${viewtype ? "active" : ""}`}
                    onClick={() => setViewType(true)}
                    title="List view"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <button
                    className={`btn btn-light ${!viewtype ? "active" : ""}`}
                    onClick={() => setViewType(false)}
                    title="Grid view"
                  >
                    <i className="fa fa-th" />
                  </button>
                </div>
              </div>
            </header>
            {viewtype ? grid() : list()}

            {/* card-product .// */}
            <nav className="mb-4" aria-label="Page navigation sample">
              <ul className="pagination">
                <li className="page-item disabled">
                  <Link className="page-link" to="#">
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </main>{" "}
          {/* col.// */}
        </div>
      </div>{" "}
      {/* container .//  */}
    </section>
  );
}

export default CategoryGridView;
