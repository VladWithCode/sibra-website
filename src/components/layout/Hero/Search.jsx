import React, { useState } from 'react';

function Search({ parameters, placeholder = 'Buscar...', onSubmit }) {
  const [value, setValue] = useState('');

  const onClick = e => {
    e.preventDefault();

    onSubmit(value, parameters);
  };

  return (
    <div className='search flex w-full'>
      <input
        type='text'
        name='search'
        id='search-bar-input'
        className='search-bar flex-grow'
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        className='btn text-slate-400 rounded-br-sm rounded-tr-sm border-b-2 border-slate-400'
        type='submit'
        onClick={onClick}>
        <svg className='w-8 h-8 fill-current'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
      </button>
    </div>
  );
}

export default Search;
