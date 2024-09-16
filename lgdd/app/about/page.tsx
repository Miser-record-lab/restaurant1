// pages/about.js
import Header from '@/components/Header';
import MagicButton from '@/components/ui/MagicButton';
import RatingCard from '@/components/ui/RatingCard';
import UniqueAccordion from '@/components/ui/UniqueAccordion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
            <Header />


            <Image
              src="/resto.png" // Replace with your image path
              alt="About Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-6xl font-bold">ABOUT</h1>
            </div>
          </div>
          
          {/* Right Content Section */}
          <div className="overflow-y-scroll px-6 lg:py-8 py-6 rounded-2xl no-scrollbar mb-10 h-[95vh] mx-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* First Row */}
              <div className="col-span-2 flex flex-col justify-between p-6 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4">FRENCH CUISINE REDEFINED</h2>
                <p className="text-gray-300">
                  Where culinary craftsmanship meets modern elegance. Indulge in the finest French food to elevate your dining experience.
                </p>
              </div>
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/cocktails.png" 
                  alt="Cocktails"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>

              {/* Second Row */}
              
                <RatingCard 
                    title="TRIP ADVISOR"
                    description="BEST TASTE"
                />
                <RatingCard 
                    title="MICHELIN GUIDE"
                    description="QUALITY FOOD"
                />
                <RatingCard
                    title="START DINING"
                    description="COOL VIBE"
                />
              

              {/* Third Row */}
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/assiette.png" 
                  alt="Assiette"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="col-span-2 flex flex-col justify-between p-6 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4">OUR STORY</h2>
                <p className="text-gray-300">
                  Founded with a deep love for traditional French flavors, Le Bistrot Français began its journey in the charming streets of Lyon. Over the years, it has blossomed into a sanctuary for aficionados of French cuisine.
                </p>
              </div>
            </div>
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
          
          {/* Header */}
          <Header />

          {/* Image Section */}
          <div className="relative h-72">
            <Image
              src="/resto.png" // Replace with your image path
              alt="About Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="text-4xl font-bold">ABOUT</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 bg-opacity-50 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Row */}
              <div className="flex flex-col justify-between p-6 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4 text-center">FRENCH CUISINE REDEFINED</h2>
                <p className="text-neutral-300 text-center">
                  Where culinary craftsmanship meets modern elegance. Indulge in the finest French food to elevate your dining experience.
                </p>
              </div>
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/cocktails.png" 
                  alt="Cocktails"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>

              {/* Second Row */}
              <RatingCard 
                    title="TRIP ADVISOR"
                    description="BEST TASTE"
                />
                <RatingCard 
                    title="MICHELIN GUIDE"
                    description="QUALITY FOOD"
                />
                <RatingCard 
                    title="START DINING"
                    description="COOL VIBE"
                />
              

              {/* Third Row */}
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/assiette.png" 
                  alt="Assiette"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex flex-col justify-between p-6 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4 text-center">OUR STORY</h2>
                <p className="text-neutral-300 text-center">
                  Founded with a deep love for traditional French flavors, Le Bistrot Français began its journey in the charming streets of Lyon.
                </p>
              </div>
            </div>
            <div className="p-4">
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
    </main>
  );
}
