import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import AddIncome from '@/components/forms/addIncome';
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

  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />
      {/* <IncomePopupPage /> */}
      {/* <motion.div
        variants={incomeAnimation}
        animate={isAddIncomeFormOpen ? 'show' : 'hide'}
        transition={toastTransition}
        className='shadow-primary-200 absolute left-[40%] top-[-300px] w-fit  rounded-b-lg bg-black px-6 py-4 text-white shadow-sm'
      >
        <AddIncome />
      </motion.div> */}

      <main className='bg-dark flex h-full w-full justify-between gap-10 pl-10 text-white'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={mediumSecondShowAnimation}
          className='h-full w-[65%] rounded-2xl bg-black p-6'
        >
          <h2>Incomes</h2>
          <div className='my-4 flex justify-between'>
            <TextButton className='text-white'>Sort by latest</TextButton>
            <Button onClick={() => setIsAddIncomeFormOpen((prev) => !prev)}>
              Add income
            </Button>
          </div>
          <table
            align='left'
            className='mb-4 w-full overflow-hidden rounded-lg text-left'
          >
            <thead className='bg-dark'>
              <tr>
                <th className='p-6'>Title</th>
                <th>currency</th>
                <th>Income date</th>
                <th>Ammount</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((el) => (
                <tr className='even:bg-subDark' key={el.jobTitle}>
                  <td className='p-6 '>{el.jobTitle}</td>
                  <td>{el.currency}</td>
                  <td>{el.incomeDate}</td>
                  <td>{el.ammount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <motion.div
            variants={incomeAnimation}
            animate={isAddIncomeFormOpen ? 'show' : 'hide'}
            transition={incomeTransition}
            className='rounded-b-lg text-white'
          >
            <AddIncome />
          </motion.div>
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
