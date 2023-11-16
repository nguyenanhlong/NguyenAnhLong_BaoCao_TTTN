import { Link } from "react-router-dom";

function CategoryItem(props) {
    return ( 
    <div className="col-md-3 mb-3"  >
        <div className="category-item border">
            <div className="category-name p-2">
                <Link to={`/page-listing-grid/${props.category.slug}/all/1`}>
                    <h3 className="text-center fs-4">{props.category.name}</h3>
                </Link>
            </div>
        </div>
    </div>
     );
}

export default CategoryItem;