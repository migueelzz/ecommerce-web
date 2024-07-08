'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CardProducts } from '../card-products'
import { Button } from '../button'

interface ProductsCarouselProps {
  title: string
  products: {
    name: string
    description: string
    price: number
    img_url: string
  }[]
}

export function ProductsCarousel({ products, title }: ProductsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 4,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-zinc-700">{title}</h1>
        <div className="flex items-center">
          <Button variant="ghost" onClick={scrollPrev}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" onClick={scrollNext}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="grid-cols-auto grid grid-flow-col gap-4">
          {products.map((product) => {
            return (
              <div className="w-[250px] min-w-0 flex-none" key={product.name}>
                <CardProducts product={product} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
