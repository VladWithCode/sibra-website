// import second from 'first';
import { useQuery } from 'react-query';
import Gallery from '../components/gallery/Gallery';
import Hero from '../components/layout/Hero/Hero';
import { fetchHomes } from '../services/HomeService';

export default function Home() {
  const { data, isError, isLoading } = useQuery('start-homes', fetchHomes);

  if (isError) return <p className='text-2xl font-bold'>ERROR!</p>;

  if (isLoading || !data)
    return (
      <p className='text-2xl font-bold py-4 text-center w-full'>Loading...</p>
    );

  console.log(data);

  return (
    <>
      <Hero />

      <div className='props w-full px-2 py-16'>
        <h1 className='max-w-xs sm:max-w-md mx-auto text-xl text-center text-gray-600 font-bold'>
          Explora los hogares que tenemos para ti.
        </h1>
        <p className='text-center text-md max-w-sm mx-auto font-light font-secondary pt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum
          nostrum dolorum ab quas?
        </p>
        <Gallery homes={data} />
      </div>

      <div className=''></div>
    </>
  );
}
