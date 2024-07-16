"use client"
import styles from "@/styles/slider.module.css"
import React, { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import { CustomButton } from "."

const Slider = ({ images, slideSize, slideSizeMobile, slideHeight, delay, slideStyle, quality }) => {
    const autoplayDelay = delay || 3000;
    const options = { containScroll: false, loop: true }
    const hoverAreaRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [interacting, setInteracting] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [emblaMainRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: false })
    ])

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    const handleMouseEnter = () => {
        setHovering(true);
    }
    const handleMouseLeave = () => {
        setHovering(false);
    }

    const handlePointerDown = () => {
        setInteracting(true);
    }
    const handlePointerUp = () => {
        setInteracting(false);
    }

    useEffect(() => {
        if (interacting || hovering) {
            emblaApi?.plugins()?.autoplay.stop();
        } else {
            emblaApi?.plugins()?.autoplay.play();
        }
    }, [interacting, hovering])


    useEffect(() => {
        const hoverArea = hoverAreaRef.current;
        hoverArea.addEventListener('mouseenter', handleMouseEnter);
        hoverArea.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hoverArea?.removeEventListener('mouseenter', handleMouseEnter);
            hoverArea?.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [selectedIndex])


    useEffect(() => {
        if (!emblaApi) return
        onSelect();

        emblaApi.on('pointerDown', handlePointerDown);
        emblaApi.on('pointerUp', handlePointerUp);
        emblaApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaApi, onSelect])


    return (
        <div className={`embla ${styles.mainContainer}`} style={{ "--slide-size": slideSize || "33.33%", "--slide-size-mobile": slideSizeMobile || "80%", "--slide-height": slideHeight || "300px" }}>
            <div ref={hoverAreaRef}>
                <div className={styles.viewport} ref={emblaMainRef}>
                    <div className={styles.container}>
                        {images.map((image, index) => (
                            <div className={styles.slide} key={index}>
                                <div>
                                    <Image
                                        data-loaded='false'
                                        onLoad={event => {
                                            event.currentTarget.setAttribute('data-loaded', 'true');
                                        }}
                                        src={image}
                                        alt={`slide-${index}`}
                                        width={(() => {
                                            let viewportWidth = typeof innerWidth === 'undefined' ? 1600 : innerWidth;
                                            if (!slideSize) return viewportWidth * 0.3333 * (quality || 1);
                                            if (slideSize.includes('%')) return viewportWidth * parseFloat(slideSize.split('%')[0]) / 100 * (quality || 1);
                                            return viewportWidth * parseFloat(slideSize) * (quality || 1);
                                        })()}
                                        height={(parseInt(slideHeight) || 300) * (quality || 1)}
                                        style={{ ...slideStyle }} />
                                    {/* <Image
                                    data-loaded='false'
                                    onLoad={event => {
                                        event.currentTarget.setAttribute('data-loaded', 'true');
                                    }}
                                    src={`${process.env.basePath || ""}${image}`}
                                    alt={`${image.slice(image.lastIndexOf('/') + 1, image.length)}`}
                                    width={(() => {
                                        let viewportWidth = typeof innerWidth === 'undefined' ? 1600 : innerWidth;
                                        if (!slideSize) return viewportWidth * 0.3333 * (quality || 1);
                                        if (slideSize.includes('%')) return viewportWidth * parseFloat(slideSize.split('%')[0]) / 100 * (quality || 1);
                                        return viewportWidth * parseFloat(slideSize) * (quality || 1);
                                    })()}
                                    height={(parseInt(slideHeight) || 300) * (quality || 1)}
                                    style={{ ...slideStyle }} /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.navigation}>
                    <CustomButton onClick={onPrevButtonClick} className={styles.btnLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                        </svg>
                    </CustomButton>
                    <CustomButton onClick={onNextButtonClick} className={styles.btnRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Slider
