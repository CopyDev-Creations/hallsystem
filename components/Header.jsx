"use client"
import styles from "@/styles/header.module.css"
import { useEffect, useRef } from "react"
import { CustomButton } from ".";
import { usePathname } from "next/navigation";

const Header = () => {
    const headerRef = useRef(null);
    const checkboxRef = useRef(null);
    const sidebarRef = useRef(null);
    const pathname = usePathname();

    const handleCheckbox = (event) => {
        if (event.currentTarget.checked) {
            sidebarRef.current.style.translate = '0%';
        } else {
            sidebarRef.current.style.translate = '';
        }
    }

    const handleClick = (event) => {
        if (event.target.className != document.querySelector(`.${styles.sidebar}`).className && event.target.id != "menu" && event.target.className != document.querySelector(".hamburgerMenu").className) {
            checkboxRef.current.checked = false;
            sidebarRef.current.style.translate = '';
        }
    }

    const updateHeader = () => {
        if (window.scrollY > 10 || pathname == "/oferta") {
            headerRef.current.style.background = "var(--secondary-color)";
            headerRef.current.style.boxShadow = "var(--shadow)";
            headerRef.current.style.setProperty("--color", "var(--primary-color)");
        } else {
            headerRef.current.style.background = "";
            headerRef.current.style.boxShadow = "";
            headerRef.current.style.setProperty("--color", "var(--secondary-color)");
        }
    }

    useEffect(() => {
        checkboxRef.current.addEventListener('change', handleCheckbox);
        document.addEventListener('click', handleClick);
        document.addEventListener('touchend', handleClick);
        document.addEventListener('scroll', updateHeader);

        updateHeader();

        return () => {
            checkboxRef.current?.removeEventListener('change', handleCheckbox);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('touchend', handleClick);
            document.removeEventListener('scroll', updateHeader);
        }
    }, [pathname]);

    return (
        <>
            <header className={styles.header} ref={headerRef}>
                <CustomButton href={"/"} animated={false} className={`${styles.logo} prevent-select`}>
                    <img src="/images/logo.png" alt="HALLSYSTEM" />
                </CustomButton>
                <nav className="desktop-visible">
                    <CustomButton href="/" className={styles.link}>Strona główna</CustomButton>
                    <CustomButton href="/o-nas" className={styles.link}>O nas</CustomButton>
                    <CustomButton href="/oferta" className={styles.link}>Oferta</CustomButton>
                    <CustomButton href="/#twoj-projekt" className={styles.link}>Twój projekt</CustomButton>
                    <CustomButton href="/#kontakt" className={styles.link}>Kontakt</CustomButton>
                </nav>
            </header>
            <label className={`${styles.hamburgerMenu} prevent-select hamburgerMenu mobile-visible`}>
                <input type="checkbox" id="menu" className={styles.menu} ref={checkboxRef} />
            </label>
            <aside className={`${styles.sidebar} mobile-visible`} ref={sidebarRef}>
                <CustomButton href="/" className={styles.link}>Strona główna</CustomButton>
                <CustomButton href="/o-nas" className={styles.link}>O nas</CustomButton>
                <CustomButton href="/oferta" className={styles.link}>Oferta</CustomButton>
                <CustomButton href="/#twoj-projekt" className={styles.link}>Twój projekt</CustomButton>
                <CustomButton href="/#kontakt" className={styles.link}>Kontakt</CustomButton>
            </aside>
        </>
    )
}
export default Header