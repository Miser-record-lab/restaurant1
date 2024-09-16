// app/menu/page.tsx
import Image from 'next/image';
import { MenuSection, MenuItemProps } from '@/components/MenuSection';
import Header from '@/components/Header';
import UniqueAccordion from '@/components/ui/UniqueAccordion';

const appetizers: MenuItemProps[] = [
  { name: 'SALADE DE CHÈVRE CHAUD', price: '$12', description: 'Grilled rib steak with a red wine sauce, served with pommes frites and sautéed seasonal vegetables.' },
  { name: 'ESCARGOTS À LA BOURGUIGNONNE', price: '$16', description: 'Burgundy snails baked in garlic herb butter.' },
  { name: 'SOUPE À L\'OIGNON', price: '$12', description: 'Classic French onion soup topped with a toasted Gruyère crouton.' },
  { name: 'TARTARE DE SAUMON', price: '$18', description: 'Freshly chopped salmon tartare with capers, shallots, and a dill mustard sauce.' },
];

const mainCourses: MenuItemProps[] = [
  { name: 'ENTRECÔTE GRILLÉE', price: '$26', description: 'Grilled rib steak with a red wine sauce, served with pommes frites and sautéed seasonal vegetables.' },
  { name: 'CONFIT DE CANARD', price: '$24', description: 'Slow-cooked duck leg confit with a crispy skin, accompanied by a garlic potato mash and orange glaze.' },
  { name: 'FILET DE BAR À LA PROVENÇALE', price: '$28', description: 'Seabass filet with a Provençal herb crust, served over ratatouille.' },
  { name: 'CARRÉ D\'AGNEAU RÔTI', price: '$26', description: 'Roasted rack of lamb with a rosemary and garlic crust, mint jus, and a side of gratin dauphinois.' },
  { name: 'COQ AU VIN', price: '$24', description: 'Chicken braised in red wine with lardons, mushrooms, and onions, served with buttered noodles.' },
  { name: 'RISOTTO AUX CHAMPIGNONS ET TRUFFES', price: '$31', description: 'Creamy mushroom risotto finished with truffle oil and Parmesan shavings.' },
  { name: 'BOEUF BOURGUIGNON', price: '$29', description: 'Beef stewed in red Burgundy wine with pearl onions, mushrooms, and carrots, served with mashed potatoes.' },
];

const desserts: MenuItemProps[] = [
  { name: 'CRÈME BRULÉE', price: '$8', description: 'Classic vanilla crème brûlée with a caramelized sugar crust.' },
  { name: 'TARTE TATIN', price: '$8', description: 'Upside-down caramelized apple tart served warm with vanilla ice cream.' },
  { name: 'MOUSSE AU CHOCOLAT', price: '$8', description: 'Rich chocolate mousse with a hint of Cointreau.' },
  { name: 'PROFITEROLES', price: '$10', description: 'Choux pastry filled with vanilla ice cream and topped with warm chocolate sauce.' },
];

export default function Menu() {
  return (
    <main className="p-2 md:p-4 no-scrollbar relative font-qanaya">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: 'url(/background.png)' }}
      ></div>

      <div className="min-h-screen text-white relative z-10">
        {/* Container for large screens */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:h-screen">
          
          {/* Left Image Section */}
          <div className="p-10 relative h-[95vh] max-h-[95vh] rounded-2XL">
            {/* Header */}
            <Header />
            
            <Image
              src="/menu.png"
              alt="Menu Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-6xl font-bold">MENU</h1>
            </div>
          </div>
          
          {/* Right Menu Section */}
          <div className="overflow-y-scroll lg:px-16 px-8 lg:py-8 py-6 rounded-2xl no-scrollbar mb-10 h-[95vh] border-slate-400 border-[0.5px] mx-5">
            <nav className="flex justify-center space-x-4 mb-8">
              <a href="#appetizers" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800">Appetizers</a>
              <a href="#main-courses" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800">Main Courses</a>
              <a href="#desserts" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800">Desserts</a>
            </nav>

            <MenuSection id="appetizers" title="APPETIZERS" items={appetizers} />
            <MenuSection id="main-courses" title="MAIN COURSES" items={mainCourses} />
            <MenuSection id="desserts" title="DESSERTS" items={desserts} />

            <div className="p-4 mt-8">
              <UniqueAccordion
                question="WHERE DO OUR PRODUCTS COME FROM?" 
                answer="Our products are sourced exclusively from the finest regions across France, ensuring that each ingredient reflects the rich culinary heritage."
              />
              <UniqueAccordion 
                question="WHO ARE OUR SUPPLIERS?" 
                answer="We are proud to partner with a select group of artisanal producers and family-owned farms throughout France."
              />
              <UniqueAccordion 
                question="CAN WE ORDER TAILOR-MADE DISHES?" 
                answer="Yes, we offer tailor-made dishes to cater to our guests' individual preferences and dietary requirements."
              />
            </div>
          </div>
        </div>

        {/* Container for small and medium screens */}
        <div className="lg:hidden flex flex-col">
          
        <Header />

          {/* Image Section */}
          <div className="relative h-72">
            <Image
              src="/menu.png"
              alt="Menu Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="text-4xl font-bold">MENU</h1>
            </div>
          </div>

          {/* Menu Section */}
          <div className="p-4 bg-opacity-50">
            <nav className="flex justify-center space-x-2 mb-6 mt-6">
              <a href="#appetizers" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800 text-sm items-center text-center">Appetizers</a>
              <a href="#main-courses" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800 text-sm items-center text-center">Main Courses</a>
              <a href="#desserts" className="px-4 py-2 border border-slate-500 rounded-full hover:bg-gray-800 text-sm items-center text-center">Desserts</a>
            </nav>
            <div className="gap-2.5rem">
              <MenuSection id="appetizers" title="APPETIZERS" items={appetizers} />
              <MenuSection id="main-courses" title="MAIN COURSES" items={mainCourses} />
              <MenuSection id="desserts" title="DESSERTS" items={desserts} />

              <div className="p-4 mt-8">
              <UniqueAccordion
                question="WHERE DO OUR PRODUCTS COME FROM?" 
                answer="Our products are sourced exclusively from the finest regions across France, ensuring that each ingredient reflects the rich culinary heritage."
              />
              <UniqueAccordion 
                question="WHO ARE OUR SUPPLIERS?" 
                answer="We are proud to partner with a select group of artisanal producers and family-owned farms throughout France."
              />
              <UniqueAccordion 
                question="CAN WE ORDER TAILOR-MADE DISHES?" 
                answer="Yes, we offer tailor-made dishes to cater to our guests' individual preferences and dietary requirements."
              />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
