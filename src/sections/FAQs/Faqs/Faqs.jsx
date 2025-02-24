import React, { useState } from 'react';
import './FAQs.css';
import{faqs} from '../assests'
 const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 
  return (
    <section id="faqs" className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 min-h-full items-center mt-20">
      <div className="flex flex-col text-left basis-1/2">
        
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
      </div>
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              <span className="flex-shrink-0 text-lg font-bold ml-auto">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faqs;