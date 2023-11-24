import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Carousel from "react-bootstrap/Carousel";
import { newsData } from "../../assets/data/news.js";

const News = () => {
  return (
    <section
      id="home"
      className="w-50 mx-auto shadow p-3 mb-5 bg-white rounded"
    >
      <Carousel data-bs-theme="dark" interval={4000}>
        {newsData.map((news) => {
          return (
            <Carousel.Item key={news.id} className="w-30">
              <div className="d-flex justify-content-center align-items-center">
                <div className="overlay"></div>
                <div className="image-container">
                  <img
                    className="img-fluid rounded w-27"
                    src={news.img}
                    alt={"Slide " + news.id}
                  />
                </div>
              </div>
              <Carousel.Caption className="text-light">
                <h5 className="text-white font-[800] md:text-[20px] md:leading-[30px]">
                  {news.name}
                </h5>
                <p className="text__para text-white text-[10px] leading-[20px]">
                  {news.title}
                </p>
                <a href="#" className="btn">
                  Дізнатися більше...
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default News;
