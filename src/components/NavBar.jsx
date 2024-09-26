import React from 'react'

const NavBar = () => {
  return (
    <header className='fixed   w-full md:w-full top-0 text-white flex items-center justify-between px-4 lg:px-8 py-2 overflow-hidden z-10 '>
       <a href='#'> <h1 className='font-bold  hover:text-mantis-400 text-2xl '>Bryan <span className='text-mantis-400'>Martinez</span>
       </h1></a>
        <ul className='mx-auto flex items-center  font-bold '> 
            <li className='py-3 p-5 xl:p-6 '><a href='#perfil' className='hover:pointer  hover:text-mantis-400 '>Inicio</a></li>
            <li className='py-3 p-5 xl:p-6'><a href='#proyectos' className='hover:pointer  hover:text-mantis-400 '>Proyectos</a></li>
            <li className='py-3 p-5 xl:p-6'><a href='#tecnologias' className='hover:pointer  hover:text-mantis-400 '>Contacto</a></li>
        </ul>
        
    </header>
  )
}

export default NavBar
