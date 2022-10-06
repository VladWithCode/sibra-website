import React, { useState } from 'react';
import Option from './Option';
import Search from './Search';
import Select from './Select';

function Hero() {
  const [contract, setContract] = useState();

  const onSelect = value => {
    setContract(value);
  };

  return (
    <div className='flex flex-col w-full h-96 mx-auto relative overflow-hidden'>
      <div className='bg-slider w-full h-full z-0 absolute top-0'>
        <img
          className='object-cover object-center h-full w-full'
          src='/img/buildings.jpg'
          alt='bg slider'
        />
      </div>
      <div className='overlay w-full h-full bg-black opacity-60 absolute top-0 z-10'></div>
      <h1 className='max-w-[95%] text-2xl text-center text-slate-100 font-semibold pb-2 z-20 m-auto mb-0'>
        ¡Encuentra la casa que estas buscando!
      </h1>
      <div className='ui m-auto mt-0 w-60 max-w-[95%] z-20 flex flex-col'>
        <Search
          parameters={{ contract }}
          onSubmit={(data, parameters) => console.log(data, parameters)}
        />
        <Select onSelect={onSelect}>
          <Option value='compra' defaultActive={true}>
            Comprar
          </Option>
          <Option value='renta'>Renta</Option>
        </Select>
      </div>
    </div>
  );
}

export default Hero;
