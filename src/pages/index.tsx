import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CashIcon from '@/assets/icons/cash';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import mockImg from '@/assets/images/Foto4ka.jpg';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

export default function HomePage() {
  const currencyList = ['$', '₽', '€'];
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className=' flex h-full gap-10 pl-10'>
        <div className='flex h-full w-[500px] flex-col items-center gap-1 rounded-2xl bg-black px-10 py-12 text-white'>
          <Image
            className='rounded-full'
            src={mockImg}
            width={150}
            height={150}
            alt='Picture of the author'
          />
          <p className='text-placeGray'>@sega</p>
          <p className='text-2xl'>Bergei Svinskii</p>
          <form action='#' className='flex w-full flex-col'>
            <input
              type='text'
              placeholder='Enter your login'
              className=' bg-dark my-2.5 h-10 w-full rounded-lg border-0 '
            />
            <input
              type='text'
              placeholder='Enter your email'
              className=' bg-dark my-2.5 h-10 w-full rounded-lg border-0 '
            />
            <input
              type='text'
              placeholder='Enter your password'
              className=' bg-dark my-2.5 h-10 w-full rounded-lg border-0 '
            />
            <input
              type='text'
              placeholder='Enter your name'
              className=' bg-dark my-2.5 h-10 w-full rounded-lg border-0 '
            />
          </form>
          <Button className='bg-primary-500 mt-auto flex w-full items-center justify-center'>
            save changes
          </Button>
        </div>
        <div className='flex h-full w-full flex-col gap-10'>
          <div className='flex h-[120px] w-full items-center gap-4 rounded-2xl bg-black p-6 text-white'>
            <input
              placeholder='Base currency:'
              list='currency'
              className='bg-dark h-full w-full rounded-lg border-0 pl-4'
            />
            <datalist id='currency'>
              {currencyList.map((el) => (
                <option key={el}>{el}</option>
              ))}
            </datalist>
            <input
              type='text'
              placeholder='Daily limit:'
              className='bg-dark h-full w-full rounded-lg border-0 '
            />
            <input
              type='text'
              placeholder='save each month:'
              className='bg-dark h-full w-full rounded-lg border-0 '
            />
          </div>
          <div className='flex gap-10'>
            <div className='text-placeGray flex h-[100px] w-1/2 items-center justify-between rounded-lg bg-black px-10'>
              <p>
                Money to paycheck: <br />{' '}
                <span className='text-white'>300$</span>
              </p>
              <div className='bg-dark flex aspect-square h-14 items-center justify-center rounded-full '>
                <CashIcon />
              </div>
            </div>
            <div className='text-placeGray flex h-[100px] w-1/2 items-center justify-between rounded-lg bg-black px-10'>
              <p>
                Saved money: <br /> <span className='text-white'>1500$</span>
              </p>
              <div className='bg-dark flex aspect-square h-14 items-center justify-center rounded-full '>
                <CashIcon />
              </div>
            </div>
          </div>
          <div className='h-full w-full rounded-2xl bg-black'></div>
        </div>
      </section>
    </Layout>
  );
}
