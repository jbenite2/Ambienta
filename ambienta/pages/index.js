import Image from 'next/image'
import About from './about'
import Ambienta from './ambienta'

export default function Home() {
  return (
    <>
      <div>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px', color: '#A25B00', backgroundColor: '#fff', fontSize: '48px', padding: '10px' }}>
        Dale vida a tu espacio, Hazlo tuyo
      </p>
      <div className="big-image">
        <img src="/about-us-main-image.png" alt="Main About Us Image" />
      </div>

      </div>
      <Ambienta/>
      <div style={{ position: "relative", width: "100%", paddingBottom: "7.912%", backgroundColor: "white" }}>
        <Image src="/home-page-layout/top-brown.png"  layout="fill" objectFit="contain"></Image>
      </div>
      <div className='custom'>
        <About />
      </div>
    </>
  );
}