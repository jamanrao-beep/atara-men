"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  {
    id: "sherwanis",
    title: "Sherwanis",
    image: "/assets/images/1.png",
    link: "/collections/sherwanis",
    subtitle: "The Royal Collection",
  },
  {
    id: "bandhgalas",
    title: "Bandhgalas",
    image: "/assets/images/2.png",
    link: "/collections/bandhgalas",
    subtitle: "Modern Heritage",
  },
  {
    id: "kurtas",
    title: "Kurtas",
    image: "/assets/images/3.png",
    link: "/collections/kurtas",
    subtitle: "Everyday Luxury",
  },
  {
    id: "suits",
    title: "Suits",
    image: "/assets/images/4.png",
    link: "/collections/suits",
    subtitle: "Bespoke Tailoring",
  },
];

// Duplicate the array to ensure Swiper has enough slides for a seamless infinite loop
const extendedCategories = [...categories, ...categories, ...categories];

export default function RevolvingGallery() {
  return (
    <section className="py-24 bg-alabaster overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Shop by Collection</h2>
        <p className="text-charcoal font-light tracking-wide">
          Explore our curated selections of premium Indian menswear.
        </p>
      </div>

      <div className="w-full max-w-[1600px] mx-auto pb-12 relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          speed={800}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full !px-4 md:!px-0 py-10"
        >
          {extendedCategories.map((category, index) => (
            <SwiperSlide 
              key={`${category.id}-${index}`} 
              className="!w-[240px] sm:!w-[280px] md:!w-[340px] lg:!w-[400px] aspect-[3/4] relative group"
            >
              <Link href={category.link} className="block w-full h-full relative overflow-hidden bg-obsidian luxury-shadow">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 600px"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-80" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-antique-gold text-xs tracking-[0.2em] uppercase font-medium mb-3 block">
                    {category.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-pearl mb-6">
                    {category.title}
                  </h3>
                  <div className="inline-block border-b border-antique-gold/50 text-pearl pb-1 uppercase tracking-widest text-xs hover:border-antique-gold transition-colors">
                    Explore
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Styles for Swiper Pagination & Navigation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          background-color: var(--charcoal) !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--obsidian) !important;
          opacity: 1;
        }
        .swiper-button-next, .swiper-button-prev {
          color: var(--pearl) !important;
          background-color: var(--obsidian);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 0.8;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
