import Image from 'next/image'
 
export default function LandingImageMain() {
  return (
    <Image
      src="/sajtapp.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}