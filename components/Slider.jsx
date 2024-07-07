"use client"
import styles from "@/styles/slider.module.css"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Slider = ({ images }) => {
    const autoplayDelay = 3000;
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
        <div className={`embla ${styles.mainContainer}`}>
            <div className={styles.viewport} ref={emblaMainRef}>
                <div className={styles.container}>
                    {images.map((image, index) => (
                        <div className={styles.slide} key={index}>
                            <div style={{ backgroundImage: `url("${image}")` }}>
                                {/* <img src={image} alt={`${image.slice(image.lastIndexOf('/') + 1, image.length)}`} /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
