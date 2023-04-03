import { useEffect } from "react";

const Homepage = () => {
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
    <main className="relative w-full flex flex-col items-center justify-center text-center text-[1.31rem] text-white font-ttoctosquares-regular">
      <main className="self-stretch h-[31.81rem] shrink-0 overflow-hidden flex flex-col items-center justify-start bg-[url(/splash@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.88rem] text-white font-ttoctosquares-regular">

       <div class="relative w-full h-screen bg-cover bg-center relative z-10">
        
          <header class="w-full py-4 px-6 bg-gray-100">
            <img className="w-full object-contain absolute inset-0 w-full h-full object-cover z-0" src="/images/background.png" alt=""/>
            <div class="mx-auto flex justify-between items-center max-w-6xl">
              <img
                class="w-54 h-58 object-contain z-10"
                src="/images/digital_delirium_logo.png"
                alt=""
              />
              <nav className="w-[16.25rem] shrink-0 flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center">
                <button
                  className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                  data-animate-on-scroll
                >
                  <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                    CONNECT WALLET
                  </div>
                </button>
              </nav>
            </div>
          </header>

          <div className="flex-1 max-w-[75.81rem] mx-auto overflow-hidden flex flex-col py-4 px-2 box-border items-center justify-start gap-5">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-15 text-shadow:4px_4px_4px_#796565">
                <p className="m-0">Your NFT auction</p>
                <p className="m-0">Marketplace platform</p>
                <p className="m-0">on Ethereum.</p>
              </div>
            </div>
          
          <div className="self-stretch flex flex-col items-center justify-center">
          <div className="relative z-10">
          <button className="cursor-pointer p-2 bg-deeppink-100 rounded-11xl box-border w-72 h-10 overflow-hidden flex flex-row items-center justify-center gap-2 border-2 border-solid border-black">
            <div className="self-stretch relative text-2xl leading-15 font-ttoctosquares-regular text-white text-center flex items-center justify-center w-60">
              VISIT MARKETPLACE
            </div>
            <div className="flex-1 rounded-31xl bg-white shadow-2xl h-6 overflow-hidden flex flex-row p-2 box-border items-center justify-center">
              <img className="relative w-6 h-6 mt-1" alt="" src="/images/arrawdroit.png" />
            </div>
          </button>
        </div>
    </div>
</div>

        </div>
      </main>
      <div className="self-stretch bg-black h-[63.88rem] shrink-0 flex flex-col items-start justify-start gap-[0.63rem]">
        <div className="w-[75.88rem] h-[41.56rem] shrink-0 overflow-hidden flex flex-col items-center justify-center gap-[1.13rem]">
          <div className="self-stretch flex-1 relative text-[3.75rem] leading-[3.75rem] flex items-center [text-shadow:2px_2px_0px_#ff0f7b,_-2px_-2px_0px_#00d1ff] [-webkit-text-stroke:1px_#000]">
            <span className="[line-break:anywhere]">
              <p className="m-0">{`Buy NFTS at `}</p>
              <p className="m-0 text-deeppink-200">Digital Delirium</p>
            </span>
          </div>
          <div className="self-stretch relative leading-[1.56rem]">
            <p className="m-0">
              Unleash the power of NFTs with Digital Delirium!
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Our Ethereum-based platform is the ultimate destination for
            </p>
            <p className="m-0">{`NFT enthusiasts, collectors and investors. `}</p>
            <p className="m-0">
              Our user-friendly interface allows you to easily discover and bid
              on unique digital
            </p>
            <p className="m-0"> assets like never before.</p>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col py-[2.69rem] px-[25.38rem] items-center justify-center text-deeppink-200">
            <div className="w-[42.88rem] flex flex-col items-center justify-center gap-[0.25rem]">
              <div className="relative leading-[1.56rem] flex items-center justify-center w-[48.75rem]">
                OUR FEATURED NFT COLLECTION
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[1.16rem] shrink-0"
                alt=""
                src="/arrow-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[75.88rem] h-[21.69rem] shrink-0 overflow-hidden flex flex-row py-[0.81rem] px-[3.88rem] box-border items-center justify-center text-deeppink-200">
          <div className="flex-1 relative h-[20.88rem] overflow-hidden">
            <img
              className="absolute top-[1.13rem] left-[9rem] rounded-[5px] w-[18.63rem] h-[18.63rem] object-cover"
              alt=""
              src="/illustration@2x.png"
            />
            <button className="cursor-pointer p-[0.63rem] bg-deeppink-100 absolute top-[14.81rem] left-[38.56rem] rounded-11xl box-border w-[18.81rem] h-[3.25rem] overflow-hidden flex flex-row items-start justify-start gap-[0.63rem] border-[1px] border-solid border-black">
              <div className="self-stretch relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-center flex items-center justify-center w-[15rem] shrink-0">
                SEE COLLECTION
              </div>
              <div className="rounded-31xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[2rem] h-[1.88rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-center">
                <img
                  className="relative w-[1.41rem] h-[1.38rem] shrink-0"
                  alt=""
                  src="/arrow-11.svg"
                />
              </div>
            </button>
            <div className="absolute top-[2rem] left-[36.44rem] flex flex-col items-start justify-start gap-[1.44rem]">
              <div className="relative leading-[1.56rem] flex items-center justify-center w-[25.81rem]">
                VAPORWAVE NFTS COLLECTION
              </div>
              <div className="relative leading-[1.56rem] text-white text-left flex items-center w-[25.81rem]">
                Vaporwave is a subculture that emerged in the early 2010s,
                characterized by a nostalgic fascination with the cultural
                aesthetics of the 1980s and 1990s.
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="self-stretch bg-gray h-[32.81rem] shrink-0 flex flex-col items-start justify-start text-center text-[3.75rem] text-white font-ttoctosquares-regular">
        <div className="self-stretch h-[32.81rem] shrink-0 overflow-hidden flex flex-col py-[2.31rem] px-[13.25rem] box-border items-center justify-center gap-[6.06rem]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[1.88rem]">
            <div className="relative leading-[3.75rem]">How to buy ?</div>
            <div className="relative box-border w-[30.81rem] h-[0.25rem] shrink-0 border-t-[4px] border-solid border-white" />
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem] text-[1.31rem] text-deeppink-200 font-ttoctosquares-black">
            <div className="w-[15.63rem] h-[10.56rem] shrink-0 overflow-hidden flex flex-col pt-[4.38rem] px-[0rem] pb-[1.19rem] box-border items-center justify-end gap-[1.88rem]">
              <div className="relative leading-[1.25rem] flex items-center w-[15.63rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">CONNECT YOUR</p>
                  <p className="m-0">WALLET</p>
                </span>
              </div>
              <div className="relative leading-[1.25rem] font-ttoctosquares-regular text-white">
                <p className="m-0">{`You need to connect `}</p>
                <p className="m-0">{`your Metamask wallet `}</p>
                <p className="m-0">{`to do transactions `}</p>
                <p className="m-0">on the platform.</p>
              </div>
            </div>
            <div className="h-[10.25rem] overflow-hidden flex flex-col py-[0rem] px-[0.19rem] box-border items-center justify-start gap-[1.25rem]">
              <div className="relative leading-[1.25rem]">
                <p className="m-0">{`CHOOSE THE ONE `}</p>
                <p className="m-0">YOU LIKE</p>
              </div>
              <div className="relative leading-[1.25rem] font-ttoctosquares-regular text-white">
                <p className="m-0">{`Purchase the NFT by `}</p>
                <p className="m-0">{`placing a bid `}</p>
                <p className="m-0">{`on the one `}</p>
                <p className="m-0">you choosed.</p>
                <p className="m-0">And then enjoy.</p>
              </div>
            </div>
            <div className="flex-1 h-[10.25rem] overflow-hidden flex flex-col items-center justify-start gap-[1.88rem]">
              <div className="relative leading-[1.25rem]">
                <p className="m-0">CONNECT YOUR</p>
                <p className="m-0">WALLET</p>
              </div>
              <div className="relative leading-[1.25rem] font-ttoctosquares-regular text-white">
                <p className="m-0">{`You need to connect `}</p>
                <p className="m-0">{`your Metamask wallet `}</p>
                <p className="m-0">{`to do transactions `}</p>
                <p className="m-0">on the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="self-stretch bg-midnightblue box-border h-[33.06rem] shrink-0 flex flex-col items-center justify-start border-[2px] border-solid border-white">
        <div className="self-stretch h-[32.81rem] shrink-0 overflow-hidden flex flex-col py-[0rem] px-[13.25rem] box-border items-center justify-start gap-[1.06rem]">
          <img
            className="relative w-[85.25rem] h-[24.38rem] shrink-0 object-cover"
            alt=""
            src="/magicred1-background-vaporwave-office-7b216e87ceac43ba86aad42b706047e4-1@2x.png"
          />
          <div className="w-[75.63rem] h-[3.69rem] shrink-0 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-end gap-[0.63rem]">
              <button
                className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                data-animate-on-scroll
              >
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                  CONNECT WALLET
                </div>
              </button>
              <button
                className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                data-animate-on-scroll
              >
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                  CONNECT WALLET
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative w-[75.63rem] h-[0.31rem] shrink-0"
            alt=""
            src="/line-2.svg"
          />
          <div />
        </div>
      </main>
    </main>
  );
};

export default Homepage;
