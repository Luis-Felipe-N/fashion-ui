'use client'

import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { container } from '@/app/animations'
import { ArrowRight } from '@phosphor-icons/react'

export function YoungsFavourite() {
  return (
    <section className="py-24 max-w-6xl mx-auto w-full items-center justify-between text-sm px-8">
      <h2 className="uppercase inline-block lg:text-4xl text-2xl font-black relative z-20">
        <span className="z-10 relative">Para amolecentes</span>{' '}
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
        className="py-24 grid lg:grid-cols-2 lg:justify-between justify-center items-center gap-16"
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
              src="/product-04.png"
              height={575}
              width={834}
              alt=""
              className="rounded-2xl object-contain"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg">
                <strong className="text-xl">Trending on instagram</strong>
                <p>Explore Now!</p>
              </div>
              <ArrowRight size={24} className="text-slate-500" />
            </div>
          </m.div>
        </li>

        <li>
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
              src="/product-05.png"
              height={575}
              width={834}
              alt=""
              className="rounded-2xl object-contain"
            />

            <div className="flex items-center justify-between mt-4">
              <div className="text-lg">
                <strong className="text-xl">All Under $40</strong>
                <p>Explore Now!</p>
              </div>
              <ArrowRight size={24} className="text-slate-500" />
            </div>
          </m.div>
        </li>
      </m.ul>
    </section>
  )
}
