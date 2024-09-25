import { useState } from 'react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RotatingCard from './components/RotatingCard'
import ImageCarousel from './components/ImagenCarousel'
function App() {

  const images = [
    'https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png',
    'https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png',
    'https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png',
  ];
  return (
    <>  
      <NavBar />
      

      <section  id="perfil" className="flex items-center justify-center w-full h-screen bg-bunker-950  ">
        <div className="w-5/6 h-4/6 flex flex-col justify-between items-center    md:flex-row bg-bunker-950  ">
          <div className="  h-full flex items-center justify-center flex-col w-full md:w-full ">
            <img src="/img/foto_personal.jpg" alt="Foto personal" className="w-52 h-52 rounded-full  shadow-lg drop-shadow-2xl " />
            <div className='flex flex-row justify-between  p-2'>
              <a className='m-4' href='https://www.linkedin.com/in/bryan-martinez-04183828a/' target='_black'> <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png" alt="linkedin"/></a>
              <a className='m-4'  href='https://github.com/BryanMartinez1529'target='_black' > <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/100/FFFFFF/github.png" alt="github"/></a>
              <a className='m-4'  href='bryanwladimir8@gmail.com'> <img  className='transform transition duration-500 hover:scale-110'  width="48" height="48" src="https://img.icons8.com/material-rounded/48/FFFFFF/mail.png" alt="mail"/></a>
            </div>
            <a className='text-bold text-white w-32 h-12 text-center flex justify-center items-center rounded-lg bg-mantis-800 hover:bg-mantis-900 mt-2' href='/cv/CV_Bryan_Martinez.pdf' target='_black' >Visualizar CV</a>
          </div>
          <div className="w-full md:w-full  h-full flex flex-col justify-center items-center  text-white ">
            <div className="whitespace-nowrap  text-center flex items-center justify-center">
              <div className="inline-block animate-marquee uppercase text-bold text-mantis-400 text-2xl">
                Bienvenidos 
              </div>
            </div>
            <p className="font-bold text-justify px-4 text-sm md:text-base drop-shadow-2xl mt-2 ">
              Soy un apasionado desarrollador web con experiencia en la creación de sitios web responsivos y funcionales. 
              Tengo habilidades avanzadas en HTML, CSS, JavaScript, así como experiencia en el diseño y desarrollo de interfaces 
              de usuario atractivas. He trabajado en proyectos de diversa envergadura, desde pequeñas empresas hasta grandes 
              corporaciones, siempre enfocado en la excelencia y la satisfacción del cliente. Estoy constantemente aprendiendo 
              nuevas tecnologías y tendencias para seguir creciendo profesionalmente en este campo en constante evolución.
            </p>
          </div>
        </div>
    </section>
          
    <section id="proyectos" className="min-h-screen md:h-max flex items-center justify-center flex-col  mt-52 md:mt-0 bg-shark-950 ">
      <h1 className="font-bold text-white uppercase text-center p-4 text-4xl">Proyectos</h1>
      
      
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

     
      <div className="flex flex-col justify-between  h-auto w-full  md:w-4/5  items-center space-y-4 md:space-y-0 md:flex-row md:h-3/5">
        <div className=" h-64 w-full md:w-3/5 lg:3/5 m-4 p-2">
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

    <section id="tecnologias" className='min-h-screen md:h-max  bg-bunker-950  flex flex-col items-center justify-start'>
        <h1 className='font-bold text-white  uppercase  text-bold p-4 text-4xl'>Contactame</h1> 
        <div className='w-4/5 h-3/5 rounded-lg shadow-2xl flex '>
              <form className='flex flex-col items-center justify-center  w-full p-4'>
                  <label className='text-white m-2 font-bold text-2xl'>Nombres</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-2 rounded-lg'  ></input>
                  
                  <label className='text-white font-bold text-2xl'>Correo</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-2 rounded-lg'></input>
                  <label className='text-white font-bold text-2xl'>Descripcion</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-6 rounded-lg' ></input>
                  <button className='w-full h-12 bg-mantis-900 text-white font-medium mt-4 rounded-lg' >Enviar</button>
              </form>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default App
