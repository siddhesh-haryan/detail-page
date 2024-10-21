'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ButtonWithArrow from './ButtonWithArrow';

export default function Services() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8  text-center sm:text-4xl lg:text-5xl">
          What can you achieve with
          <br />
          Appinventiv&apos;s ERP services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { percentage: '90%', description: 'High-End Process Automation' },
            { percentage: '80%', description: 'Improved Customer Service' },
            { percentage: '65%', description: 'Intelligent Data Analytics' },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {item.percentage}
              </p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <ButtonWithArrow href="/services/">
          Lets Discuss Your Project
        </ButtonWithArrow>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/assets/images/center-cta-banner.webp"
          alt="People working together at a computer"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
