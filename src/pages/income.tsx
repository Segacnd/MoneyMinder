import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import AddIncome from '@/components/forms/addIncome';
import IncomeRow from '@/components/incomeRow';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import {
  baseShowAnimation,
  incomeAnimation,
  incomeTransition,
  mediumSecondShowAnimation,
} from '@/animations/animations';
import { useAppSelector } from '@/redux/store';

export default function IncomePage() {
  const { incomes } = useAppSelector((state) => state.userReducer);
  const [isAddIncomeFormOpen, setIsAddIncomeFormOpen] = React.useState(false);

  const closeIncomeFormCB = (value: boolean) => {
    setIsAddIncomeFormOpen(value);
  };

  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main className='bg-dark flex h-full w-full justify-between gap-10 pl-10 text-white '>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={mediumSecondShowAnimation}
          className='flex h-full w-[65%] flex-col rounded-2xl bg-black p-6'
        >
          <h2>Incomes</h2>
          <div className='my-4 flex justify-between'>
            <TextButton className='text-white'>Sort by latest</TextButton>
            <Button onClick={() => setIsAddIncomeFormOpen((prev) => !prev)}>
              Add income
            </Button>
          </div>

          <div className='h-[90%] max-h-[700px] overflow-y-auto overflow-x-hidden'>
            <table
              align='left'
              className='relative mb-4 w-full overflow-y-auto rounded-lg text-left'
            >
              <thead className='bg-dark sticky top-0 z-40'>
                <tr className=''>
                  <th className='p-6'>Title</th>
                  <th>currency</th>
                  <th>Income date</th>
                  <th>Ammount</th>
                </tr>
              </thead>

              <tbody>
                <tr className='h-1'></tr>
                <tr>
                  <td colSpan={4}>
                    <motion.div
                      variants={incomeAnimation}
                      animate={isAddIncomeFormOpen ? 'show' : 'hide'}
                      transition={incomeTransition}
                      className='rounded-b-lg text-white'
                    >
                      <AddIncome closeForm={closeIncomeFormCB} />
                    </motion.div>
                  </td>
                </tr>
                <tr className='h-1'></tr>
                {incomes.map((el) => (
                  <IncomeRow key={el.id + el.jobTitle} obj={el} />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={baseShowAnimation}
          className='h-full w-[30%] rounded-2xl bg-black p-6'
        >
          <h2>Exchanger</h2>
          <input
            placeholder='Exchange in :'
            list='currency'
            className='bg-dark my-4 h-14 w-full rounded-lg border-0 pl-4'
          />
          <input
            placeholder='Exchange in :'
            list='currency'
            className='bg-dark my-4 h-14  w-full rounded-lg border-0 pl-4'
          />
          <input
            placeholder='Exchange in :'
            list='currency'
            className='bg-dark my-4 h-14  w-full rounded-lg border-0 pl-4'
          />
          <input
            placeholder='Exchange in :'
            list='currency'
            className='bg-dark my-4 h-14  w-full rounded-lg border-0 pl-4'
          />
        </motion.div>
      </main>
    </Layout>
  );
}
