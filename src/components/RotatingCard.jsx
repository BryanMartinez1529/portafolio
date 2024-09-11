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
    <div className="max-w-sm mx-auto">
      <div
        className={`bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 ${rotationClass}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-xl font-bold mb-4">Tarjeta</h2>
        <p className="text-gray-700">Este es un ejemplo de tarjeta con rotación dinámica en todos los ejes.</p>
      </div>
    </div>
  );
}

export default RotatingCard;
