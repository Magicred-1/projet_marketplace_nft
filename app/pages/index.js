import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>AgusToken - Homepage</title>
        <meta name="description" content="AgusToken is a NFT auction Marketplace platform on Ethereum." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-index '>
      <header>
        <nav className='navbar flex right-0 items-center justify-end'>
          <ul className='mr-10 my-3'>
            <li className='
            mx-3 inline-block px-10 py-3 bg-purple-900 
            text-white font-medium text-base 
            leading-tight uppercase rounded-full 
            shadow-md hover:bg-purple-700 border 
            hover:shadow-lg focus:bg-pink-700 
            focus:shadow-lg border-white 
            border-white border-2 focus:outline-none
            focus:outline-none focus:ring-0 
            active:bg-pink-800 active:shadow-lg 
            transition duration-150 ease-in-out
            '>
              <a href='#'>$AGTOK : 0.0007$</a>
            </li>
            <li className='
            inline-block px-10 py-3 bg-pink-600 text-white 
            font-medium text-base leading-tight uppercase 
            rounded-full shadow-md hover:bg-pink-700 border 
            hover:shadow-lg focus:bg-pink-700 focus:shadow-lg 
            border-white border-2 focus:outline-none
            focus:outline-none focus:ring-0 active:bg-pink-800 
            active:shadow-lg transition duration-150 ease-in-out
            '>
              <a href='#'>Connect Wallet</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* 
        Section 1 : AgusToken Title and Description
      */}
      <section className='mt-10'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <h1 className='
            text-left main uppercase 
            text-3xl font-bold
            '>
              AgusToken
            </h1>
            <hr></hr>
            <p className='
            text-left main break-all
            text-4xl font-bold
            '>
              AgusToken is a NFT auction 
              Marketplace platform on Ethereum.
            </p>
          </div>
          <div className='col-span-1'>
            <div className='
            flex justify-center items-center
            '>
              <img width="200" src='/images/eth.svg' alt='eth logo' />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
            <ul>
              <li className='
            inline-block px-10 py-3 bg-pink-600 text-white 
            font-medium text-base leading-tight uppercase 
            rounded-full shadow-md hover:bg-pink-700 border 
            hover:shadow-lg focus:bg-pink-700 focus:shadow-lg 
            border-white border-2 focus:outline-none
            focus:outline-none focus:ring-0 active:bg-pink-800 
            active:shadow-lg transition duration-150 ease-in-out
              '>
                <a href='#'>VISIT SITE</a>
              </li>
              <br></br>
              <li className='
            inline-block px-10 py-3 bg-white-600 text-black 
            font-medium text-base leading-tight uppercase 
            rounded-full shadow-md hover:bg-pink-700 border 
            hover:shadow-lg focus:bg-pink-700 focus:shadow-lg 
            border-black border-2 focus:outline-none
            focus:outline-none focus:ring-0 active:bg-pink-800 
            active:shadow-lg transition duration-150 ease-in-out
              '>
                <a href='#'>
                  GET $AGTOK
                </a>
              </li>
            </ul>
          </div>
      </section>
      
      {/* 
        Section 2 : Featured NFTs Collection(s)
      */}
      <section>

      </section>

      {/* 
        Section 3 : How to buy section
      */}
      <section>

      </section>
      <footer>
        <ul className='
        flex flex-row justify-center
        '>
          <li className=''>
            <h1></h1>
          </li>
          <li className=''>
            <h1></h1>
          </li>
        </ul>
      </footer>
    </main>
    </>
    )
}
