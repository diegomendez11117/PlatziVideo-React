import React from 'react';
import '../assets/styles/components/search.scss';

const searchTitle = '¿Qué quieres ver hoy?';
const searchPlaceholder = 'Buscar...';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>{searchTitle}</h2>
      <input type='text' className='input' placeholder={searchPlaceholder} />
    </section>
  );
};

export default Search;
