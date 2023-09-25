'use client'

import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { container } from '@/app/animations'
import { ArrowRight } from '@phosphor-icons/react'

export function NewArrivals() {
  return (
    <section className="max-w-6xl mx-auto w-full items-center justify-between text-sm px-8">
      <h2 className="uppercase inline-block lg:text-4xl text-2xl font-black relative z-20">
        <span className="z-10 relative">Novos Produtos</span>{' '}
        <Image
          width={190}
          height={32}
          className="z-0 w-32 object-contain absolute bottom-0 end-0"
          src="/elements/element-01.png"
          alt=""
        />
      </h2>

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
              <ArrowRight size={24} />
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
              <ArrowRight size={24} />
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
              <ArrowRight size={24} />
            </div>
          </m.div>
        </m.li>
      </m.ul>
    </section>
  )
}
