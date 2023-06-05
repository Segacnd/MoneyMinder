import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextButton from '@/components/buttons/TextButton';
import Layout from '@/components/layout/Layout';
import IncomePopupPage from '@/components/popup/incomePopup';
import Seo from '@/components/Seo';

import {
  baseShowAnimation,
  mediumSecondShowAnimation,
} from '@/animations/animations';

export default function IncomePage() {
  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />
      <IncomePopupPage />

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
            <Button>Add income</Button>
          </div>
          <table
            align='left'
            className='w-full overflow-hidden rounded-lg text-left '
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
              <tr>
                <td className='p-6'>My UX/UI job for Techwings</td>
                <td>$</td>
                <td>08/10/23</td>
                <td>5000</td>
              </tr>
              <tr className='bg-subDark'>
                <td className='p-6'>My UX/UI job for Techwings</td>
                <td>$</td>
                <td>08/10/23</td>
                <td>5000</td>
              </tr>
              <tr>
                <td className='p-6'>My UX/UI job for Techwings</td>
                <td>$</td>
                <td>08/10/23</td>
                <td>5000</td>
              </tr>
              <tr className='bg-subDark'>
                <td className='p-6'>My UX/UI job for Techwings</td>
                <td>$</td>
                <td>08/10/23</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
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
