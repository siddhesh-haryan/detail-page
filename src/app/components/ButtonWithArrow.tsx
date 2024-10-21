"use client"
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

import { ReactNode } from 'react';

interface ButtonWithArrowProps {
  href: string;
  children: ReactNode;
}

export default function ButtonWithArrow({ href, children }: ButtonWithArrowProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={href}>
      <button
        className="inline-flex items-center justify-center px-6 py-3 border-transparent text-base font-medium rounded-xl border-2 hover:bg-blue-700 
        hover:text-white transition-all duration-300 border-slate-700 hover:border-blue-700"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
        <ArrowRight
          className={`ml-2 -mr-1 h-5 w-5 transition-transform duration-300 transform ${isHovering ? 'animate-move' : ''}`}
          aria-hidden="true"
        />
      </button>
    </Link>
  );
}
