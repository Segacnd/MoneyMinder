import { motion } from 'framer-motion';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import {
  arrowRotateAnimation,
  arrowTransition,
  baseShowAnimation,
  incomeAnimation,
  incomeTransition,
  mediumSecondShowAnimation,
} from '@/animations/animations';
import ArrowDown from '@/assets/icons/arrowDown';
import DeleteIcon from '@/assets/icons/delete';
import ListIcon from '@/assets/icons/list';
import { expensesCategoryList } from '@/constants';

export default function ExpensesPage() {
  const [lala, setLala] = React.useState('category');
  const [isOpen, setIsOpen] = React.useState(false);
  const { register, watch } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const testWatch = watch('test');
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
        >
          <form>
            <h2>Radio buttons test</h2>
            <button
              type='button'
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className='bg-dark flex flex w-[130px] items-center justify-between rounded px-2 py-2'
            >
              <div>{lala}</div>
              <motion.div
                animate={isOpen ? 'up' : 'down'}
                transition={arrowTransition}
                variants={arrowRotateAnimation}
              >
                <ArrowDown />
              </motion.div>
            </button>
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={incomeAnimation}
              animate={isOpen ? 'show' : 'hide'}
              transition={incomeTransition}
              className='mt-4 flex flex-wrap gap-2'
            >
              {expensesCategoryList.map((el) => (
                <label
                  onClick={() => {
                    setLala(el.category);
                    setIsOpen(false);
                  }}
                  className={`${
                    testWatch === el.category
                      ? 'hidden'
                      : 'text-primary-50 bg-dark flex h-[90px] w-[90px] flex-col-reverse items-center justify-center rounded '
                  }`}
                  key={el.category}
                  htmlFor={el.category}
                >
                  <input
                    className='hidden'
                    {...register('test')}
                    type='radio'
                    name='test'
                    value={el.category}
                    id={el.category}
                  />
                  {el.category}
                  {el.label()}
                </label>
              ))}
            </motion.div>
            dsfsadfasdf
          </form>
        </motion.div>
      </section>
    </Layout>
  );
}
