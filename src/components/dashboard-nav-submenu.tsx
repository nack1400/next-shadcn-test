'use client';
import React from 'react';
import Link from 'next/link';

// Assuming navItems structure includes a potential submenu array
export const DashboardNavSubmenu = ({ items }) => {
  return (
    <ul className='space-y-2'>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <p className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'>
              {item.title}
            </p>
          </Link>
          {item.submenu && (
            <ul className='pl-4'>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href}>
                    <p className='block p-2 text-sm font-normal text-gray-700 rounded-lg hover:bg-gray-50'>
                      {subItem.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
