import { useEffect, useRef, useState } from "react";

/**
 * Custom hook untuk mendeteksi element masuk viewport
 * Alternatif ringan pengganti GSAP ScrollTrigger dengan bidirectional animations
 *
 * @param {Object} options - Intersection Observer options
 * @param {boolean} triggerOnce - Hanya trigger sekali saja (default: false untuk bidirectional)
 * @returns {[React.Ref, boolean]} - [ref untuk element, isInView status]
 */
export const useInView = (options = {}, triggerOnce = false) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update status berdasarkan apakah element masuk atau keluar viewport
        setIsInView(entry.isIntersecting);

        // Jika triggerOnce = true, disconnect setelah masuk viewport pertama kali
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold: 0.15, // Trigger saat 15% element terlihat
        rootMargin: "0px 0px -100px 0px", // Trigger sedikit sebelum element benar-benar masuk
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, options]);

  return [ref, isInView];
};

export default useInView;
