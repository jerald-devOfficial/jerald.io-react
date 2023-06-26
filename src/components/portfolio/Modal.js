import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import content from '../../content';
import CodeIcon from '@mui/icons-material/Code';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    // opacity: showModal ? 0 : 1,
    // transform: showModal ? `translateY(-100%)` : `translateY(0%)`,
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  // click anywhere to close

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // close via Escape key

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className='min-h-screen absolute z-50'
          ref={modalRef}
          onClick={closeModal}
        >
          <animated.div style={animation}>
            <div
              className='grid grid-cols-1 md:grid-cols-4 bg-white z-60 justify-center md:max-w-screen-md lg:max-w-screen-lg md:mt-40 lg:mt-24 mt-96 xs:mt-40 sm:mt-20 rounded'
              showModal={showModal}
            >
              <div class='w-full  md:mx-2 md:col-span-1'>
                <div class='bg-white p-3 border-t-4 border-green-400'>
                  <div class='image overflow-hidden'>
                    <LazyLoadImage
                      class='h-auto w-full mx-auto'
                      src={content.modal.img.img}
                      alt={content.modal.img.alt}
                    />
                  </div>
                  <h1 class='text-gray-900 font-bold text-xl leading-8 my-1'>
                    Jerald Baroro
                  </h1>
                  <h3 class='text-green-500 font-lg text-semibold leading-6'>
                    MERN Stack Developer
                  </h3>
                  <p class='text-sm text-green-500 hover:text-gray-600 leading-6'>
                    Design and Development
                  </p>
                  <p class='text-sm text-green-500 hover:text-gray-600 leading-6'>
                    Gaming
                  </p>
                  <p class='text-sm text-green-500 hover:text-gray-600 leading-6'>
                    Freelance
                  </p>
                  <p class='lg:hidden'>
                    {' '}
                    <br />
                    <br />
                  </p>
                  <ul class='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 md:mt-2 divide-y rounded shadow-sm'>
                    <li class='flex items-center py-3'>
                      <span>Status</span>
                      <span class='ml-auto'>
                        <span class='bg-green-500 py-1 px-2 rounded text-white text-sm'>
                          Active
                        </span>
                      </span>
                    </li>
                    <li class='flex items-center py-3'>
                      <span>Resume</span>
                      <span class='ml-auto'>
                        <span class='bg-green-500 py-1 px-2 rounded text-white text-sm'>
                          <a
                            href={content.modal.url}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            Download
                          </a>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='w-full  h-64 md:col-span-3'>
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div class='bg-white p-3 shadow-sm rounded-sm'>
                  <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                    <span clas='text-green-500'>
                      <svg
                        class='h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </span>
                    <span class='tracking-wide text-green-500'>About</span>
                  </div>
                  <div class='text-gray-700'>
                    <div class='grid md:grid-cols-5 text-sm'>
                      <div class='md:col-span-2 col-span-3 grid md:grid-cols-2 grid-cols-3'>
                        <div class='pl-4 pr-2 py-2 font-semibold'>Name</div>
                        <div class='pl-2 py-2 md:col-span-1 col-span-2'>
                          Jerald Baroro
                        </div>
                      </div>
                      <div class='col-span-3 grid grid-cols-3'>
                        <div class='pl-4 py-2 font-semibold'>Email.</div>
                        <div class='py-2 col-span-2'>
                          <a
                            class='text-blue-800'
                            href='mailto:spaueOfficial@gmail.com'
                          >
                            spaueOfficial@gmail.com
                          </a>
                        </div>
                      </div>
                      <div class='md:col-span-2 col-span-3 grid md:grid-cols-2 grid-cols-3'>
                        <div class='pl-4 pr-2 py-2 font-semibold'>
                          Contact No.
                        </div>
                        <div class='pl-2 py-2 md:col-span-1 col-span-2'>
                          +639667652125
                        </div>
                      </div>
                      <div class='col-span-3 grid grid-cols-3'>
                        <div class='pl-4 py-2 font-semibold'>LinkedIn</div>
                        <div class='py-2 col-span-2'>
                          <a
                            class='text-blue-800'
                            href='mailto:spaueOfficial@gmail.com'
                          >
                            linkedin.com/in/jerald-baroro-562aab20a/
                          </a>
                        </div>
                      </div>
                      <div class='md:col-span-2 col-span-3 grid md:grid-cols-2 grid-cols-3'>
                        <div class='pl-4 pr-2 py-2 font-semibold'>
                          Current Address
                        </div>
                        <div class='pl-2 py-2 md:col-span-1 col-span-2'>
                          Mabolo, Cebu City
                        </div>
                      </div>
                      <div class='col-span-3 grid grid-cols-3'>
                        <div class='pl-4 py-2 font-semibold col-span-1'>
                          GitHub
                        </div>
                        <div class='py-2 col-span-2'>
                          <a
                            class='text-blue-800'
                            href='mailto:spaueOfficial@gmail.com'
                          >
                            github.com/jerald-devOfficial
                          </a>
                        </div>
                      </div>
                      {/* <div class="col-span-2">
                        <div class="pl-4 pr-2 py-2 font-semibold">
                          Permanant Address
                        </div>
                        <div class="pl-4 pr-2 py-2">Mabolo, Cebu City</div>
                      </div> */}

                      <div class='md:col-span-2 col-span-3 grid md:grid-cols-2 grid-cols-3'>
                        <div class='pl-4 pr-2 py-2 font-semibold'>Birthday</div>
                        <div class='pl-2 py-2 md:col-span-1 col-span-2'>
                          Jan 12, 1996
                        </div>
                      </div>
                      <div class='col-span-3 grid grid-cols-3'>
                        <div class='pl-4 py-2 font-semibold'>Twitter</div>
                        <div class='py-2 col-span-2'>
                          <a
                            class='text-blue-800'
                            href='mailto:spaueOfficial@gmail.com'
                          >
                            twitter.com/spaueOfficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of about section --> */}

                <div class='my-4'></div>

                {/* <!-- Experience and education --> */}
                <div class='bg-white p-3 shadow-sm rounded-sm'>
                  <div class='grid md:grid-cols-2'>
                    <div>
                      <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
                        <span clas='text-green-500'>
                          <svg
                            class='h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                            />
                          </svg>
                        </span>
                        <span class='tracking-wide text-green-500'>
                          Experience
                        </span>
                      </div>
                      <ul class='list-inside space-y-2'>
                        <li>
                          <div class='text-teal-600'>
                            JavaScript Developer at Panteum Foundation
                          </div>
                          <div class='text-gray-500 text-xs'>
                            March 2021 - March 2021
                          </div>
                        </li>
                        <li>
                          <div class='text-teal-600'>
                            Process Executive at Cognizant Philippines
                          </div>
                          <div class='text-gray-500 text-xs'>
                            Nov 2019 - Jan 2021
                          </div>
                        </li>
                        {/* <li>
                          <div class="text-teal-600">
                            Customer Service Representative at Teleperformance,
                            IT Park
                          </div>
                          <div class="text-gray-500 text-xs">
                            July 2019 - October 2019
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div>
                      <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
                        <span clas='text-green-500'>
                          <svg
                            class='h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path fill='#fff' d='M12 14l9-5-9-5-9 5 9 5z' />
                            <path
                              fill='#fff'
                              d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                            />
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                            />
                          </svg>
                        </span>
                        <span class='tracking-wide text-green-500'>
                          Education
                        </span>
                      </div>
                      <ul class='list-inside space-y-2'>
                        <li>
                          <div class='text-teal-600'>
                            Associates Degree in SSC Lazi Campus
                          </div>
                          <div class='text-gray-500 text-xs'>
                            June 2017 - April 2019
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End of Experience and education grid --> */}
                </div>
                {/* <!-- End of profile tab --> */}
                <div class='my-2'></div>
                <div class='bg-white p-3 shadow-sm rounded-sm'>
                  <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-2'>
                    <CodeIcon />
                    <span class='tracking-wide text-green-500'>Skills</span>
                  </div>
                  <div class='text-gray-700'>
                    <ul>
                      {content.modal.skills.map((skills, index) => (
                        <li key={index} className='inline-block pr-2'>
                          <span className='bg-gray-200 py-0 px-2 rounded text-black font-bold text-sm'>
                            {skills}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
