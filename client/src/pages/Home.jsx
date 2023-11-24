import heroImg01 from "../assets/images/hero-img04.png";
import heroImg02 from "../assets/images/hero-img-05.png";
import heroImg03 from "../assets/images/hero-img06.png";
import heroImg04 from "../assets/images/hero-img-07.png";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import News from "../components/News/News";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Gallery from "../components/Gallery/Gallery.jsx"
import Testimonial from "../components/Testimonial/Testimonial.jsx";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Наші Герої заслуговують на здорове та довге життя!
                </h1>
                <p className="text__para">
                  Разом ми турбуємося про тих, хто на передовій. Здоров'я
                  Героїв: Наше Завдання та Зобов'язання - це трубуватися про
                  здоров'я та підтримувати Наших Справжніх Героїв. Довге Життя
                  для Героїв, Здоров'я та Благополуччя.
                </p>
                <button className="btn">Записатися до лікаря</button>
              </div>
              <div className="text-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg: leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Років досвіду</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg: leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Якісне обслуговування</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg: leading-[54px] font-[700] text-headingColor">
                    99.9%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Вилікуваних Героїв</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[10px] mx-10">
              <div className="image-container">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <p className="text__para text-center text-[14px] text-black flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[10px]">
                  Ознайомтесь зі своєю аптечкою і знаєте, що в ній є. Досить
                  часто військовослужбовець говорить «Я знаю, що в мене там є
                  турнікет, але він мені буде не потрібен»
                </p>
              </div>
              <div className="image-container mt-[20px]">
                <img className="w-full" src={heroImg01} alt="" />
                <p className="text__para text-center text-[14px] text-black flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[10px]">
                  Дотримуйтесь принципу «сам-товариш-медик». Надавайте допомогу
                  спочатку собі, потім своєму побратиму, а потім звертайтесь до
                  військового лікаря. Не чекайте, що хтось зробить це за вас.
                </p>
              </div>
              <div className="mt-[40px]">
                <div className="image-container w-[200px]">
                  <img
                    src={heroImg04}
                    alt=""
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="image-container">
                  <img src={heroImg03} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Забезпечуємо найкращі медичні послуги
            </h2>
            <p className="text__para text-center">
              Світовий рівень якості. Наша система пропонує професійний догляд
              за Вашим здоров'ям.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Знайти Доктора
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  У нас лише кваліфіковані доктори.
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border
                     border-solid border-[#181A1E] mt-[30px] mx-auto 
                     flex items-center justify-center group
                      hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight />
                  </Link>
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Наше місце знаходження
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Ми знаходимся в самому центрі Києва!
                  <Link
                    to="/contact"
                    className="w-[44px] h-[44px] rounded-full border
                     border-solid border-[#181A1E] mt-[30px] mx-auto 
                     flex items-center justify-center group
                      hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight />
                  </Link>
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Записатись на прийом
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Приймаємо в будь-який день та годину доби!
                  <Link
                    to="/"
                    className="w-[44px] h-[44px] rounded-full border
                     border-solid border-[#181A1E] mt-[30px] mx-auto 
                     flex items-center justify-center group
                      hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] text-center mb-10">
        Новини тижня
      </div>
      <div className="d-flex flex-row justify-content-around w-[1300px]center">
        <News className="hero__section" />
        <News />
        <News />
      </div>
      <div>
        <div className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] text-center mb-10">
          Галерея санчастини
        </div>
        <Gallery />
      </div>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Що наші пацієнти кажуть про нас
            </h2>
            <p className="text__para text-center">
              Медичне обслуговування світового рівня для кожного. Наша система
              охорони здоров'я пропонує неперевершену кваліфіковану медичну
              допомогу. Від лабораторії до клініки.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
