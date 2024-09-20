import React from 'react'

function Footer() {
  return (
    <div className='bg-shark-950  min-h-32 md:h-max'>
      <div className='flex  flex-col justify-center items-center'>
      <div className='flex flex-row justify-between  p-2'>
              <a className='m-4' href='https://www.linkedin.com/in/bryan-martinez-04183828a/' target='_black'> <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/45/FFFFFF/linkedin.png" alt="linkedin"/></a>
              <a className='m-4'  href='https://github.com/BryanMartinez1529'target='_black' > <img className='transform transition duration-500 hover:scale-110' width="48" height="48" src="https://img.icons8.com/ios-filled/100/FFFFFF/github.png" alt="github"/></a>
              <a className='m-4'  href=''> <img  className='transform transition duration-500 hover:scale-110'  width="48" height="48" src="https://img.icons8.com/material-rounded/48/FFFFFF/mail.png" alt="mail"/></a>
            </div>
        <h3 className='font-bold text-white '>Sitio Realizado por Bryan Martinez</h3>
      </div>
    </div>
  )
}

export default Footer