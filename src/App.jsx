import { useState } from 'react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RotatingCard from './components/RotatingCard'
function App() {


  return (
    <>  
      <NavBar />
      

      <section  id="perfil" className="flex items-center justify-center w-full h-screen ">
        <div className="w-5/6 h-4/6 flex flex-col justify-between items-center    md:flex-row  ">
          <div className="  h-full flex items-center justify-center flex-col w-full md:w-full ">
            <img src="/img/foto_personal.jpg" alt="Foto personal" className="w-52 h-52 rounded-full  shadow-lg drop-shadow-2xl " />
            <div className='flex flex-row justify-between  p-2'>
              <a className='m-4' href='https://www.linkedin.com/in/bryan-martinez-04183828a/' target='_black'> <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png" alt="linkedin"/></a>
              <a className='m-4'  href='https://github.com/BryanMartinez1529'target='_black' > <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/100/FFFFFF/github.png" alt="github"/></a>
              <a className='m-4'  href=''> <img  className='transform transition duration-500 hover:scale-110'  width="48" height="48" src="https://img.icons8.com/material-rounded/48/FFFFFF/mail.png" alt="mail"/></a>
            </div>
            <a className='text-bold text-white w-32 h-12 text-center flex justify-center items-center rounded-lg bg-mantis-800 hover:bg-mantis-900' href='/cv/CV_Bryan_Martinez.pdf' target='_black' >Visualizar CV</a>
          </div>
          <div className="w-full md:w-full  h-full flex flex-col justify-center items-center  text-white">
            <div className="whitespace-nowrap  text-center flex items-center justify-center">
              <div className="inline-block animate-marquee uppercase text-bold text-mantis-400 text-2xl">
                Bienvenidos ... ¡
              </div>
            </div>
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
          
    <section id="proyectos" className="min-h-screen md:h-max flex items-center justify-center flex-col  mt-52 md:mt-0">
      <h1 className="font-bold text-white uppercase text-center p-4 text-2xl">Proyectos</h1>
      
      
      <div className="flex flex-col justify-between  h-auto w-full md:w-4/5 items-center space-y-4 md:space-y-0 md:flex-row md:h-3/5 ">
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard 
            imageSrc={'/img/maderas_eternas.PNG'}
            titulo={'Maderas Eternas'}
            descripcion={'Landing Page Maderas Eternas'}
            hrefcodigo={'https://github.com/BryanMartinez1529/maderas_andrago'}
            hrefweb={'https://maderaseternas.com'}
          />
        </div>
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard
            imageSrc={'/img/apv.PNG'}
            titulo={'Administrador de Pacientes'}
            descripcion={'Administrador de Pacientes'}
            hrefcodigo={'https://github.com/BryanMartinez1529/frontend_apv'}
            hrefweb={'https://apvfrontend.netlify.app/'}
          />
        </div>
      </div>

     
      <div className="flex flex-col justify-between  h-auto w-full  md:w-4/5 items-center space-y-4 md:space-y-0 md:flex-row md:h-3/5">
        <div className=" h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard 
              imageSrc={'/img/cotizador.PNG'}
              titulo={'Cortizador de Prestamos'}
              descripcion={'Cotizador de prestamos en base a en plazos de pagos'}
              hrefcodigo={''}
              hrefweb={'https://glowing-klepon-45f281.netlify.app/'}
          />
        </div>
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard 
             imageSrc={'/img/agencia_viajes.PNG'}
             titulo={'Agencias de Viajes'}
             descripcion={'Agencias de Vaijes con testimoniales'}
             hrefcodigo={'https://github.com/BryanMartinez1529/agenciasViajesnodejs'}
             hrefweb={'https://glowing-klepon-45f281.netlify.app/'}
          />
        </div>
      </div>
    </section>

    <section id="tecnologias" className='min-h-screen md:h-max '>
          <h1 className='text-white text-center uppercase text-bold p-4 text-2xl'>Tecnologias</h1>          
    </section>
    <Footer />
    </>
  )
}

export default App
