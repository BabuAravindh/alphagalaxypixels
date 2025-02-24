import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setAnswerShowing] = useState(false);

  return (
    <article
      className={`faq p-4 border border-black rounded-md bg-white cursor-pointer transition-colors duration-300 ${
        isAnswerShowing ? 'bg-gray-100' : ''
      }`}
      onClick={() => setAnswerShowing((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{question}</h4>
        <button className="text-xl">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p className="mt-3 text-black text-base">{answer}</p>}
    </article>
  );
};

export default FAQ;
