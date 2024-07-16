"use client"
import styles from "@/styles/stepCarousel.module.css"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const StepsCarousel = (props) => {
    const autoplayDelay = 5000;
    const [currentTimeoutID, setCurrentTimeoutID] = useState(null);
    const options = { containScroll: false }
    const { slides } = props
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [interacting, setInteracting] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [emblaMainRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: false })
    ])

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaApi) return
            emblaApi?.plugins()?.autoplay.reset();

            if (index == selectedIndex) {
                transitionToIndex('current');
                transitionToIndex('next');
            } else {
                transitionToIndex(index, 0);
                emblaApi.scrollTo(index)
            }
        },
        [emblaApi, selectedIndex]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    const transitionToIndex = (index, delay) => {
        const progressBar = document.querySelector(`.${styles.progressBar}`);
        let fixedIndex = index;
        let fixedDelay = delay ?? autoplayDelay - 100;

        if (index == 'next') {
            if (selectedIndex == 5) {
                fixedIndex = selectedIndex;
                fixedDelay = 0;
            } else {
                fixedIndex = selectedIndex + 1;
            }
        } else if (index == 'current') {
            fixedIndex = selectedIndex;
            fixedDelay = 0;
            clearTimeout(currentTimeoutID);
        }

        const timeoutID = setTimeout(() => {
            progressBar.style.transition = fixedDelay == 0 ? "" : `linear ${fixedDelay}ms`;
            progressBar.style.width = `calc(${fixedIndex / 5 * 100}% - 10px)`;
        }, fixedDelay == 0 ? 0 : 100);
        setCurrentTimeoutID(timeoutID);
    }

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
            transitionToIndex('current');
        } else {
            emblaApi?.plugins()?.autoplay.play();
            transitionToIndex('current');
            transitionToIndex('next');
        }
    }, [interacting, hovering])


    useEffect(() => {
        const viewport = document.querySelector(`.${styles.viewport}`);
        viewport.addEventListener('mouseenter', handleMouseEnter);
        viewport.addEventListener('mouseleave', handleMouseLeave);

        const tooltip = document.querySelector(`.${styles.tooltip}`);

        tooltip.style.left = `${selectedIndex / 5 * 100}%`;
        tooltip.style.translate = `${(innerWidth || 0) < 1000 && selectedIndex <= 2 ? "0 15px" : "-100% 15px"}`;
        tooltip.style.clipPath = `${(innerWidth || 0) < 1000 && selectedIndex <= 2 ? "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)" : "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px))"}`;

        const thumbs = document.querySelectorAll(`.${styles.thumb}`);

        thumbs.forEach((thumb, index) => {
            if (index <= selectedIndex) {
                thumb.style.fill = "var(--accent-color1)";
            } else {
                thumb.style.fill = "";
            }
        });

        if (selectedIndex == 0) {
            transitionToIndex(0, 0);
        }
        if (emblaApi?.plugins()?.autoplay.isPlaying()) transitionToIndex('next');

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
                    {slides.map((slide, index) => (
                        <div className={styles.slide} key={index}>
                            <div>
                                {slide}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.tooltipContainer}>
                <div className={styles.tooltip}>
                    <span>
                        0{selectedIndex + 1}
                    </span>
                </div>
            </div>
            <div className={styles.thumbsContainer}>
                <div className={styles.thumbs}>
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => onThumbClick(index)}
                            className={styles.thumb}
                        >
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="174" viewBox="0 0 200 173.20508075688772">
                                <path fill="currentFill" d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"></path>
                                <path fill="currentColor" d="M50 86.60254037844386L75 43.30127018922193L125 43.30127018922193L150 86.60254037844386L125 129.9038105676658L75 129.9038105676658Z"></path>
                            </svg>

                        </button>
                    ))}
                </div>
                <div className={styles.progressBarBG}></div>
                <div className={styles.progressBar}></div>
            </div>
        </div>
    )
}

export default StepsCarousel
