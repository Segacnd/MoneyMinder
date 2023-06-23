import { useRouter } from 'next/router';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Account' },
  { href: '/income', label: 'Income' },
  { href: '/expenses', label: 'Expenses' },
];

export default function Navigation() {
  const supportInput = React.useId();
  const location = useRouter();
  return (
    <aside className='h-screen w-1/4 min-w-[250px] bg-black pl-10 pt-6 text-white max-xl:hidden'>
      <div className='flex h-full flex-col gap-20 pb-16'>
        <UnstyledLink href='/' className='text-2xl font-light '>
          Money <span className='text-primary-300'>Minder</span>
        </UnstyledLink>
        <nav>
          <ul className='flex flex-col gap-4 text-lg'>
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className={
                  location.asPath === href ? 'text-primary-400' : 'text-white'
                }
              >
                <UnstyledLink href={href} className='hover:text-primary-700'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mb-8 mt-auto'>
          <input type='checkbox' id={supportInput} />
          <label htmlFor={supportInput}> Support on</label>
        </div>
      </div>
    </aside>
  );
}
