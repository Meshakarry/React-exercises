import React, { ReactNode, useRef, useEffect, useImperativeHandle, useId, useMemo } from "react";
import type { SwiperOptions } from 'swiper/types'
import Swiper from 'swiper'

import "swiper/css";
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import defu from "defu";
import SliderSkin, { SkinExposes } from './SliderSkin';

export type SliderRef = {
  swiper: Swiper | null; // Swiper instance
};

interface SliderProps {
  children: ReactNode;
  options?: SwiperOptions;
  navigation?: ReactNode;
  pagination?: ReactNode;
  ref?: React.RefObject<SliderRef>;
  ui?: {
    slider?: string;
    sliderWrapper?: string;
    arrows?: {
      next?: string;
      prev?: string;
    };
    pagination?: string;
  };
}

const Slider = (
  ({ options, children, ui, navigation, pagination, ref }: SliderProps) => {
    const id = useId();
    const skinRef = useRef<SkinExposes | null>(null);
    const swiperRef = useRef<Swiper | null>(null);
    const numberOfSlides = React.Children.count(children);

    useImperativeHandle(ref, () => ({
      swiper: swiperRef.current
    }))

    const sliderOptions = useMemo(
      () =>
        defu<SwiperOptions, SwiperOptions[]>(
          options || {},
          {
            modules: [Autoplay, Navigation, Pagination, Grid],
            navigation: {
              enabled: numberOfSlides > 1,
            },
            autoplay: false,
            pagination: {
              enabled: numberOfSlides > 1,
              clickable: true,
              bulletActiveClass: "is-active",
              bulletClass: "swiper-pagination-bullet",
            },
            init: false,
          }
        ),
      [options, numberOfSlides]
    );

    useEffect(() => {
      if (!skinRef.current?.sliderRef?.current) return;

      swiperRef.current = new Swiper(`#${id}`, sliderOptions);

      const navEnabled =
        !!sliderOptions.navigation &&
        (typeof sliderOptions.navigation === "boolean"
          ? sliderOptions.navigation
          : sliderOptions.navigation.enabled !== false);

      if (navEnabled) {
        const prevEl =
          skinRef.current.prevRef.current ||
          skinRef.current.sliderRef.current.querySelector(".swiper-button-prev");
        const nextEl =
          skinRef.current.nextRef.current ||
          skinRef.current.sliderRef.current.querySelector(".swiper-button-next");
        if (prevEl && nextEl) {
          swiperRef.current.params.navigation!.prevEl = prevEl;
          swiperRef.current.originalParams.navigation!.prevEl = prevEl;
          swiperRef.current.params.navigation!.nextEl = nextEl;
          swiperRef.current.originalParams.navigation!.nextEl = nextEl;
        }
      }

    const pagEnabled =
      !!sliderOptions.pagination &&
      (typeof sliderOptions.pagination === "boolean"
        ? sliderOptions.pagination
        : sliderOptions.pagination.enabled !== false);

      if (pagEnabled) {
        const paginationEl =
          skinRef.current.paginationRef.current ||
          skinRef.current.sliderRef.current.querySelector(".swiper-pagination");
        if (paginationEl) {
          swiperRef.current.params.pagination!.el = paginationEl;
          swiperRef.current.originalParams.pagination!.el = paginationEl;
        }
      }

      swiperRef.current.init(skinRef.current.sliderRef.current);

      // return () => {
      //   swiperRef.current?.destroy();
      // };
    }, [sliderOptions, id]);

    return (
      <div>
        <SliderSkin
        id={id}
        ref={skinRef}
        options={sliderOptions}
        ui={ui}
        sliderLoaded={!!swiperRef.current}
        currentBreakpoint={swiperRef.current?.currentBreakpoint ?? {}}
        numberOfSlides={numberOfSlides}
      >
        {children}
        {navigation && <div id="navigation">{navigation}</div>}
        {pagination && <div id="pagination">{pagination}</div>}
      </SliderSkin>
      </div>
    );
  }
);

export default Slider;
