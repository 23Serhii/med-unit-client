import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-5">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Вітаю! <span className="text-primaryColor">Ласкаво</span> Просимо
        </h3>
        <form action="" className="py-4 mb:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Введіть свій Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-greenColor focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Введіть свій пароль"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-blueColor focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3"
            >
              Увійти
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Не маєте акаунту?{" "}
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Реєстрація
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
