import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px', color: '#D2B48C', backgroundColor: '#fff', fontSize: '48px', padding: '10px' }}>
        Dale vida a tu espacio, Hazlo tuyo
      </p>

      </div>
      <div style={{ position: "relative", width: "100%", paddingBottom: "7.972%", backgroundColor: "white" }}>
        <Image src="/home-page-layout/brown-top.png"  layout="fill" objectFit="contain"></Image>
      </div>
      <div className='custom'>
      </div>
    </>
  );
}