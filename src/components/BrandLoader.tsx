// @ts-nocheck
import React, { useEffect, useState } from 'react';

const BrandLoader = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Show loader for 1.5s, then fade out
    const timer = setTimeout(() => setFade(true), 1500);
    // Remove loader after fade
    const remove = setTimeout(() => onFinish && onFinish(), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onFinish]);

  // Choose animation class based on fade state
  const animClass = fade ? 'animate-fadeoutup' : 'animate-fadeinup';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-blue-200 transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'} px-4`}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-lg">
        <img
          src="/logo.png"
          alt="Genesis Print Logo"
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${animClass}`}
          draggable="false"
        />
        <div className={`mt-4 sm:mt-6 text-xl sm:text-3xl font-bold text-blue-900 tracking-wide text-center ${animClass}`}>Genesis Print</div>
        <div className={`mt-3 sm:mt-6 text-base sm:text-2xl font-bold text-blue-900 tracking-wide text-center ${animClass}`}>Pioneering Excellence in Color Printing Since 1998</div>
      </div>
    </div>
  );
};

export default BrandLoader; 