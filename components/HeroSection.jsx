import styles from "@/styles/hero.module.css";

const HeroSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/test.jpg")` }}></div>
            <div className={styles.overlay}>
                <div className={styles.title}>
                    <h1>Hale </h1>
                    <div className={styles.list}>
                        <span>Produkcyjne</span>
                        <span>Magazynowe</span>
                        <span>Rolnicze</span>
                        <span>Produkcyjne</span>
                    </div>
                </div>
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