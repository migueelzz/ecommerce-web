'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CardProducts } from '../card-products'

interface ProductsCarouselProps {
  products: {
    name: string
    description: string
    price: number
    img_url: string
  }[]
}

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 3,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="grid-cols-auto grid grid-flow-col gap-2">
        {products.map((product) => {
          return (
            <div className="w-[300px] min-w-0 flex-none" key={product.name}>
              <CardProducts product={product} />
            </div>
          )
        })}
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-rose-500 hover:bg-zinc-200"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-rose-500 hover:bg-zinc-200"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
