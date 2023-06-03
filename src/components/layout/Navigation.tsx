import { useRouter } from 'next/router';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Account' },
  { href: '/income', label: 'Income' },
  { href: '/expenses', label: 'Expenses' },
];

export default function Navigation() {
  const location = useRouter();
  return (
    <aside className='h-screen w-1/4 bg-black pl-10 pt-14 text-white'>
      <div className='flex flex-col gap-20'>
        <UnstyledLink href='/' className='text-2xl font-light '>
          Cash <span className='text-primary-300'>Controller</span>
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
                <UnstyledLink href={href} className='hover:text-primary-400'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
