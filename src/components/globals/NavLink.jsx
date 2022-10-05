import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavLink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (!props.className) props.className = '';

  if (isActive) {
    props.className += ' active';
  }

  return (
    <Link href={href}>
      <a
        {...props}
        className={props.className + ' hover:border-b-2 border-emerald-500'}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
