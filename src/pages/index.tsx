import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/textInput';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import {
  baseShowAnimation,
  mediumSecondShowAnimation,
  mediumShowAnimation,
} from '@/animations/animations';
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
  // const currencyList = ['$', '₽', '€'];
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className=' flex h-full gap-10 pl-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={mediumSecondShowAnimation}
          className='flex h-full w-2/5 flex-col items-center gap-1 rounded-2xl bg-black px-10 py-12 text-white'
        >
          <Image
            className='rounded-full'
            src={mockImg}
            width={150}
            height={150}
            alt='Picture of the author'
          />
          <p className='text-placeGray'>@sega</p>
          <p className='text-2xl'>Bergei Svinskii</p>
          <form action='#' className='flex w-full flex-col gap-4'>
            <TextInput placeholder='Enter your name' name='name' type='text' />
            <TextInput
              placeholder='Enter your login'
              name='login'
              type='text'
            />
            <TextInput
              placeholder='Enter your email'
              name='email'
              type='text'
            />
            <TextInput
              placeholder='Enter your password'
              name='password'
              type='text'
            />
          </form>
          <Button className='bg-primary-500 mt-auto flex w-full items-center justify-center'>
            save changes
          </Button>
        </motion.div>
        <div className='flex h-full w-full flex-col gap-10'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={baseShowAnimation}
            className='flex h-[120px] w-full items-center gap-4 rounded-2xl bg-black p-6 text-white'
          >
            <TextInput
              type='number'
              placeholder='Base currency:'
              name='currency'
            />
            <TextInput type='number' placeholder='Daily limit:' name='limit' />
            <TextInput
              type='number'
              placeholder='Save each month:'
              name='saved'
            />
          </motion.div>
          <div className='flex gap-10'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={mediumShowAnimation}
              className='text-placeGray flex h-[100px] w-1/2 items-center justify-between rounded-lg bg-black px-10'
            >
              <p>
                Money to paycheck: <br />{' '}
                <span className='text-white'>300$</span>
              </p>
              <div className='bg-dark flex aspect-square h-14 items-center justify-center rounded-full '>
                <CashIcon />
              </div>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={mediumSecondShowAnimation}
              className='text-placeGray flex h-[100px] w-1/2 items-center justify-between rounded-lg bg-black px-10'
            >
              <p>
                Saved money: <br /> <span className='text-white'>1500$</span>
              </p>
              <div className='bg-dark flex aspect-square h-14 items-center justify-center rounded-full '>
                <CashIcon />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={baseShowAnimation}
            className='h-full w-full rounded-2xl bg-black'
          ></motion.div>
        </div>
      </section>
    </Layout>
  );
}
