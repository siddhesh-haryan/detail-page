"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does a custom ERP system cost?",
    answer: (
      <span>
        The cost varies depending on your specific requirements. Contact our team for a detailed quote.
      </span>
    ),
  },
  {
    question: "How much time does it require to build an ERP solution?",
    answer: (
      <span>
        The duration of custom enterprise software development might range from a few days to months, depending on the project's size and other important variables including:
        <ul>
          <li>Project specifications</li>
          <li>Planned time to market</li>
          <li>Team size</li>
          <li>Platform and technology stack selection</li>
          <li>Integration requirements</li>
        </ul>
        For a precise cost and time estimation of your ERP project, please connect with our team of ERP developers.
      </span>
    ),
  },
  {
    question: "What ERP services does Appinventiv offer?",
    answer: (
      <span>
        We offer comprehensive ERP development and integration services tailored to your business needs.
      </span>
    ),
  },
  {
    question: "How can you benefit from Appinventiv's ERP services?",
    answer: (
      <span>
        Our ERP services can help streamline your business processes, improve efficiency, and drive growth.
      </span>
    ),
  },
];
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="relative bg-[#fffff5] rounded-xl p-6 m-6 border-zinc-100 border-2">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={onClick}
        >
          <h3 className="text-2xl font-medium pr-8 p-3">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-6 top-6"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-xl text-gray-600 whitespace-pre-line">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default function FAQ() {
      const [openIndex, setOpenIndex] = React.useState<number | null>(null);
      
      // Split FAQs into left and right columns
      const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
      const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);
    
      return (
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 p-3">
              {/* Left Column */}
              <div>
                {leftColumnFaqs.map((faq, index) => (
                  <FAQItem
                    key={index * 2}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index * 2}
                    onClick={() => setOpenIndex(openIndex === index * 2 ? null : index * 2)}
                  />
                ))}
              </div>
              
              {/* Right Column */}
              <div>
                {rightColumnFaqs.map((faq, index) => (
                  <FAQItem
                    key={index * 2 + 1}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index * 2 + 1}
                    onClick={() => setOpenIndex(openIndex === index * 2 + 1 ? null : index * 2 + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
      );
  }