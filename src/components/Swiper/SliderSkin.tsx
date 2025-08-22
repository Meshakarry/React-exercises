import React, { useImperativeHandle, useRef, useId } from "react";
import type { Swiper, SwiperOptions } from 'swiper/types'

export type SliderSkinHandles = {
  sliderRef: HTMLDivElement | null;
  prevRef: HTMLButtonElement | null;
  nextRef: HTMLButtonElement | null;
  paginationRef: HTMLDivElement | null;
};

export type SliderSkinProps = {
  id?: string;
  options?: SwiperOptions;
  sliderLoaded: boolean;
  currentBreakpoint: SwiperOptions;
  ref: React.RefObject<SkinExposes | null>
  numberOfSlides?: number;
  children?: React.ReactNode;
  ui?: {
    slider?: string;
    sliderWrapper?: string;
    arrows?: {
      next?: string;
      prev?: string;
    };
    pagination?: string;
  };
};

export type SkinExposes = {
  sliderRef: React.RefObject<HTMLDivElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
  prevRef: React.RefObject<HTMLButtonElement | null>;
  paginationRef: React.RefObject<HTMLDivElement | null>;
};

const SliderSkin = (
  ({ id, options, ui, sliderLoaded, numberOfSlides, children, ref }: SliderSkinProps) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const customID = useId();

    useImperativeHandle(ref, () => ({
      sliderRef: sliderRef,
      prevRef: prevRef,
      nextRef: nextRef,
      paginationRef: paginationRef,
    }));

    return (
      <div
        id={id}
        ref={sliderRef}
        className={`swiper ${ui?.slider || ""}`}
      >
        <div
          className={`swiper-wrapper ${ui?.sliderWrapper || ""} ${
            !sliderLoaded ? customID : ""
          }`}
        >
          {children}
        </div>

        {/* Navigation */}
        {
          options?.navigation?.enabled && (
          <div
            className={`swiper-navigation ${customID} ${
              numberOfSlides === 1 ? "!hidden" : ""
            }`}
          >
            <div>
              <button
                ref={prevRef}
                className={`
                  swiper-button-prev group flex items-center justify-center absolute p-4 rounded-full aspect-square bg-red-500 text-white -left-3 top-1/2 z-10 h-11 -translate-y-1/2 lg:-translate-x-full 
                  disabled:bg-gray-600 disabled:!text-gray-800
                  after:hidden
                  ${ui?.arrows?.prev || ""}`
                }
                aria-label="Previous"
              >
                ◀
              </button>
              <button
                ref={nextRef}
                className={
                  `swiper-button-next group flex items-center justify-center absolute p-4 rounded-full aspect-square bg-red-500 text-white -right-3 top-1/2 z-10 h-11 -translate-y-1/2 lg:translate-x-full
                  disabled:bg-gray-600 disabled:!text-gray-800
                  after:hidden
                  ${ui?.arrows?.next || ""}`
                }
                aria-label="Next"
              >
                ▶
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {
          options?.pagination?.enabled && (
            <div
              className={`swiper-pagination-wrapper ${customID} ${
                numberOfSlides === 1 ? "!hidden" : ""
              }`}
            >
            <div
                ref={paginationRef}
                className={`swiper-pagination relative [&:has(*:only-child)]:hidden ${
                  ui?.pagination || "z-10 flex flex-wrap justify-center gap-2 pt-4"
                }`}
              />
            </div>
          )
        }
      </div>
    );
  }
);

export default SliderSkin;
