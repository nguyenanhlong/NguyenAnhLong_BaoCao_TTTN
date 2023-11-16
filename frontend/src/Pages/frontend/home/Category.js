import { useEffect, useState } from "react";
import CategoryItem from "../../components/frontend/categoryitem";
import categoryservice from "../../Services/CategoryService";
import { Link } from "react-router-dom";
function Category() {
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
      (async function () {
        await categoryservice.getCategoryByParentID(0).then(function (result) {
          setCategory(result.data.data);
        });
      })();
    }, []);
    return ( 
        <div className="container-fluid py-5">
            <div className="container">
            <div className="nav-item dropdown">
                    <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Danh Mục</Link>
                    <div class="dropdown-menu m-0">
                        <div className="drop-item">
                            {categorys.map(function (category, index) {
                                return <CategoryItem category={category} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Category;