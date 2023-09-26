import { Banner } from '@/components/banner'
import { Brands } from '@/components/brands'
import { Community } from '@/components/community'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { NewArrivals } from '@/components/new-arrivals'
import { Vouncher } from '@/components/vouncher'
import { YoungsFavourite } from '@/components/youngs-favourite'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <NewArrivals />
        <Banner />
        <YoungsFavourite />
        <Vouncher />
        <Community />
      </main>
      <Footer />
    </>
  )
}
