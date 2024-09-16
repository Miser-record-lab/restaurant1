import MagicButton from '@/components/ui/MagicButton';
import Image from 'next/image';
import Link from 'next/link';
import { ReservationForm } from '@/components/Form'; // Import du composant
import Header from '@/components/Header';

export default function Reservation() {
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
              src="/reservation.png" // Replace with your image path
              alt="Reservation Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-6xl font-bold">BOOK A TABLE</h1>
            </div>
          </div>
          
          {/* Right Form Section */}
          <div className="overflow-y-scroll lg:px-16 px-8 lg:py-8 py-6 rounded-2xl no-scrollbar mb-10 h-[95vh] border-slate-400 border-[0.5px] mx-5">
            <h2 className="text-4xl font-bold text-center mb-8 mt-6">RESERVATION</h2>
            <p className="text-center text-gray-300 mb-4">
              Secure your spot at Les Gouttes De Dieu, where exceptional French cuisine and a delightful dining experience await.
            </p>

            {/* Utilisation du composant ReservationForm */}
            <ReservationForm />
          </div>
        </div>

        {/* Container for small and medium screens */}
        <div className="lg:hidden flex flex-col">
          
        <Header />

          {/* Image Section */}
          <div className="relative h-72">
            <Image
              src="/reservation.png" // Replace with your image path
              alt="Reservation Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="text-4xl font-bold">BOOK A TABLE</h1>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-4 bg-opacity-50">
            <h2 className="text-3xl font-bold text-center mb-4 mt-12">RESERVATION</h2>
            <p className="text-center text-gray-300">
              Secure your spot at Les Gouttes De Dieu, where exceptional French cuisine and a delightful dining experience await.
            </p>
            {/* Utilisation du composant ReservationForm */}
            <ReservationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
