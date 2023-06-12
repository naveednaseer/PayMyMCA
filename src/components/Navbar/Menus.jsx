import React from 'react';

import DropdownMenu from './DropdownMenu';

export default function Menus() {
  return ( 
    <>
    
      <div className="w-full">
        <a href="/home" className='hover:text-primary py-1 px-1 block'>Home</a>
      </div>
      <div className="w-full">
        <a href="#about" className='hover:text-primary w-20 py-1 px-1 block'>Why Us?</a>
      </div>
      <div className="w-full">
        <a href="#strategy" className='hover:text-primary py-1 px-1 block'>Strategy</a>
      </div>
      <div className="w-full">
        <a href="#benefits" className='hover:text-primary py-1 px-1 block'>Benefits</a>
      </div>
      <div className="w-full">
        <a href="#clients" className='hover:text-primary py-1 px-1 block'>Client's</a>
      </div>
      {/* <DropdownMenu>
        <div className="w-full">
          <a href="/" className='hover:text-primary py-2 block'>Portofolios</a>
        </div>
        <div className="w-full">
          <a href="/" className='hover:text-primary py-2 block'>Portofoliosx</a>
        </div>
      </DropdownMenu> */}
    </>
  );
}
