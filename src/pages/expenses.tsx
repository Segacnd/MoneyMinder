import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ExpensesPage() {
  return (
    <Layout>
      <Seo templateTitle='Expenses' />

      <section className='bg-dark w-full text-white'>
        <div className='layout min-h-screen py-20'>Your expenses</div>
      </section>
    </Layout>
  );
}
