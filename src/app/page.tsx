import Image from 'next/image'
import Hero from './Components/Hero'
import Newest from './Components/Newest'

export default function Home() {
  return (
    <div className=" mt-24 ">
      <Hero />
      <Newest />
    </div>
    )
}
