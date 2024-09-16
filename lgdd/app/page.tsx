import Header from '@/components/Header';
import MagicButton from '@/components/ui/MagicButton';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="p-2 md:p-4 no-scrollbar relative font-qanaya">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0 min-h-screen"
        style={{ 
          backgroundImage: 'url(/background.png)', 
          backgroundSize: 'cover',
          opacity: 0.5,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-screen relative z-10">
        {/* Main Image Section */}
        <div className="col-span-1 md:col-span-3 bg-cover bg-center rounded-lg overflow-hidden relative md:h-full lg:h-[95vh] lg:max-h-[95vh]">
          <div className="relative w-full h-0 pb-[75%] md:pb-0 md:h-full">
            <Image
              src="/home.png"
              alt="Main Image"
              fill
              className="object-cover rounded-2xl "
              priority
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 75vw"
            />
          </div>
          <div
                className="absolute bottom-0 right-0 text-white p-2 px-4 py-2 rounded-tl-3xl z-10 flex items-center space-x-2"
                style={{
                  backgroundImage: 'url(/background.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'overlay',
                }}
              >
                <div className="flex space-x-4 mt-1 justify-center">
                    <Link href="https://www.instagram.com" passHref>
                        <Image 
                        src="/insta.svg" 
                        alt="Instagram" 
                        width={24} 
                        height={24} 
                        className="hover:opacity-75 transition-opacity"
                        />
                    </Link>

                    <Link href="https://www.facebook.com" passHref>
                        <Image 
                        src="/fb.svg" 
                        alt="Facebook" 
                        width={24} 
                        height={24} 
                        className="hover:opacity-75 transition-opacity"
                        />
                    </Link>
                </div>
              </div>
          <div>
            <Header />
          </div>

          <div className="absolute bottom-10 left-10 text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold">LES GOUTTES DE DIEU</h1>
          </div>
        </div>

        {/* Side Image Sections */}
        <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-1 gap-4 h-[95vh] max-h-[95vh] sm:mb-10 mb-10">
          <Link href="/menu">
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center aspect-w-1 aspect-h-1 md:h-full">
              <div className="relative w-full h-0 pb-[75%] md:pb-0 md:h-full">
                <Image
                  src="/menu.png"
                  alt="Menu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 text-white p-2 px-4 py-2 rounded-tl-3xl z-10 flex items-center space-x-2"
                style={{
                  backgroundImage: 'url(/background.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'overlay',
                }}
              >
                <p>MENU</p>
                <div className="border border-white rounded-full flex items-center justify-center h-6 w-6">
                  <FiArrowRight className="text-white text-xs" />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/reservation">
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center aspect-w-1 aspect-h-1 md:h-full">
              <div className="relative w-full h-0 pb-[75%] md:pb-0 md:h-full">
                <Image
                  src="/reservation.png"
                  alt="Reservation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 text-white p-2 px-4 py-2 rounded-tl-3xl z-10 flex items-center space-x-2"
                style={{
                  backgroundImage: 'url(/background.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'overlay',
                }}
              >
                <p>RESERVATION</p>
                <div className="border border-white rounded-full flex items-center justify-center h-6 w-6">
                  <FiArrowRight className="text-white text-xs" />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/about">
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center aspect-w-1 aspect-h-1 md:h-full">
              <div className="relative w-full h-0 pb-[75%] md:pb-0 md:h-full">
                <Image
                  src="/resto.png"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 text-white p-2 px-4 py-2 rounded-tl-3xl z-10 flex items-center space-x-2"
                style={{
                  backgroundImage: 'url(/background.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'overlay',
                }}
              >
                <p>OUR STORY</p>
                <div className="border border-white rounded-full flex items-center justify-center h-6 w-6">
                  <FiArrowRight className="text-white text-xs" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Force space at the bottom */}
        <div className="h-10 w-full"></div>
      </div>
    </main>
  );
}
