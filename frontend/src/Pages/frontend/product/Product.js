import { useEffect, useState } from "react";
import productservice from "../../../Services/ProductService";
import ProductItem from "../../../components/frontend/productitem";

function Product() {
    const [] = useState([]);
    const [products, setProduct] = useState([]);
    useEffect(function () {
      (async function () {
        await productservice.getAll().then(function (result) {
          setProduct(result.data.data);
        });
      })();
    }, []);
    return (
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Sản phẩm có sẵn</h4>
                </header>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />;
                    })}
                </div>
                {/* row.// */}
            </section>

        );
}

export default Product;