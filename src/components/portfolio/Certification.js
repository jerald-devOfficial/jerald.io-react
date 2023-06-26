import React from 'react';
import content from '../../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import StarRateIcon from '@mui/icons-material/StarRate';

function Certification() {
  return (
    <div className='flex-grow min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 to-light-blue-500'>
      <h1 className='text-4xl sm:text-5xl font-bold font-dosis text-white mt-20 sm:mt-16 mb-20 md:mt-12'>
        {content.certificates.title}
      </h1>

      <div className='flex flex-wrap px-6'>
        {/*  */}
        {content.certificates.list.map((list, index) => (
          <div
            key={index}
            className='w-full lg:w-1/2  md:px-4 xl:w-1/3 lg:px-6 py-5'
          >
            <div className='bg-white hover:shadow-xl rounded overflow-hidden shadow-lg'>
              <div className='transform transition duration-500 hover:scale-105'>
                <LazyLoadImage
                  src={list.img.img}
                  alt={list.img.alt}
                  className='w-full border-white border-8 '
                />
              </div>
              <div className='px-4 py-4 md:px-10'>
                <h1 className='font-bold text-lg'>{list.certificate}</h1>
                <p className='py-4'>{list.desc}</p>
                <div className='flex flex-wrap pt-1 flex-auto'>
                  <div className='w-full md:w-1/3 text-sm font-medium'>
                    {list.author}
                  </div>
                  <div className='3/3 md:flex-auto'>
                    <div className='text-sm font-medium'>
                      <span style={{ color: '#eb8a2f' }}>
                        Rating: {list.rating}
                        <StarRateIcon
                          fontSize='small'
                          style={{ color: '#eb8a2f', paddingBottom: '2px' }}
                        />
                      </span>
                      <span className='px-1 '>Hours: {list.hours}</span>
                      <a href={list.link} className='text-red-600 px-1 '>
                        Visit Udemy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/*  */}
      </div>
    </div>
  );
}

export default Certification;
