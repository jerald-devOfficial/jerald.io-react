import React, { useState } from 'react';
import content from '../../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TypeAnimation } from 'react-type-animation';
import useStartAnimation from '../../hook/useStartAnimation';
import Modal from './Modal';

function Intro() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;

  const styleTranslate = 'translate-y-10 opacity-0';

  const animated = useStartAnimation();

  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between '>
        <div className='md:flex-shrink-1 w-full md:w-2/5'>
          <LazyLoadImage
            className={`w-full mx-auto`}
            src={content.portfolio.img}
            effect='blur'
            alt='Man looking at item at a store'
          />
        </div>
        <div className='font-dosis w-full md:w-3/5 text-center md:text-left'>
          <div
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            <h2>{content.portfolio.text[0]}</h2>
            <h2 className='inline'>{content.portfolio.text[1]}</h2>
            <h2 className='text-indigo-500 inline'>
              {content.portfolio.text[2]}
            </h2>
          </div>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            <TypeAnimation
              sequence={content.portfolio.typical}
              repeat={Infinity}
              className='inline-block text-white'
              wrapper='p'
            />
          </h1>
          <button
            onClick={openModal}
            className={` animate-bounce bg-indigo-500 px-8 py-2 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3500)}`}
          >
            Learn more
          </button>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
export default Intro;
