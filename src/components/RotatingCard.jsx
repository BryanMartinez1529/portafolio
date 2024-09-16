import { useState } from "react";

function RotatingCard() {
  const [rotationClass, setRotationClass] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    // Si el mouse está en la parte superior, rota hacia abajo; si está en la parte inferior, rota hacia arriba.
    const rotateX = e.clientY < cardCenterY ? "rotate-x--6" : "rotate-x-6";
    // Si el mouse está a la izquierda, rota hacia la derecha; si está a la derecha, rota hacia la izquierda.
    const rotateY = e.clientX < cardCenterX ? "rotate-y-6" : "rotate-y--6";

    setRotationClass(`${rotateX} ${rotateY}`);
  };

  const handleMouseLeave = () => {
    setRotationClass("");
  };

  return (
    <div className="w-full  mx-auto ">
      <div
        className={`bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 ${rotationClass}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
       
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
         
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src="src/img/maderas_eternas.png"
            alt="Maderas Eternas"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-lg font-bold mb-2">Maderas Eternas</h3>
              <p className="text-sm">Aquí va la información adicional que se muestra al pasar el cursor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RotatingCard;
