import { useState } from 'react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RotatingCard from './components/RotatingCard'
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

      <section className="flex items-center justify-center w-full h-screen bg-shark-950">
        <div className="w-5/6 h-4/6 bg-shark-950 flex flex-col justify-between items-center  overflow-hidden  md:flex-row  ">
          <div className="  h-full flex items-center justify-center flex-col w-full md:w-full ">
            <img src="/img/foto_personal.jpg" alt="Foto personal" className="w-52 h-52 rounded-full  shadow-lg drop-shadow-2xl " />
            <div className='flex flex-row justify-between'>
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
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
    </section>
        
       
      
      <section className='bg-bunker-950   min-h-screen md:h-max'>
        <h1 className="font-bold text-white  uppercase text-center p-4">Proyectos</h1>
        <div className='flex flex-col justify-between mt-4 border h-4/5 w-full items-center md:flex-row'>
            <div className='flex flex-col border h-96 w-full max-w-sm md:w-96 shadow-xl rounded-lg m-6 '>
              <div className='flex flex-col  items-center w-full'>
                <h3 className='text-white text-center mt-3'>Proyecto 1</h3>
                <a href='#' ><img src='/img/foto_personal.jpg' className='w-full h-48 mt-4 items-center' /></a>
              </div>
              <p className='text-white'>asdasda</p>
            </div>
            <div className='border h-96 w-full max-w-sm md:w-96 shadow-xl rounded-lg m-6'>
                  <div className='flex flex-col  items-center w-full'>
                    <h3 className='text-white text-center mt-3'>Proyecto 1</h3>
                    <a href='#' ><img src='/img/foto_personal.jpg' className='w-full h-48 mt-4 items-center' /></a>
                  </div>
                  <p className='text-white'>asdasda</p>
            </div>
            <div className='border h-96 w-full max-w-sm md:w-96 shadow-xl rounded-lg m-6'>
                 <div className='flex flex-col  items-center w-full'>
                    <h3 className='text-white text-center mt-3'>Proyecto 1</h3>
                    <a href='#' ><img src='/img/foto_personal.jpg' className='w-full h-48 mt-4 items-center' /></a>
                  </div>
                  <p className='text-white'>asdasda</p>
            </div>
           

        </div>
      </section>
      <section className='min-h-screen md:h-max bg-shark-950'>
          <h1 className='text-white text-center uppercase text-bold'>Tecnologias</h1>
          <RotatingCard />

      </section>
      <Footer />
    </>
  )
}

export default App
