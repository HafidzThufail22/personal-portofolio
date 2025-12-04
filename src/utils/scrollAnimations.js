import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP Scroll Animation Utilities
 *
 * File ini berisi berbagai utility functions untuk membuat animasi scroll
 * yang bisa digunakan kembali di berbagai component.
 *
 * BIDIRECTIONAL SCROLL ANIMATIONS:
 * Semua animasi menggunakan toggleActions: "play reverse play reverse"
 * - Scroll ke bawah (enter viewport): animasi play (fade in, slide in, dll)
 * - Scroll ke atas (leave viewport): animasi reverse (fade out, slide out, dll)
 * - Efek ini membuat animasi tetap responsif setiap kali user scroll
 */

/**
 * Fade In Animation - Element muncul dengan opacity dari 0 ke 1
 *
 * @param {string|Element} target - CSS selector atau DOM element
 * @param {Object} options - Opsi kustomisasi
 * @param {number} options.duration - Durasi animasi (default: 1)
 * @param {number} options.delay - Delay sebelum animasi mulai (default: 0)
 * @param {string} options.start - Kapan animasi trigger (default: "top 80%")
 */
export const fadeIn = (target, options = {}) => {
  const { duration = 1, delay = 0, start = "top 80%" } = options;

  return gsap.from(target, {
    opacity: 0,
    duration,
    delay,
    scrollTrigger: {
      trigger: target,
      start, // Animasi mulai ketika top element mencapai 80% viewport
      toggleActions: "play reverse play reverse", // play saat enter, reverse saat leave (scroll up/down)
    },
  });
};

/**
 * Slide In From Left - Element masuk dari kiri
 *
 * @param {string|Element} target - CSS selector atau DOM element
 * @param {Object} options - Opsi kustomisasi
 */
export const slideInLeft = (target, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    start = "top 80%",
    distance = 100,
  } = options;

  return gsap.from(target, {
    x: -distance, // Mulai dari -100px (kiri)
    opacity: 0,
    duration,
    delay,
    ease: "power3.out", // Easing yang smooth
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  });
};

/**
 * Slide In From Right - Element masuk dari kanan
 */
export const slideInRight = (target, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    start = "top 80%",
    distance = 100,
  } = options;

  return gsap.from(target, {
    x: distance, // Mulai dari +100px (kanan)
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  });
};

/**
 * Slide In From Bottom - Element masuk dari bawah
 */
export const slideInBottom = (target, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    start = "top 80%",
    distance = 100,
  } = options;

  return gsap.from(target, {
    y: distance, // Mulai dari +100px (bawah)
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  });
};

/**
 * Scale In Animation - Element muncul dengan scale dari kecil ke normal
 */
export const scaleIn = (target, options = {}) => {
  const { duration = 1, delay = 0, start = "top 80%", scale = 0.5 } = options;

  return gsap.from(target, {
    scale, // Mulai dari 50% ukuran normal
    opacity: 0,
    duration,
    delay,
    ease: "back.out(1.7)", // Easing dengan sedikit bounce
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  });
};

/**
 * Stagger Animation - Animasi berurutan untuk multiple elements
 *
 * Contoh: Animasi cards yang muncul satu per satu
 *
 * @param {string|Element} target - CSS selector atau DOM elements
 * @param {Object} options - Opsi kustomisasi
 * @param {number} options.stagger - Delay antar element (default: 0.2)
 */
export const staggerFadeIn = (target, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    start = "top 80%",
    stagger = 0.2,
    direction = "bottom",
  } = options;

  const animationProps = {
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
    stagger, // Delay 0.2s antar element
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  };

  // Tambahkan direction
  if (direction === "bottom") {
    animationProps.y = 50;
  } else if (direction === "left") {
    animationProps.x = -50;
  } else if (direction === "right") {
    animationProps.x = 50;
  }

  return gsap.from(target, animationProps);
};

/**
 * Parallax Effect - Element bergerak dengan kecepatan berbeda saat scroll
 *
 * @param {string|Element} target - CSS selector atau DOM element
 * @param {Object} options - Opsi kustomisasi
 * @param {number} options.speed - Kecepatan parallax (default: 0.5)
 */
export const parallax = (target, options = {}) => {
  const { speed = 0.5 } = options;

  return gsap.to(target, {
    y: (i, el) => (1 - speed) * ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0, // Smooth scrubbing
    },
  });
};

/**
 * Reveal Animation - Element terungkap dari atas ke bawah
 * Bagus untuk images atau text blocks
 */
export const reveal = (target, options = {}) => {
  const { duration = 1.5, delay = 0, start = "top 80%" } = options;

  return gsap.from(target, {
    clipPath: "inset(0 0 100% 0)", // Mulai tertutup dari bawah
    duration,
    delay,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: target,
      start,
      toggleActions: "play reverse play reverse",
    },
  });
};

export default {
  fadeIn,
  slideInLeft,
  slideInRight,
  slideInBottom,
  scaleIn,
  staggerFadeIn,
  parallax,
  reveal,
};
