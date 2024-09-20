import { useState } from "react";

function RotatingCard({imageSrc,titulo,descripcion,hrefcodigo,hrefweb}) {
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
    <div className="w-full  mx-auto h-full">
      <div
        className={`bg-opacity-590 shadow-lg rounded-lg p-4 transform transition-transform duration-500 ${rotationClass}  w-full h-full`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
       
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
         
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={imageSrc}
            alt={titulo}
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-lg font-bold mb-2">{titulo}</h3>
              <p className="text-sm">{descripcion}</p>
              <div className='flex flex-row justify-between items-center p-2 w-full h-full'>
                <img className='transform transition duration-500 hover:scale-110' height='40'  width='40' src="https://img.icons8.com/ios-filled/40/FFFFFF/html.png" alt="html" />
                <img className='transform transition duration-500 hover:scale-110' height='40'  width='40' src="https://img.icons8.com/ios-filled/40/FFFFFF/javascript.png" alt="javascript" />
                <img className='transform transition duration-500 hover:scale-110' height='40'  width='40' src="https://img.icons8.com/ios/100/FFFFFF/css-filetype.png" alt="css-filetype" />
                <img className='transform transition duration-500 hover:scale-110' height='40'  width='40' src="https://img.icons8.com/material-rounded/24/FFFFFF/tailwind_css.png" alt="tailwind_css" />
              </div>

              <div className='flex flex-row justify-between p-2 w-full'>
                <a className='m-2 h-12 w-full md:w-40 flex flex-row justify-center items-center bg-mantis-800 rounded-lg hover:bg-mantis-900' href={hrefcodigo} target='_blank'>
                  <img className='transform transition duration-500 hover:scale-110 w-6 h-6 md:w-8 md:h-8' src="https://img.icons8.com/ios-filled/100/FFFFFF/github.png" alt="github" />
                  <h3 className="text-center text-white ml-2">Código</h3>
                </a>
                <a className='m-2 h-12 w-full md:w-40 flex flex-row justify-center items-center bg-mantis-800 rounded-lg hover:bg-mantis-900' href={hrefweb} target='_blank'>
                  <img className='transform transition duration-500 hover:scale-110 w-6 h-6 md:w-8 md:h-8' src="https://img.icons8.com/ios-filled/48/FFFFFF/web.png" alt="web" />
                  <h3 className="text-center text-white ml-2">Web</h3>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RotatingCard;
