import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules"
import { SwiperProps } from "swiper/react"

const swiperConfig: SwiperProps = {
   modules: [EffectCoverflow, Navigation, Pagination, Autoplay],
   effect: "coverflow",
   slidesPerView: "auto",
   grabCursor: true,
   centeredSlides: true,
   loop: true,
   pagination: {
      clickable: true
   },
   navigation: {
      enabled: true,
      prevEl: ".swiper-custom-prev",
      nextEl: ".swiper-custom-next",
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
   },
   coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 200,
      modifier: 1,
      slideShadows: false
   },
   breakpoints: {
      640: {
         coverflowEffect: {
            stretch: 350
         }
      },
      1024: {
         coverflowEffect: {
            stretch: 400
         }
      },
      1440: {
         coverflowEffect: {
            stretch: 450
         }
      },
      1536: {
         coverflowEffect: {
            stretch: 500
         }
      }
   }
} as const

export { swiperConfig }