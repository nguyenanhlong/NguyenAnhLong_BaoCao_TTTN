import { Link } from "react-router-dom";
import { urlImage } from "../../Config";

function ProductItem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
                <Link to={"/product-detail/"+props.product.slug} className="img-wrap img-showcase">
                    <img src={urlImage +'product/'+ props.product.image} />
                    <img src={urlImage +'product/'+ props.product.image2} />
                </Link>
                <figcaption className="info-wrap">
                    <Link to="product-detail/" className="name-product">
                        <h5 className="text-center fs-2">{props.product.name}</h5>
                    </Link>
                    {(()=>{
                        return <div className="price mt-1">{props.product.price}<sup>$</sup></div>
                    })()}
                     {/* price-wrap.// */}
                </figcaption>
            </div>
        </div>
    );
}

export default ProductItem;