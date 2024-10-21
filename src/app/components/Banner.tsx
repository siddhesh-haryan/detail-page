import Image from 'next/image'
import ButtonWithArrow from './ButtonWithArrow'

export default function Banner() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/ERP-software-banner.webp"
          alt="Office workers collaborating"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
    <div className="relative z-20 container mx-auto px-4 py-40 md:py-64 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          ERP Software <br /> Development Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Custom-developed ERP solutions that go beyond business growth expectations
        </p>
        <div className='border-2 border-white rounded-xl hover:border-blue-700'>
            <ButtonWithArrow href='/'>
          Consult Our Experts
            </ButtonWithArrow>
        </div>
      </div>
    </div>
  )
}
