"use client"

import { showToast } from "@/utils/Toast";
import { getImageList } from "@/utils/Utils";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [images, setImages] = useState<{
    id: number,
    imageId: number,
    src: string,
    isShow: boolean,
    disable: boolean,
  }[]>([])

  useEffect(() => {
    setImages(getImageList())
  }, [])

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'undefined' || target.id === '' || target.id === null) return

    if (target.id.includes('image')) {
      const targetId = parseInt(target.id.replace('image-', '')) || 0
      const targetImageId = images.find(image => image.id === targetId)?.imageId || 0

      // clicked on current select
      if (targetId == images.find(image => image.isShow)?.id) {
        return
      }

      // clicked on disabled
      if (targetImageId == images.find(image => image.disable)?.imageId) {
        return
      }

      // clicked on show
      if (targetImageId == images.find(image => image.isShow)?.imageId) {
        setImages(
          images.map(image => {
            if (image.imageId === targetImageId) {
              image.isShow = false
              image.disable = true
            }
            return image
          })
        )
      } else { // clicked on not show
        setImages(
          images.map(image => {
            if (image.id === targetId) {
              image.isShow = true
            } else if (image.id !== targetId && !image.disable) {
              image.isShow = false
            }
            return image
          })
        )
      }

      if (images.filter(image => !image.disable).length === 0) {
        if (typeof window !== 'undefined') {
          const successCount = parseInt(localStorage.getItem('image-memo-success') || '0') + 1
          localStorage.setItem('image-memo-success', successCount.toString())
          showToast('good job!', 'success')
          showToast('Your number of wins: ' + localStorage.getItem('image-memo-success') || '0', 'success')
        }
        setImages(getImageList())
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="w-full min-h-screen flex flex-col gap-16 items-center justify-start p-4 sm:p-8 md:p-12 select-none">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl text-white">image Memo Game</h1>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {
            images.map((item) => (
              <div
                key={item.id}
                className={`relative m-auto border border-solid border-sky-500 p-1 cursor-pointer rounded-full ${item.disable && 'opacity-50'}`}
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
                <span id={`image-${item.id}`} className={`${(item.isShow || item.disable) ? 'opacity-0' : 'opacity-100'} transition-all duration-200 absolute inset-0 bg-white rounded-full m-1`} />
              </div>
            ))
          }
        </div>

        {
          (typeof window !== 'undefined') &&
          <h3 className="text-center text-lg sm:text-xl md:text-2xl text-white">Your number of wins: {localStorage.getItem('image-memo-success') || '0'}</h3>
        }
      </main>
    </>
  )
}
