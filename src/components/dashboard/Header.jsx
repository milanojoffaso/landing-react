import React from 'react'

function Header() {
  return (
    <div className="bg-black flex justify-between p-4">
        <div className="text-white flex items-center">
         <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="Tailwind CSS.png" alt="Tailwind" width="158" height="48"/>
        <span><span className="text-xl font-semibold">Tailwindcss</span></span>
        </div>
        <div className="text-white flex items-center">
            <ul className="flex items-center ">
                <li className="mr-4"><a href="#">Docs</a></li>
                <li className="mr-4"><a href="#">components</a></li> 
                <li className="mr-4"><a href="#">blog</a></li>
                <li className="mr-4"><a href="#">github</a></li>
               
            </ul>
        </div>
        
        <button  class="bg-sky-500 hover:bg-sky-700 ... px-6 py-2 rounded-lg">sign up</button>
    
    </div>

  )
}

export default Header