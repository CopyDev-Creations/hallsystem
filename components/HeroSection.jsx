import styles from "@/styles/hero.module.css";

const HeroSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background}></div>
            <div className={styles.overlay}>
                <h1 className={styles.title}><span>Hale</span> <ul>
                    <li>Produkcyjne</li>
                    <li>Magazynowe</li>
                    <li>Rolnicze</li>
                    <li>Produkcyjne</li>
                </ul></h1>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span>149</span>
                    <span>Hal magazynowych</span>
                </div>
                <div className={styles.stat}>
                    <span>65</span>
                    <span>Hal rolniczych</span>
                </div>
                <div className={styles.stat}>
                    <span>101</span>
                    <span>Hal produkcyjnych</span>
                </div>
            </div>
        </section>
    )
}
export default HeroSection