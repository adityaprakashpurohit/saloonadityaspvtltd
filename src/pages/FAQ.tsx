import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { faqs } from '../data/faq';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Questions?"
          subtitle="Everything you need to know about your upcoming salon experience."
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-champagne overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none focus:bg-champagne/20 hover:bg-champagne/10 transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-serif text-lg text-espresso text-left">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-rose transition-transform duration-300 shrink-0 ml-4",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                )}
              >
                <p className="font-sans text-slate leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
