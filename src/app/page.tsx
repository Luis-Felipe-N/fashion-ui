import { Banner } from '@/components/banner'
import { Brands } from '@/components/brands'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { NewArrivals } from '@/components/new-arrivals'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <NewArrivals />
        <Banner />
      </main>
    </>
  )
}
