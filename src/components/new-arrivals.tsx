'use client'

import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { container, item, itemInView } from '@/app/animations'

export function NewArrivals() {
  return (
    <section className="max-w-6xl mx-auto w-full items-center justify-between text-sm ">
      <h2 className="uppercase text-4xl font-black">Novos Produtos</h2>

      <m.ul
        variants={container}
        className="py-24 flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-16"
      >
        <li className="overflow-hidden">
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: '10%',
                opacity: 0,
              },
              visible: {
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              src="/product-01.png"
              height={700}
              width={400}
              alt=""
              className="rounded-2xl object-contain"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg">
                <strong className="text-xl">Hoodies & Sweetshirt</strong>
                <p>Explore Now!</p>
              </div>
              Arr
            </div>
          </m.div>
        </li>

        <m.li>
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: '10%',
                opacity: 0,
              },
              visible: {
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              src="/product-02.png"
              height={700}
              width={400}
              alt=""
              className="rounded-2xl object-contain"
            />

            <div className="flex items-center justify-between mt-4">
              <div className="text-lg">
                <strong className="text-xl">Coats & Parkas</strong>
                <p>Explore Now!</p>
              </div>
              Arr
            </div>
          </m.div>
        </m.li>

        <m.li>
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: '10%',
                opacity: 0,
              },
              visible: {
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              src="/product-03.png"
              height={700}
              width={400}
              alt=""
              className="rounded-2xl object-contain"
            />

            <div className="flex items-center justify-between mt-4">
              <div className="text-lg">
                <strong className="text-xl">Coats & Parkas</strong>
                <p>Explore Now!</p>
              </div>
              Arr
            </div>
          </m.div>
        </m.li>
      </m.ul>
    </section>
  )
}
