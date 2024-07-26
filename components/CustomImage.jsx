"use client"
import styles from "@/styles/customImage.module.css";
import Image from "next/image";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { ImagePreviewContext } from ".";

const CustomImage = ({ src, alt, width, height, fill, parallax, parallaxScale, className, style }) => {
    const mainContainerRef = useRef(null);
    let { setPreview } = useContext(ImagePreviewContext);

    const updateParallax = (event) => {
        const rect = mainContainerRef.current.getBoundingClientRect();
        const scale = Math.min(Math.max((rect.y + rect.height) / (innerHeight + rect.height), 0), 1);
        mainContainerRef.current.style.setProperty('--parallax-translate', `0% ${((parallaxScale || 10) / 2) - scale * (parallaxScale || 10)}%`);
    }

    useEffect(() => {
        if (parallax) document.addEventListener('scroll', updateParallax);
        return () => {
            if (parallax) document.removeEventListener('scroll', updateParallax);
        }
    }, [])

    return (
        <div className={`${styles.mainContainer} ${className || ""}`} ref={mainContainerRef}>
            <Image
                data-loaded='false'
                data-parallax='false'
                onLoad={event => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                    if (parallax) event.currentTarget.setAttribute('data-parallax', 'true');
                }}
                onClick={() => setPreview(src)}
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                className={styles.image}
                style={{ ...style }}
            />
        </div>
    )
}
export default memo(CustomImage)