import React from 'react'

const NavBar = () => {
  return (
    <div className='relative  bg-shark-950  w-full top-0 text-white flex items-center justify-between px-4 lg:px-8 py-2'>
        <h1 className='text-bold  hover:text-mantis-400 text-2xl '>Bryan Martinez
        </h1>
        <ul className='mx-auto flex items-center'> 
            <li className='py-3 p-5 xl:p-6'><a href='#' className='hover:pointer  hover:text-mantis-400 '>Inicio</a></li>
            <li className='py-3 p-5 xl:p-6 hover:bg-mantis-900'> Proyectos</li>
            <li className='py-3 p-5 xl:p-6 hover:bg-mantis-900'>Tecnologias</li>
        </ul>
        
    </div>
  )
}

export default NavBar
