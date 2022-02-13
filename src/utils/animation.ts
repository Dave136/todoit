import gsap from 'gsap';

export const fadeIn = (el: any) => {
  gsap.from(el, {
    opacity: 0,
    duration: 0.7,
    ease: 'power4.out',
  });
};

export const fadeOut = (el: any, callback: VoidFunction) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    ease: 'power4.out',
    onComplete: () => callback(),
  });
};
