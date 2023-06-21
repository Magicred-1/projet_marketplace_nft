import { useEffect } from "react";

const HeaderComponent = () => {

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
    <header
      className="self-stretch bg-gray-100 flex flex-row py-[0rem] pr-[0.06rem] pl-[2.13rem] items-center justify-center border-b-[1px] border-solid border-white"
    >
      <img
        className="flex-1 overflow-hidden"
        alt="Logo Digital Delirium"
        src="/images/digital_delirium_logo.png"
        width={10}
      />
      <nav
        className="w-[16.25rem] flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center"
      >
        <button
          className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
          data-animate-on-scroll
        >
          <div
            className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
          >
            SIGN IN
          </div>
        </button>
      </nav>
    </header>
  );
};

export default HeaderComponent;
