import { useState } from 'react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <NavBar />
      <div className="overflow-hidden whitespace-nowrap bg-shark-950 text-center flex items-center justify-center">
        <div className="inline-block animate-marquee uppercase text-bold text-mantis-400 text-2xl">
          Bienvenidos
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-screen bg-shark-950">
        <div className="w-5/6 h-4/6 bg-shark-950 flex flex-col justify-between items-center  overflow-hidden  md:flex-row  ">
          <div className="  h-full flex items-center justify-center flex-col w-full md:w-full ">
            <img src="/img/foto_personal.jpg" alt="Foto personal" className="w-52 h-52 rounded-full  shadow-lg drop-shadow-2xl " />
            <div className='flex flex-row justify-between'>
              <img src="/src/assets/icons/link.svg" className="m-4 shadow-lg hover:bg-mantis-800 hover:pointer" />
              <img src="/src/assets/icons/link.svg" className="m-4 shadow-lg hover:bg-mantis-800 hover:pointer" />
              <img src="/src/assets/icons/link.svg" className="m-4 shadow-lg hover:bg-mantis-800 hover:pointer" />
              <a className='hover:pointer'><img src="/src/assets/icons/link.svg" className="m-4 shadow-lg hover:bg-mantis-800 " /></a>
            </div>
          </div>
          <div className="w-full md:w-full  h-full flex justify-center items-center  text-white">
            <p className="font-bold text-justify px-4 text-sm md:text-base drop-shadow-2xl  ">
              Soy un apasionado desarrollador web con experiencia en la creación de sitios web responsivos y funcionales. 
              Tengo habilidades avanzadas en HTML, CSS, JavaScript, así como experiencia en el diseño y desarrollo de interfaces 
              de usuario atractivas. He trabajado en proyectos de diversa envergadura, desde pequeñas empresas hasta grandes 
              corporaciones, siempre enfocado en la excelencia y la satisfacción del cliente. Estoy constantemente aprendiendo 
              nuevas tecnologías y tendencias para seguir creciendo profesionalmente en este campo en constante evolución.
            </p>
          </div>
        </div>
    </div>
        
       
      
      <div className='bg-bunker-950 flex h-screen'>
        <h1 className="font-bold text-white  uppercase text-center">Proyectos</h1>
        <div className='flex-1 '> 
           <h1 className="font-bold text-white  uppercase text-center">Proyectos</h1>
        </div>
        <div className='py-10  w-full relative   text-white flex-1 ' >
              <img src="../public/img/foto_personal.jpg" alt="" className='w-max h-40 rounded-full ' />
              <p className='font-bold text-justify'>Soy un apasionado desarrollador web con experiencia en la
                creación de sitios web responsivos y funcionales. Tengo
                habilidades avanzadas en HTML, CSS, JavaScript , así como
                experiencia en el diseño y desarrollo de interfaces de
                usuario atractivas. He trabajado en proyectos de diversa
                envergadura, desde pequeñas empresas hasta grandes
                corporaciones, siempre enfocado en la excelencia y la
                satisfacción del cliente. Estoy constantemente aprendiendo
                nuevas tecnologías y tendencias para seguir creciendo
                profesionalmente en este campo en constante evolución.
                </p>
        </div>
       
       
      </div>
      <Footer />
    </>
  )
}

export default App
