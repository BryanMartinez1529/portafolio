import { useState } from "react";

function RotatingCard({imageSrc,titulo,descripcion,hrefcodigo,hrefweb,icons}) {
  const [rotationClass, setRotationClass] = useState("");

 
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const rotateX = e.clientY < cardCenterY ? "rotate-x--6" : "rotate-x-6";
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
          <div className="absolute top-2 left-2">
            <div className="w-4 h-4 bg-green-600 rounded-full animate-ping"></div>
          </div>
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
              {icons.map((icon, index) => (
                  <img
                    key={index}
                    className='transform transition duration-500 hover:scale-110 m-2'
                    height='40'
                    width='40'
                    src={icon.src}
                    alt={icon.alt}
                  />
                ))}
              
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
