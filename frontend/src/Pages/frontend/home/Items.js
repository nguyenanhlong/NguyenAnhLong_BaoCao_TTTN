import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/productitem";
import productservice from "../../../Services/ProductService";
import {useParams } from "react-router-dom";
function Items() {
    const [] = useState([]);
    const [products, setProduct] = useState([]);
    const {slug} = useParams("slug");
    const {page} = useParams("page");
    useEffect(function () {
      (async function () {
        await productservice.getByCatSlug(slug,4,page).then(function (result) {
          setProduct(result.data.data);
        });
      })();
    }, [slug]);
    return (
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">
                      {slug}
                    </h4>
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

export default Items;