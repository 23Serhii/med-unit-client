import React, { useState } from "react";
import imgSingUp from "../assets/images/register.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded ">
              <img src={imgSingUp} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Створіть <span className="text-primaryColor">аккаунт</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="ПІБ"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-greenColor focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor  cursor-pointer"
                  required
                />
              </div>
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
                  className="w-full  py-3 border-b border-solid border-greenColor focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor  cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-whiteColor font-bold text-[16px] leading-7 ">
                  Ви є:
                  <select
                    name="role"
                    className="text-whiteColor font-semibold text-[15px] rounded w-100 leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Пацієнт</option>
                    <option value="doctor">Доктор</option>
                  </select>
                </label>
                <label className="text-whiteColor font-bold text-[16px] leading-7 ">
                  Стать:
                  <select
                    name="gender"
                    className="text-whiteColor font-semibold text-[15px] leading-7 rounded w-100 px-4 py-3 focus:outline-none"
                  >
                    <option value="male">Чоловік</option>
                    <option value="female">Жінка</option>
                  </select>
                </label>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3"
                >
                  Зареєструватися
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Вже зареєстровані?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Увійти
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
