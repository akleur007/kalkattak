'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: '100px 0px 10px 0px',
  });

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <footer className="mt-auto">
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-lime-800 text-lg"
        >
          <span className="font-semibold">KALKATTAK</span> your friendly video
          guys
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-lime-800 text-lg"
        >
          <Link
            href="/impressum"
            className="text-stone-600 hover:bg-stone-900 hover:text-stone-50 -rotate-6 border border-stone-900 rounded-md p-1 flex items-center"
          >
            <span>Imprint</span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
