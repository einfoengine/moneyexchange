'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MainNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const pathname = usePathname();

  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };


  return (
    <section className="nt-header mx-auto left-0 right-0">
      <div className="container mx-auto relative z-10">
        <div className="row">
          <div className="grid-cols-2 nt-top border rounded flex justify-between p-5 mt-5 bg-gray-50 absolute w-full">
            <div className="sam-element">
              <h1 className="text-lg">Logo</h1>
            </div>
            {/* End element */}
            <div className="sam-element flex">
              <div className="sam-main-nav">
                <ul className="flex py-2 mr-8">
                  <li className={`px-3 ${pathname === '/' && 'active'}`}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={`px-3 ${pathname === '/about' && 'active'}`}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={`px-3 ${pathname === '/currency' && 'active'}`}>
                    <Link href="/currency">Currency rate</Link>
                  </li>
                  <li className={`px-3 ${pathname === 'services' && 'active'}`}>
                    <Link href="/services">Services</Link>
                  </li>
                  <li className={`px-3 cursor-pointer`} onClick={handleLoginModalOpen}>
                    <Link href={'/login'}>Login</Link>
                  </li>
                  <li className={`px-3 cursor-pointer`} onClick={handleLoginModalOpen}>
                    <Link href={'/register'}>Signup</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
