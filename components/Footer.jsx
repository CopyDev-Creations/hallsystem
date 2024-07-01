"use client"
import styles from "@/styles/footer.module.css";

const Footer = () => {
    const d = new Date();

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>Copyright &copy; {d.getFullYear()} HALLSYSTEM Sp. J.</p>
            <a href="https://copydevcreations.com" target="_blank" className={styles.copydevcreations}><img src="/icons/copydevcreations.svg" alt="CopyDev Creations" title="Designed by CopyDev Creations" /></a>
        </footer>
    )
}
export default Footer