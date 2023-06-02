import { useEffect } from "react";

const TextFooter = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="w-[75.38rem] h-[3.56rem] flex flex-row py-[0rem] px-[1.81rem] box-border items-center justify-center text-left text-[1.25rem] text-white font-ttoctosquares-regular">
      <div className="relative leading-[3.75rem] inline-block w-[59.44rem] shrink-0">
        Digital Delirium © 2023 ALL RIGHTS RESERVED
      </div>
      <button
        className="cursor-pointer py-[0rem] px-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
        data-animate-on-scroll
      >
        <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
          GITHUB REPO
        </div>
      </button>
    </div>
  );
};

export default TextFooter;
