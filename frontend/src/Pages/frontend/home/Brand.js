import { useEffect, useState } from "react";
import brandservice from "../../../Services/BrandListService";
import BrandItem from "../../../components/frontend/branditem";

function Brand() {
    const [brands, setBrand] = useState([]);
    useEffect(function () {
      (async function () {
        await brandservice.getAll().then(function (result) {
            setBrand(result.data.data);
        });
      })();
    }, []);
    return (
        <section className="padding-bottom">
            <header className="section-heading heading-line">
                <h4 className="title-section text-uppercase">Thương hiệu</h4>
            </header>
            <div className="col-md col-6 item d-flex justify-content-center">
                <div className="icontext">
                <div className="row mt-4 brand-item ">
                {brands.map(function (brand, index) {
                        return <BrandItem brand={brand} key={index} />;
                    })}
                </div> 
                    
                </div>
            </div>
            <article className="my-4">
                <img src={require("../../../assets/images/banners/home_bannerfull.png")} className="w-100" />
            </article>
    
        </section>
    
    );
}

export default Brand;
