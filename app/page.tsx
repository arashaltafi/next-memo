"use client"

import { getImageList } from "@/utils/Utils";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<{
    id: number,
    src: string,
    isShow: boolean,
  }[]>([])

  useEffect(() => {
    setImages(getImageList())
  }, [])

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'undefined' || target.id === '' || target.id === null) return

    if (target.id.includes('image')) {
      const targetId = parseInt(target.id.replace('image-', '')) || 0
      setImages(
        images.map(image => {
          if (image.id === targetId) {
            image.isShow = true
          } else {
            image.isShow = false
          }
          return image
        })
      )
    } else {
      return
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full grid grid-cols-4 gap-8 items-center justify-center">
        {
          images.map((item) => (
            <div
              key={item.id}
              className="relative m-auto border border-solid border-sky-500 p-1 cursor-pointer rounded-full"
              onClick={(e) => handleClick(e)}
            >
              <Image
                className="rounded-full"
                src={item.src}
                alt={'image memo'}
                width={150}
                height={150}
                quality={100}
                loading="lazy"
              />
              <span id={`image-${item.id}`} className={`${item.isShow ? 'opacity-0' : 'opacity-100'} absolute inset-0 bg-white rounded-full m-1`} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
