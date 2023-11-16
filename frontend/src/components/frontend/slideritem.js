import { urlImage } from "../../Config";

function SliderItem(props) {
    return ( <div className={`carousel-item ${props.location === 0 ? "active" : ""}`}>
    <img
      src={`${urlImage}slider/${props.item.image}`}
      alt={props.item.name}
      className="slider-image"
    />
    <div className="carousel-caption text-white text-left padding-bottom">
      
      
    </div>
  </div> );
}

export default SliderItem;