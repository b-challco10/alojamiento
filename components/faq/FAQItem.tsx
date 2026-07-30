"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-7 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
