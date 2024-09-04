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
      <div className="flex items-center justify-center w-full h-screen bg-shark-950 ">
        <div className='w-5/6 h-4/6 bg-shark-950 flex items-center  text-white overflow-hidden border'>
          <img src="/img/foto_personal.jpg" alt="Foto personal" className='w-40 h-40 rounded-xl' />
          <p className='font-bold text-justify mt-4 px-4 '>
            Soy un apasionado desarrollador web con experiencia en la creación de sitios web responsivos y funcionales. 
            Tengo habilidades avanzadas en HTML, CSS, JavaScript, así como experiencia en el diseño y desarrollo de interfaces 
            de usuario atractivas. He trabajado en proyectos de diversa envergadura, desde pequeñas empresas hasta grandes 
            corporaciones, siempre enfocado en la excelencia y la satisfacción del cliente. Estoy constantemente aprendiendo 
            nuevas tecnologías y tendencias para seguir creciendo profesionalmente en este campo en constante evolución.
          </p>
        </div>
      </div>
        
       
      
      <div className='bg-bunker-950'>
        <div className='flex-1'> 
            <h1 className="font-bold text-white  uppercase">Proyectos</h1>        
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
