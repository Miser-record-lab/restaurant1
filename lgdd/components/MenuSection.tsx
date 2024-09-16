// components/MenuSection.tsx
import React from 'react';

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItemProps[];
}

export interface MenuItemProps {
  name: string;
  price: string;
  description: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ id, title, items }) => {
  return (
    <section id={id} className="mt-24 mb-24">
      <h2 className="text-3xl font-bold mx-4 text-center whitespace-nowrap mb-10 mt-10">
          {title}
        </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between border-b border-gray-700 py-6">
            <div className="max-w-[calc(100%-50px)] pr-2">
              <span className="font-bold text-lg">{item.name}</span>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
