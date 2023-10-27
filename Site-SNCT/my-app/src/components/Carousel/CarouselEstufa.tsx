import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "/img/ides.jpg",
  "/img/ides.jpg",
  "/img/estufa.png",
  "/img/url-da-imagem-3.jpg",
];

export const CarouselEstufa = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Adicionando a opção de autoplay
    autoplaySpeed: 2000, // Defina a velocidade do autoplay em milissegundos (neste exemplo, 2 segundos)
  };

  return (
    <div className="max-w-screen-lg ml-40">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

