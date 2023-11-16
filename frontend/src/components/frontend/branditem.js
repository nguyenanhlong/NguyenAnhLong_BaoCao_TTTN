import { urlImage } from "../../Config";

function BrandItem(props) {
    return ( 
    
        <div className="col item">
            <img className="icon-brand-sm"src={urlImage +'brand/'+ props.brand.image} />
        </div>
 
     );
}

export default BrandItem;