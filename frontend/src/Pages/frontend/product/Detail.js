import { Link, useParams } from "react-router-dom";
import productservice from "../../../Services/ProductService";
import ProductItem from "../../../components/frontend/productitem";
import { useEffect, useState } from "react";
import { urlImage } from "../../../Config";

function Detail() {
  const { slug } = useParams("slug");
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [img, setImg] = useState("");
  useEffect(function(){
      (async function () {
          try {
              const result = await productservice.getProductBySlug(slug);
              setProduct(result.data.product);
              setProducts(result.data.product_other);
              setImg(result.data.product.image);
          } catch (error) {
              console.error(error);
          }
      })();
  }, [slug]); 
  return (
    <>

      <section className="py-3 bg-light">
        <div className="card-body">
          <ol className="breadcrumb float-left">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li
              className={`breadcrumb-item ${slug === "all" ? "active" : ""
                }`}
            >
              {slug === "all" ? slug : <Link to="#">{slug}</Link>}
            </li>
          </ol>
        </div>{" "}
      </section>
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content bg-white padding-y">
        <div className="container">
          {/* ============================ ITEM DETAIL ======================== */}
          <div className="row">
            <aside className="col-md-6">
              <div className="card">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <div className="current">
                      {" "}
                      <Link to={"#"}>
                        <img src={urlImage +'product/'+ img} />
                      </Link>
                    </div>
                  </div>{" "}
                  {/* slider-product.// */}
                  <div className="thumbs-wrap">
                    <Link to="#">
                      <img className="item-thumb" src={urlImage +'product/'+ product.image} onClick={() => setImg(product.image)}/>
                    </Link>
                    <Link to="#">
                      <img className="item-thumb" src={urlImage +'product/'+ product.image2} onClick={() => setImg(product.image2)}/>
                    </Link>
                  </div>{" "}
                  {/* slider-nav.// */}
                </article>{" "}
                {/* gallery-wrap .end// */}
              </div>{" "}
              {/* card.// */}
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2 className="title mt-3">{product.name}</h2>
                <div className="rating-wrap my-3">
                  <small className="label-rating text-muted">132 reviews</small>

                </div>{" "}
                {/* rating-wrap.// */}
                <div className="mb-3">
                  <var className="price h4">{product.price} $</var>
                </div>{" "}
                {/* price-detail-wrap .// */}
                <p>
                  {product.detail}
                </p>
                <dl className="row">
                  <dt className="col-sm-3">Manufacturer</dt>
                  <dd className="col-sm-9">
                    <a href="#">Great textile Ltd.</a>
                  </dd>
                  <dt className="col-sm-3">Guarantee</dt>
                  <dd className="col-sm-9">2 year</dd>
                  <dt className="col-sm-3">Availabilty</dt>
                  <dd className="col-sm-9">in Stock</dd>
                </dl>
                <div className="form-row  mt-4">
                  <div className="form-group col-md flex-grow-0">
                    <div className="input-group mb-3 input-spinner">
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-plus"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={1}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-minus"
                        >
                          {" "}
                          −{" "}
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  {/* col.// */}
                  <div className="form-group col-md">
                    <a href="#" className="btn  btn-primary">
                      <i className="fas fa-shopping-cart" />{" "}
                      <span className="text">Add to cart</span>
                    </a>
                  </div>{" "}
                  {/* col.// */}
                </div>{" "}
                {/* row.// */}
              </article>
            </main>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
          {/* ================ ITEM DETAIL END .// ================= */}
        </div>{" "}
        {/* container .//  */}
      </section>
      <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Sản phẩm lien quan</h4>
                </header>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />;
                    })}
                </div>
                {/* row.// */}
            </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
      {/* ========================= SECTION  ========================= */}
      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <div className="container-fluid py-5">
            <div className="container">
            </div>
        </div>
            </div>{" "}
            {/* col.// */}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
    </>

  );
}

export default Detail;