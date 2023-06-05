import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import {
  baseShowAnimation,
  mediumSecondShowAnimation,
} from '@/animations/animations';
import DeleteIcon from '@/assets/icons/delete';
import ListIcon from '@/assets/icons/list';

export default function ExpensesPage() {
  return (
    <Layout>
      <Seo templateTitle='Expenses' />

      <section className='bg-dark flex h-full w-full justify-between gap-10 pl-10 text-white '>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={mediumSecondShowAnimation}
          className='flex h-full w-[30%] flex-col rounded-2xl bg-black p-6'
        >
          <div className='flex items-center justify-between'>
            <h3>Expanses</h3>
            <p className='text-primary-500'>Today</p>
          </div>

          <div>
            <div className='bg-dark h-18 relative my-6 flex w-full gap-4 rounded-xl p-4'>
              <div className='flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-black'>
                <ListIcon />
              </div>
              <div className='flex-1'>
                <p>Title</p>
                <p>700$</p>
              </div>
              <button className='self-start'>
                <DeleteIcon />
              </button>
            </div>

            <div className='bg-dark h-18 relative my-6 flex w-full gap-4 rounded-xl p-4'>
              <div className='flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-black'>
                <ListIcon />
              </div>
              <div className='flex-1'>
                <p>Title</p>
                <p>700$</p>
              </div>
              <button className='self-start'>
                <DeleteIcon />
              </button>
            </div>

            <div className='bg-dark h-18 relative my-6 flex w-full gap-4 rounded-xl p-4'>
              <div className='flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-black'>
                <ListIcon />
              </div>
              <div className='flex-1'>
                <p>Title</p>
                <p>700$</p>
              </div>
              <button className='self-start'>
                <DeleteIcon />
              </button>
            </div>
          </div>
          <Button className='bg-primary-600 mt-auto flex w-full items-center justify-center'>
            Add expanses
          </Button>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={baseShowAnimation}
          className='h-full w-[65%] rounded-2xl bg-black p-6'
        ></motion.div>
      </section>
    </Layout>
  );
}
