import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';
import lines from '../../assets/svgs/lines.svg';
import purpletr from '../../assets/svgs/purple_tr.svg';
import greentr from '../../assets/svgs/green_tr.svg';

export default function Welcome() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen md:h-[75vh]">
        <Head>
          <title>Contact</title>
          <meta
            name="description"
            content="Build your vision with most used web technology worldwide, such as Bootstrap,
                TailwindCSS, React, and Laravel with me!"
          />
        </Head>
        <img type="image/svg+xml" className="z-0 h-screen w-fit absolute bottom-10 right-0 opacity-80 blur-xl pointer-events-none" src={lines} alt="Colored Lines" />
        <img type="image/svg+xml" className="z-10 absolute bottom-0 left-0 pointer-events-none" src={purpletr} alt="Purple Triangle" />
        <img type="image/svg+xml" className="z-20 fill-white absolute -bottom-1 right-0 w-screen pointer-events-none" src={greentr} alt="Green Triangle" />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className=" sm:text-center lg:text-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">You are visiting the</span>
                  {' '}
                  <span className="block text-indigo-600 xl:inline">Contact</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mr-0 md:text-right">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>

            </main>
          </div>
        </div>
      </div>
      <div className="z-20 py-12 bg-gradient-to-b from-cusGreen-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <div className="mt-10" />
        </div>
      </div>
    </>
  );
}
