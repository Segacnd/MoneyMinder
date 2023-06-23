import { motion } from 'framer-motion';
import * as React from 'react';

import CashSetup from '@/components/cashSetup';
import ChangeUserInfo from '@/components/forms/changeUserInfo';
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
import { useAppSelector } from '@/redux/store';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

export default function HomePage() {
  const { currency } = useAppSelector((state) => state.userReducer);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* <Registration /> */}
      <section className=' flex h-full gap-10 pl-10'>
        <ChangeUserInfo />
        <div className='flex h-full w-full flex-col gap-10'>
          <CashSetup />
          <div className='flex gap-10'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={mediumShowAnimation}
              className='text-placeGray flex h-[100px] w-1/2 items-center justify-between rounded-lg bg-black px-10'
            >
              <p>
                Money to paycheck: <br />{' '}
                <span className='text-white'>300{currency}</span>
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
                Saved money: <br />
                <span className='text-white'>1500{currency}</span>
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
            className='h-full w-full rounded-2xl bg-black p-4'
          ></motion.div>
        </div>
      </section>
    </Layout>
  );
}
