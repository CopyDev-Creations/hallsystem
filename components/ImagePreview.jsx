"use client"
import styles from "@/styles/imagePreview.module.css";
import Image from "next/image";
import { ImagePreviewContext } from ".";
import { memo, useState } from "react";

const ImagePreview = ({ children }) => {
    const [preview, setPreview] = useState(null);

    const handleClose = (event) => {
        setPreview(null);
    }

    return (
        <ImagePreviewContext.Provider value={{ preview, setPreview }}>
            {preview && <div className={styles.root}>
                <div className={styles.mainContainer}>
                    <nav className={styles.navTop}>
                        <button
                            className={styles.closeBtn}
                            onClick={handleClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </button>
                    </nav>
                    <div className={styles.preview}>
                        <Image
                            data-loaded='false'
                            data-loader='visibility'
                            data-parallax='false'
                            onLoad={event => {
                                event.currentTarget.setAttribute('data-loaded', 'true');
                            }}
                            src={preview}
                            alt="preview"
                            fill
                        />
                        <div class={styles.spinner}>
                            <span></span>
                        </div>
                    </div>
                    <nav className={styles.navBottom}></nav>
                </div>
            </div>
            }
            {children}
        </ImagePreviewContext.Provider>
    )
}
export default memo(ImagePreview)