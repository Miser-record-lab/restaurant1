import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FiMinus } from 'react-icons/fi';

export default function Contact() {
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
              src="/contact.png" // Replace with your contact image path
              alt="Contact Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-6xl font-bold">CONTACT</h1>
            </div>
          </div>
          
          {/* Right Content Section */}
          <div className="overflow-y-scroll px-6  rounded-2xl no-scrollbar mb-10 mx-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              
              {/* First Row */}
                <div className="flex flex-col justify-between py-6 px-4 rounded-xl border-slate-600 border-[0.2px]">
                    <h2 className="font-bold text-xl text-center">OPENING<br />HOURS</h2>
                    <ul className="text-neutral-300">
                        {[
                        { day: "Monday", hours: "16:00 - 22:30" },
                        { day: "Tuesday", hours: "16:00 - 22:30" },
                        { day: "Wednesday", hours: "16:00 - 22:30" },
                        { day: "Thursday", hours: "16:00 - 22:30" },
                        { day: "Friday", hours: "16:00 - 22:30" },
                        { day: "Sat & Sun", hours: "16:00 - 22:30" },
                        ].map(({ day, hours }, index) => (
                        <li key={index} className="flex items-center justify-between mt-1">
                            <span className="text-left">{day}</span>
                            <span className="flex-grow mx-2 border-b border-gray-200 border-dotted"></span>
                            <span className="text-right">{hours}</span>
                        </li>
                        ))}
                    </ul>
                </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Replace these images with your actual paths */}
                <Image 
                  src="/home.png" 
                  alt="Image 1"
                  width={150} 
                  height={150} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/menu.png" 
                  alt="Image 2"
                  width={150} 
                  height={150} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/reservation.png" 
                  alt="Image 3"
                  width={150} 
                  height={150} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/resto.png" 
                  alt="Image 4"
                  width={150} 
                  height={150} 
                  className="object-cover w-full h-full rounded-xl" 
                />
              </div>

              {/* Second Row */}
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/map.png" 
                  alt="Map"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex flex-col justify-between p-6 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl text-center">GET IN TOUCH</h2>
                <ul className="text-neutral-300 space-y-4">
                        {[
                        { text: "ADDRESS", answer: "24 Avenue Foch, Lyon 69006" },
                        { text: "PHONE", answer: "+33 7 86 25 68 29" },
                        { text: "EMAIL", answer: "lgdd@gmail.com" },
                        ].map(({ text, answer }, index) => (
                        <li key={index} className="flex items-start justify-between gap-2">
                            <span className="text-left">{text}</span>
                            <span className="text-right">{answer}</span>
                        </li>
                        ))}
                    </ul>
                {/* <p className="text-gray-300 justify-between">
                  <strong>ADDRESS:</strong> 24 Avenue Foch, Lyon 69006<br/>
                  <strong>PHONE:</strong> +33 7 86 25 68 29<br/>
                  <strong>EMAIL:</strong> lgdd@gmail.com
                </p> */}
                <div className="flex space-x-4 mt-4 justify-end">
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
              src="/contact.png" // Replace with your contact image path
              alt="Contact Image"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="text-4xl font-bold">CONTACT</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 bg-opacity-50 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Row */}
              <div className="flex flex-col justify-between p-3 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4 text-center justify-center">OPENING HOURS</h2>
                <ul className="text-neutral-300 text-center">
                  <li>Monday - Friday: 16:00 - 22:30</li>
                  <li>Saturday - Sunday: 16:00 - 22:30</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* Replace these images with your actual paths */}
                <Image 
                  src="/home.png" 
                  alt="Image 1"
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/menu.png" 
                  alt="Image 2"
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/reservation.png" 
                  alt="Image 3"
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full rounded-xl" 
                />
                <Image 
                  src="/resto.png" 
                  alt="Image 4"
                  width={200} 
                  height={200} 
                  className="object-cover w-full h-full rounded-xl" 
                />
              </div>

              {/* Second Row */}
              <div className="flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden">
                <Image 
                  src="/map.png" 
                  alt="Map"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex flex-col justify-between p-3 rounded-xl border-slate-600 border-[0.2px]">
                <h2 className="font-bold text-xl mb-4 text-center">GET IN TOUCH</h2>
                <p className="text-neutral-300 text-center">
                  <strong>ADDRESS:</strong> 24 Avenue Foch, Lyon 69006<br/>
                  <strong>PHONE:</strong> +33 7 86 25 68 29<br/>
                  <strong>EMAIL:</strong> lgdd@gmail.com
                </p>
                <div className="flex space-x-4 mt-4 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
