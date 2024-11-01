'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-10 mt-12">
        {navigationLinks.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ rotate: 10, transition: { duration: 0.2 } }}
          >
            <Link
              href={item.href}
              className={clsx(
                'text-2xl text-stone-600 hover:text-stone-900 transition-colors uppercase',
                pathname === item.href && 'font-bold text-lime-800',
              )}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
