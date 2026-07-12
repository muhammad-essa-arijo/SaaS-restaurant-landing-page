"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string | number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  const toggleItem = (id: string | number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-lg border border-charcoal-200 transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-charcoal-50"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                openItems.includes(item.id) && "rotate-180"
              )}
            />
          </button>
          {openItems.includes(item.id) && (
            <div className="border-t border-charcoal-200 px-6 py-4 text-charcoal-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
