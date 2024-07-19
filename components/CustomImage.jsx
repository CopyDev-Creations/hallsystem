"use client"
import styles from "@/styles/customImage.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CustomImage = ({ src, alt, width, height, fill, parallax, parallaxScale }) => {
    const mainContainerRef = useRef(null)

    const updateParallax = (event) => {
        const rect = mainContainerRef.current.getBoundingClientRect();
        const scale = Math.min(Math.max((rect.y + rect.height) / (innerHeight + rect.height), 0), 1);
        mainContainerRef.current.style.setProperty('--parallax-translate', `0% ${((parallaxScale || 10) / 2) - scale * (parallaxScale || 10)}%`);
    }

    useEffect(() => {
        if (parallax) document.addEventListener('scroll', updateParallax);

        return () => {
            document.removeEventListener('scroll', updateParallax);
        }
    }, [])

    return (
        <div className={styles.mainContainer} ref={mainContainerRef}>
            <Image
                data-loaded='false'
                data-parallax='false'
                onLoad={event => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                    if (parallax) event.currentTarget.setAttribute('data-parallax', 'true');
                }}
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                className={styles.image}
            />
        </div>
    )
}
export default CustomImage