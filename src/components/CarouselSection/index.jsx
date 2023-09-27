import { Container } from "./styles";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselSection({ title, items }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const next = () => {
    setCurrentSlide((prevState) =>
      prevState === items.length - 1 ? 0 : prevState + 1
    );
  };

  const prev = () => {
    setCurrentSlide((prevState) =>
      prevState === 0 ? items.length - 1 : prevState - 1
    );
  };

  return (
    <Container>
      {title}
      <div id="picsCaroussel">
        <button className="buttonCarousel buttonCarousel-prev " onClick={prev}>
          &lt;
        </button>
        <div id="CarouselContainer">
          <Carousel
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            className="carousel slide"
            infiniteLoop
            centerMode
            centerSlidePercentage={32}
            showThumbs={false}
            showArrows={false}
          >
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Carousel>
        </div>
        <button className="buttonCarousel buttonCarousel-next " onClick={next}>
          &gt;
        </button>
      </div>
    </Container>
  );
}
