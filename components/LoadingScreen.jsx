"use client"
import styles from "@/styles/loading.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { LenisContext, LoadingContext } from "."
import gsap from "gsap"

const LoadingScreen = ({ children }) => {
    let { lenis } = useContext(LenisContext);
    const [isLoading, setLoading] = useState(true);
    const loadingScreen = useRef(null);

    useEffect(() => {
        if (loadingScreen.current) {
            loadingScreen.current.style.display = isLoading ? "" : "none";
        }
    }, [isLoading]);

    const startLoading = (_callback) => {
        gsap.fromTo(loadingScreen.current, { clipPath: "polygon(-100% 0%, -25% 0%, 0% 50%, -25% 100%, -100% 100%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 125% 50%, 100% 100%, 0% 100%)", duration: 0.75 })
        setLoading(true);
        setTimeout(() => {
            _callback();
        }, 750);
    }

    const stopLoading = () => {
        if (!window.location.hash) {
            // lenis?.scrollTo(0);
            document.documentElement.scrollTop = 0;
        }
        gsap.fromTo(loadingScreen.current, { clipPath: "polygon(-25% 0%, 100% 0%, 100% 100%, -25% 100%, 0% 50%)" }, { clipPath: "polygon(100% 0%, 200% 0%, 200% 100%, 100% 100%, 125% 50%)", duration: 0.75 })
        setTimeout(() => {
            setLoading(false);
        }, 750);
    }

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
            <div className={styles.loading} ref={loadingScreen} style={{ backgroundImage: `url("${process.env.basePath || ""}/icons/grid.svg")` }}>
                {/* <p>Loading</p> */}
                <img src={`${process.env.basePath || ""}/images/logo.svg`} alt="HALLSYSTEM" />
            </div>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingScreen