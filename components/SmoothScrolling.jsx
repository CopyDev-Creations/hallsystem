"use client"
import { LenisContext } from ".";
import Lenis from "lenis";

function SmoothScrolling({ children }) {
    let lenis;
    if (typeof window !== "undefined") {
        lenis = new Lenis();
        // SMOOTH SCROLLING
        function raf(time) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    );
}

export default SmoothScrolling;