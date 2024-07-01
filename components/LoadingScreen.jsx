"use client"
import styles from "@/styles/loading.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { LenisContext, LoadingContext } from "."
import gsap from "gsap"

const LoadingScreen = ({ children }) => {
    let { lenis } = useContext(LenisContext);
    const [loading, setLoading] = useState(true);
    const loadingScreen = useRef(null)

    useEffect(() => {
        if (loadingScreen.current) {
            if (loading) {
                loadingScreen.current.style.display = "";
            } else {
                if (!window.location.hash) {
                    // lenis?.scrollTo(0);
                }
                loadingScreen.current.style.display = "none";
            }
        }
    }, [loading]);

    const startLoading = (_callback) => {
        gsap.fromTo(loadingScreen.current, { clipPath: "polygon(150% 0%, 300% 0%, 250% 100%, 100% 100%)" }, { clipPath: "polygon(0% 0%, 150% 0%, 100% 100%, -50% 100%)", duration: 0.75 })
        // setLoading(true);
        setLoading(true);
        setTimeout(() => {
            _callback();
        }, 750);
    }

    const stopLoading = () => {
        gsap.fromTo(loadingScreen.current, { clipPath: "polygon(0% 0%, 150% 0%, 100% 100%, -50% 100%)" }, { clipPath: "polygon(-150% 0%, 0% 0%, -50% 100%, -200% 100%)", duration: 0.75 })
        setTimeout(() => {
            setLoading(false);
        }, 750);
    }

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading }}>
            <div className={styles.loading} ref={loadingScreen}>
                <p>Loading</p>
            </div>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingScreen