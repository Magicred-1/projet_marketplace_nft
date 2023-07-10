const Homepage = () => {
  return (
    <main className="relative w-full flex flex-col items-center justify-center text-center text-[1.31rem] text-white font-ttoctosquares-regular">
      <main className="self-stretch h-[36.81rem] shrink-0 overflow-hidden flex flex-col items-center justify-start bg-[url(/splash@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.88rem] text-white font-ttoctosquares-regular">

        <div className="relative w-full h-screen bg-cover bg-center relative z-10">
          <header className="w-full py-4 px-6 bg-gray-100">
            <img className="w-full object-contain absolute inset-0 w-full h-full object-cover z-0" src="/images/background.png" alt=""/>
            <div class="mx-auto flex justify-between items-center max-w-6xl">
              <img
                  className="w-54 h-58 object-contain z-10"
                src="/images/digital_delirium_logo.png"
                alt=""
              />
              <nav className="w-[16.25rem] shrink-0 flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center">
                <button className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white z-20"
                    data-animate-on-scroll>

                  <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
                    onClick={() => window.location.href = "/login"}>
                    SIGN IN
                  </div>
                </button>
              </nav>
            </div>
          </header>

          <div className="flex-1 max-w-[75.81rem] mx-auto overflow-hidden flex flex-col py-4 px-2 box-border items-center justify-start gap-5 mt-20">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center">
              <div className="[text-shadow:2px_2px_0px_#796565] flex-1 relative leading-15">
                <p className="m-0">Your NFT auction</p>
                <p className="m-0">Marketplace platform</p>
                <p className="m-0">on Ethereum.</p>
              </div>
            </div>

          <div className="self-stretch flex flex-col items-center justify-center">
          <div className="relative z-10">
          <button
          className="cursor-pointer p-2 bg-deeppink-100 rounded-11xl box-border w-72 h-10 overflow-hidden flex flex-row items-center justify-center gap-2 border-2 border-solid border-black"
          onClick={() => {
            window.open("/marketplace", "_self");
          }}
          >
            <div className="self-stretch relative text-1xl leading-15 font-ttoctosquares-regular text-white text-center flex items-center justify-center w-60">
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

{/*block 2*/}

  <div className="self-stretch bg-black h-[70rem] shrink-0 flex flex-col items-start justify-start gap-[0.63rem]">
    <div className="self-stretch w-full md:w-[85rem] h-[40.56rem] shrink-0 overflow-hidden flex flex-col items-center justify-center gap-[5rem]  mt-2.5">
        <div className="relative text-3xl md:text-[3.75rem] leading-[3.75rem] flex items-center [text-shadow:2px_2px_0px_#ff0f7b,_-2px_-2px_0px_#00d1ff] [-webkit-text-stroke:1px_#000] flex justify-center">
          <span className="[line-break:anywhere]">
            <p className="m-0">{`Buy NFTS at `}</p>
            <p className="m-0 text-deeppink-200">Digital Delirium</p>
          </span>
        </div>
        <div className="self-stretch relative leading-[1.56rem] text-sm md:text-base">
          <p className="m-0">
            Unleash the power of NFTs with Digital Delirium!
          </p>
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

      <div className="self-stretch overflow-hidden flex flex-col py-[2.69rem] px-4 md:px-[25.38rem] items-center justify-center text-deeppink-200">
        <div className="w-full md:w-[42.88rem] flex flex-col items-center justify-center gap-[0.25rem]">
          <div className="titulo relative leading-[1.56rem] flex items-center justify-center w-full md:w-[48.75rem] text-center text-4xl">
            OUR FEATURED NFT COLLECTION
          </div>
          <img
              className="w-29 h-29 object-cover rounded-[5px]"
              alt=""
              src="/images/arrow-2.png"
          />
        </div>
      </div>

    </div>

{/*block 2 END*/}


 {/*block 3*/}
    <div className="w-full h-[27rem] shrink-0 overflow-hidden flex flex-col lg:flex-row   box-border items-center justify-center text-deeppink-200">
      <div className="flex-1 lg:w-[50%] h-[20.88rem] overflow-hidden flex items-center justify-center">
        <img
            className="w-[18.63rem] h-[18.63rem] object-cover rounded-[5px]"
            alt=""
            src="./images/illustration.png"
        />
      </div>
      <div className="flex-1 flex flex-col lg:items-start lg:justify-start gap-[1.44rem] bg-gray-500 lg:pl-4">
        <div className="relative leading-[1.56rem] text-center lg:text-left mt-10">
          VAPORWAVE NFTS COLLECTION
        </div>

        <div className="relative leading-[1.56rem] text-white text-center lg:text-left max-w-[25.81rem] ">
          Vaporwave is a subculture that emerged in the early 2010s,
          characterized by a nostalgic fascination with the cultural
          aesthetics of the 1980s and 1990s.
        </div>

        <div className="flex items-center justify-center">
          <button className="cursor-pointer p-[0.63rem] bg-deeppink-100 rounded-11xl box-border w-[18.81rem] h-[3.25rem] overflow-hidden flex flex-row items-start justify-start gap-[0.63rem] border-[1px] border-solid border-black">
            <div className="self-stretch relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-center flex items-center justify-center w-[15rem] shrink-0">
              SEE COLLECTION
            </div>
            <div className="rounded-31xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[2rem] h-[1.88rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-center">
              <img className="relative w-[1.41rem] h-[1.38rem] shrink-0" alt="" src="/images/arrawdroit.png" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
    {/*block 3 END*/}


      {/*block 4*/}
      <main className="w-full flex items-center justify-center min-h-full bg-gray text-center text-[3.75rem] text-white font-ttoctosquares-regular">

      <div className="w-full px-4 md:px-16 py-6 md:py-24 box-border flex flex-col items-center justify-center gap-[1.06rem]">
          <div className="w-full flex flex-col items-center justify-center gap-[1.88rem]">
            <div className="relative leading-[3.75rem]">How to buy ?</div>
            <div className="w-[30.81rem] h-[0.25rem] border-t-[4px] border-solid border-white" />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[1.31rem] text-deeppink-200 font-ttoctosquares-black">
            <div>
              <div>
                <div className="h-[10.25rem] flex flex-col py-4 px-4 box-border items-center justify-start gap-[1.25rem]">
                  <div className="relative leading-[1.25rem] font-ttoctosquares-regular">
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
            <div>
              <div className="h-[10.25rem] flex flex-col py-4 px-4 box-border items-center justify-start gap-[1.25rem]">
                <div className="relative leading-[1.25rem] font-ttoctosquares-regular">
                  <p className="m-0">{`CHOOSE THE ONE `}</p>
                  <p className="m-0">YOU LIKE</p>
                </div>
                <div className="relative leading-[1.25rem] font-ttoctosquares-regular text-white">
                  <p className="m-0">{`Purchase the NFT by `}</p>
                  <p className="m-0">{`placing a bid `}</p>
                  <p className="m-0">{`on the one `}</p>
                  <p className="m-0">you chose.</p>
                  <p className="m-0">And then enjoy.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[10.25rem] flex flex-col py-4 px-4 box-border items-center justify-start gap-[1.25rem]">
                <div className="relative leading-[1.25rem] font-ttoctosquares-regular">
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
        </div>
      </main>



      {/*block 4 END*/}


      {/*block 5*/}
      <main className="self-stretch bg-midnightblue box-border h-[33.06rem] shrink-0 flex flex-col items-center justify-start border-[2px] border-solid border-white">
        <div className="self-stretch h-[32.81rem] shrink-0 overflow-hidden flex flex-col py-[0rem] px-[13.25rem] box-border items-center justify-start gap-[1.06rem]">
          <img
              className="relative w-[85.25rem] h-[24.38rem] shrink-0 object-cover"
              alt=""
              src="/images/imagefooter.png"
          />
          <div className="w-[75.63rem] h-[3.69rem] shrink-0 flex flex-col items-center justify-center flex-wrap">
            <div className="flex flex-row items-center justify-end gap-[0.63rem]">
              <button className="cursor-pointer py-[0rem] px-[0.63rem] bg-blue-600 rounded-xl box-border w-[10rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[100] border-[1px] border-solid border-white">
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
                onClick={() => window.location.href="https://github.com/Magicred-1/projet_marketplace_nft/"}>
                  GITHUB REPO
                </div>
              </button>
              <button className="cursor-pointer py-[0rem] px-[0.63rem] bg-blue-600 rounded-xl box-border w-[10rem] h-[2.13rem] shrink-0 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[100] border-[1px] border-solid border-white">
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
                onClick={() => window.location.href = "/login"}>
                  SIGN IN
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

      {/*block 5 END*/}

    </main>
  );
};

export default Homepage;
