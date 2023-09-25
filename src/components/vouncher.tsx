'use client'

import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { containerInView } from '@/app/animations'

export function Vouncher() {
  return (
    <section className="max-w-6xl mx-auto w-full items-center justify-between text-sm px-8 flex flex-col-reverse lg:flex-row lg:gap-4 gap-8">
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
        className="space-y-10 lg:w-96"
      >
        <div className="overflow-hidden">
          <m.h1
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: '100%',
              },
              visible: {
                y: '0%',
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="text-4xl  font-black uppercase"
          >
            DOWNLOAD APP & GET THE VOUCHER!
          </m.h1>
        </div>
        <div className="overflow-hidden">
          <m.p
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: '100%',
              },
              visible: {
                y: '0%',
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="text-lg"
          >
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </m.p>
        </div>
        <div className="flex gap-4">
          <Image
            width={150}
            height={50}
            className="object-contain"
            src="/app-store.png"
            alt=""
          />
          <Image
            width={150}
            height={50}
            className="object-contain"
            src="/google-play.png"
            alt=""
          />
        </div>
      </m.div>
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
          width={623}
          height={660}
          className="object-contain"
          src="/mobile.png"
          alt=""
        />
      </m.div>
    </section>
  )
}
