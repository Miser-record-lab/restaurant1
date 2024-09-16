// components/ui/BentoGrid.js
'use client'

import { cn } from "@/lib/utils";
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  reverse = false,
  isMiddle = false,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  reverse?: boolean;  // Flag to reverse the order of text and image
  isMiddle?: boolean; // Flag for the middle row items
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.2] border border-transparent flex",
        reverse ? "flex-row-reverse" : "flex-row", // Reverse the flex direction if reverse is true
        className
      )}
    >
      {/* Image Section */}
      {img && (
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image 
            src={img} 
            alt={typeof title === 'string' ? title : ''}
            layout="responsive" 
            width={500} 
            height={300} 
            className="w-20 h-40 overflow-hidden"  //ici absolute
          />
        </div>
      )}

      {/* Text Section */}
      <div className={cn(
        "flex flex-col justify-between w-full p-4", 
        isMiddle ? "text-center items-center" : "justify-between"
      )}>
        <h3 className={cn(
          "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 text-xl", 
          isMiddle && "text-lg"
        )}>
          {title}
        </h3>
        <p className={cn(
          "font-sans text-neutral-600 text-sm dark:text-neutral-300", 
          isMiddle && "text-xs"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};
