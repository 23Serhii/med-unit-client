import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import News from "../News/News";

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};
const center = {
  lat: 50.42968095281683,
  lng: 30.54314076356481,
};

const CustomMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyABZAFKrEt9nAYKuX7Q_MXRLroLFvQpur0",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <section className="items-center text-center justify-center">
      <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] mb-6">
        Де ми знаходимся?
      </h1>
      <div
        className="center mt-10 ml-10 flex"
        style={{
          width: "1050px",
          height: "85%",
          borderRadius: "40px",
          objectPosition: "center",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)",
        }}
      >
        <GoogleMap
          mapContainerStyle={{ ...mapContainerStyle, width: "600%" }}
          zoom={17}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
        <div className="mt-4">
          <h1 className="text-center py-3 text-greenColor">Про нас</h1>
          <p className="py-3 text-center text-[14px] text-textColor grid lg:flex-row lg:items-center font-medium">
            Ми - Національний військово-медичний клінічний центр «Санчастина»,
            медичний заклад у Києві, провідна установа охорони здоров’я
            Міністерства оборони України. Ми надаємо якісну та своєчасну медичну
            допомогу військовослужбовцям, ветеранам Збройних Сил, а також
            цивільним пацієнтам. Ми маємо висококваліфікований персонал, сучасне
            обладнання та багатий досвід лікування різних захворювань. Ми є
            найстарішим державним медичним закладом України, який був заснований
            у 1755 році. З того часу ми брали участь у багатьох військових
            конфліктах, зокрема у війні на сході України. Ми також є науковим та
            навчальним центром, де працюють та навчаються видатні вчені та
            лікарі.
          </p>
        </div>
      </div>
      <div className="ml-4 mr-70">
        <p className="py-3 text-center text-[14px] text-black grid lg:flex-row lg:items-center font-bold">
          <span className="text-primaryColor font-bold ml-1">Адрес:</span>{" "}
          вулиця Київська, 45/1, Київ, 01011
        </p>
      </div>
    </section>
  );
};

export default CustomMap;
