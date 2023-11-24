import { useEffect, useRef } from "react";
import  logo  from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Головна сторінка",
  },
  {
    path: "/doctors",
    display: "Знайти доктора",
  },
  {
    path: "/services",
    display: "Послуги",
  },
  {
    path: "/drugs",
    display: "Знайти пігулки",
  },
  {
    path: "/contact",
    display: "Про нас",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const HandleStikcyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    HandleStikcyHeader();
    return () => window.removeEventListener("scroll", HandleStikcyHeader);
  });
  const toogleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" className="w-40" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toogleMenu}>
            <ul className="menu flex items-center gap-[2rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? `text-primaryColor text-[17px] leading-7 font-[900]`
                        : `text-textColor text-[14px] leading-7 font-[400] hover:text-primaryColor`
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
          </div>

          <Link to="/login">
            <button className="bg-white py-2 px-6 text-textColor font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
              Login
            </button>
          </Link>
          <span className="md:hidden" onClick={toogleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
