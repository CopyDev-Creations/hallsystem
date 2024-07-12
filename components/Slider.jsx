"use client"
import styles from "@/styles/slider.module.css"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import { Skeleton } from "."

const Slider = ({ images, slideSize, slideSizeMobile, slideHeight, delay, slideStyle, quality }) => {
    const autoplayDelay = delay || 3000;
    const options = { containScroll: false, loop: true }
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [interacting, setInteracting] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [emblaMainRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: false })
    ])

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
        const viewport = document.querySelector(`.${styles.viewport}`);
        viewport.addEventListener('mouseenter', handleMouseEnter);
        viewport.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            viewport?.removeEventListener('mouseenter', handleMouseEnter);
            viewport?.removeEventListener('mouseleave', handleMouseLeave);
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
                                    src={`${process.env.basePath || ""}${image}`}
                                    alt={`${image.slice(image.lastIndexOf('/') + 1, image.length)}`}
                                    width={(() => {
                                        let viewportWidth = typeof innerWidth === 'undefined' ? 1600 : innerWidth;
                                        if (!slideSize) return viewportWidth * 0.3333 * (quality || 1);
                                        if (slideSize.includes('%')) return viewportWidth * parseFloat(slideSize.split('%')[0]) / 100 * (quality || 1);
                                        return viewportWidth * parseFloat(slideSize) * (quality || 1);
                                    })()}
                                    height={(parseInt(slideHeight) || 300) * (quality || 1)}
                                    style={{ ...slideStyle }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
