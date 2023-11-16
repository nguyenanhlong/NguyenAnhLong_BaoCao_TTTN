import { useEffect, useState } from "react";
import sliderservice from "../../../Services/SliderService";
import SliderItem from "../../../components/frontend/slideritem";

function Slider() {
  const [sliders, setSliders] = useState([]);
  useEffect(function () {
      (async function () {
          await sliderservice.getByPosition('sliders').then(function (result) {
              setSliders(result.data.sliders)
          });
      })();
  }, [])
  return (  <section className="section-main padding-bottom">
  {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
  <div
    id="carousel1_indicator"
    className="slider-home-banner carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators carousel-controls"></ol>
    <div className="carousel-inner">
      {sliders.map((item, index) => {
        return <SliderItem location={index} item={item} />;
      })}
    </div>
    <a
      className="carousel-control-prev carousel-controls"
      href="#carousel1_indicator"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next carousel-controls"
      href="#carousel1_indicator"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}

  {/* row.// */}

  {/* card.// */}
</section> );
}

export default Slider;