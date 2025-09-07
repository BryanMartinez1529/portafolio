import { useState } from 'react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RotatingCard from './components/RotatingCard'
import ImageCarousel from './components/ImagenCarousel'

function App() {

  
  return (
    <>  
      <NavBar />
      

      <section  id="perfil" className="flex items-center justify-center w-full h-screen bg-bunker-950  ">
        <div className="w-5/6 h-4/6 flex flex-col justify-between items-center    md:flex-row bg-bunker-950  ">
          <div className="  h-full flex items-center justify-center flex-col w-full md:w-full ">
            <h3 className='text-white font-medium p-4'> Bryan Martinez</h3>
            <img src="/img/foto_personal.jpg" alt="Foto personal" className="w-52 h-52 rounded-full  shadow-lg drop-shadow-2xl " />
            <div className='flex flex-row justify-between  p-2'>
              <a className='m-4' href='https://www.linkedin.com/in/bryan-martinez-04183828a/' target='_black'> <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png" alt="linkedin"/></a>
              <a className='m-4'  href='https://github.com/BryanMartinez1529'target='_black' > <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/100/FFFFFF/github.png" alt="github"/></a>
              <a className='m-4'  href='bryanwladimir8@gmail.com'> <img  className='transform transition duration-500 hover:scale-110'  width="48" height="48" src="https://img.icons8.com/material-rounded/48/FFFFFF/mail.png" alt="mail"/></a>
            </div>
            <a className='text-bold text-white w-32 h-12 text-center flex justify-center items-center rounded-lg bg-mantis-800 hover:bg-mantis-900 mt-2' href='/cv/CV_Bryan_Martinez.pdf' target='_black' >Visualizar CV</a>
          </div>
          <div className="w-full md:w-full  h-full flex flex-col justify-center items-center  text-white ">
            <p className="font-bold text-justify px-4 text-sm md:text-base drop-shadow-2xl mt-8 ">
              Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web escalables y eficientes. Manejo tanto el frontend como el backend, utilizando tecnologías como React, Tailwind CSS, Node.js,Laravel y bases de datos como PostgreSQL y MongoDB. Me especializo en construir soluciones sólidas que optimizan la experiencia del usuario y mejoran los procesos empresariales.
            </p>
            <div className="whitespace-nowrap text-center flex items-center justify-center mt-8 overflow-hidden w-full mx-8">
                <div className="flex animate-marquee space-x-8">
                  <img src="/icons/html.svg" alt="Html" className="h-12 w-12  cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/css.svg" alt="CSS" className="h-12 w-12  cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/javascript.svg" alt="Javasript" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/tailwindcss.svg" alt="Tailwindcss" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/react.svg" alt="React" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/nodejs.svg" alt="NodeJs" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/php.svg" alt="Php" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/laravel.svg" alt="Laravel" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/mysql.svg" alt="Mysql" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/postgresql.svg" alt="Posgrest" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/mongo.svg" alt="MongoDB" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/git.svg" alt="Git" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />
                  <img src="/icons/linux.svg" alt="Linux" className="h-12 w-12 cursor-pointer selection:transform transition duration-500 hover:scale-110" />

                </div>

            </div>
          
          </div>
        </div>
    </section>
          
    <section id="proyectos" className="min-h-screen md:h-max flex items-center justify-center flex-col  mt-52 md:mt-0 bg-shark-950 ">
      <h1 className="font-bold text-white uppercase text-center p-4 text-2xl">Proyectos</h1>
      
      
      <div className="flex flex-col justify-between  h-auto w-full md:w-4/5 items-center space-y-4 md:space-y-0 md:flex-row md:h-3/5 ">
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard 
            imageSrc={'/img/maderas_eternas.PNG'}
            titulo={'Maderas Eternas'}
            descripcion={'Landing Page Maderas Eternas'}
            hrefcodigo={'https://github.com/BryanMartinez1529/maderas_andrago'}
            hrefweb={'https://maderaseternas.com'}
            icons={[
              { src: '/icons/html.svg', alt: 'html' },
              { src: '/icons/css.svg', alt: 'css' },
              { src: '/icons/javascript.svg', alt: 'javascript' },
              { src: '/icons/tailwindcss.svg', alt: 'tailwindcss' }
            ]}
          />
        </div>
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard
            imageSrc={'/img/apv.PNG'}
            titulo={'Administrador de Pacientes'}
            descripcion={'Administrador de Pacientes'}
            hrefcodigo={'https://github.com/BryanMartinez1529/frontend_apv'}
            hrefweb={'https://apvfrontend.netlify.app/'}
            icons={[
              {src: '/icons/html.svg', alt: 'html'},
              { src: '/icons/css.svg', alt: 'css' },
              { src: '/icons/javascript.svg', alt: 'javascript' },
              { src: '/icons/tailwindcss.svg', alt: 'tailwindcss' },
              { src: '/icons/react.svg', alt: 'react' },
              { src: '/icons/nodejs.svg', alt: 'nodejs' },
              { src: '/icons/mongo.svg', alt: 'mongodb' },
            ] }
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
              icons={[{src: '/icons/html.svg', alt: 'html'},
                { src: '/icons/css.svg', alt: 'css' },
                { src: '/icons/javascript.svg', alt: 'javascript' },
                { src: '/icons/tailwindcss.svg', alt: 'tailwindcss' },
                { src: '/icons/react.svg', alt: 'react' },

              ] }
          />
        </div>
        <div className="h-64 w-full md:w-3/5 m-4 p-2">
          <RotatingCard 
             imageSrc={'/img/agencia_viajes.PNG'}
             titulo={'Agencias de Viajes'}
             descripcion={'Agencias de Vaijes con testimoniales'}
             hrefcodigo={'https://github.com/BryanMartinez1529/agenciasViajesnodejs'}
             hrefweb={'https://glowing-klepon-45f281.netlify.app/'}
             icons={[{src: '/icons/html.svg', alt: 'html'},
              { src: '/icons/css.svg', alt: 'css' },
              { src: '/icons/javascript.svg', alt: 'javascript' },
              { src: '/icons/tailwindcss.svg', alt: 'tailwindcss' },
              { src: '/icons/react.svg', alt: 'react' },
              { src: '/icons/nodejs.svg', alt: 'nodejs' },
              { src: '/icons/mysql.svg', alt: 'mysql' },

             ] }
          />
        </div>
      </div>
    </section>

    <section id="tecnologias" className='min-h-screen md:h-max  bg-bunker-950  flex flex-col items-center justify-start'>
        <h1 className='font-bold text-white  uppercase  text-bold p-4 text-2xl'>Contactame</h1> 
        <div className='w-4/5 md:w-3/5 h-3/5 rounded-lg shadow-2xl flex '>
              <form className='flex flex-col items-center justify-center  w-full p-4'>
                  <label className='text-white m-2 font-bold text-xl'>Nombres</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-2 rounded-lg' placeholder='Nombres' ></input>
                  
                  <label className='text-white font-bold text-xl'>Correo</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-2 rounded-lg' placeholder='Correo'></input>
                  <label className='text-white font-bold text-xl'>Descripción</label>
                  <input type='text' className='bg-shark-950 w-full mt-4 p-6 rounded-lg' placeholder='Descripcion' ></input>
                  <button className='w-full h-12 bg-mantis-900 text-white font-medium mt-4 rounded-lg' >Enviar</button>
              </form>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default App
