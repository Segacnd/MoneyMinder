import { motion } from 'framer-motion';
import * as React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import ChangeUserInfo from '@/components/forms/changeUserInfo';
import { Input } from '@/components/inputs/Input';
import { Select } from '@/components/inputs/Select';
import Layout from '@/components/layout/Layout';
import SaveEachMonth from '@/components/saveEachMonth';
import SelectCurrency from '@/components/selectCurrency';
import Seo from '@/components/Seo';

import {
  baseShowAnimation,
  mediumSecondShowAnimation,
  mediumShowAnimation,
} from '@/animations/animations';
import CashIcon from '@/assets/icons/cash';
import { currencySymbolsList } from '@/constants';
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
  const { register, watch, handleSubmit } = useForm<FieldValues>({
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const { currency } = useAppSelector((state) => state.userReducer);

  const handleSave = (data: FieldValues) => {
    data;
  };

  const testValue = watch('test');

  React.useEffect(() => {
    if (testValue?.length) {
      handleSave(testValue);
    }
  }, [testValue]);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* <Registration /> */}
      <section className=' flex h-full gap-10 pl-10'>
        <ChangeUserInfo />
        <div className='flex h-full w-full flex-col gap-10'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={baseShowAnimation}
            className='flex h-[120px] w-full items-center gap-4 rounded-2xl bg-black p-6 text-white'
          >
            <SelectCurrency />
            <div className='w-full'>
              <Input
                name='dailyLimit'
                placeholder='Daily limit:'
                type='text'
                isClear={false}
              />
            </div>
            <SaveEachMonth />
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
          >
            <form onSubmit={handleSubmit(handleSave)}>
              <Select
                list={currencySymbolsList}
                placeholder='Base currency:'
                name='testik'
                register={register}
              />
              <input type='submit' value='adsasd' />
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
