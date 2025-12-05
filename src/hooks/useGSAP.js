import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom hook untuk mengintegrasikan GSAP dengan React
 * 
 * Hook ini memastikan:
 * 1. Animasi GSAP berjalan setelah component mount
 * 2. Cleanup animasi saat component unmount (mencegah memory leaks)
 * 3. Context-safe GSAP instance
 * 
 * @param {Function} callback - Function yang berisi GSAP animations
 * @param {Array} dependencies - Dependencies array (seperti useEffect)
 * @returns {Object} contextSafe - GSAP context untuk cleanup otomatis
 */
export const useGSAP = (callback, dependencies = []) => {
  const contextRef = useRef();

  useEffect(() => {
    // Membuat GSAP context untuk cleanup otomatis
    contextRef.current = gsap.context(() => {
      callback();
    });

    // Cleanup function - membersihkan semua animasi saat component unmount
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef;
};

export default useGSAP;
