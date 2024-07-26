import styles from "@/styles/section2.module.css";
import { StepsCarousel } from ".";

const Section2 = () => {
    const SLIDES = [
        <>
            <h3>Produkcja</h3>
            <p>Konstrukcje stalową wykonujemy we własnej hali produkcyjnej. Po ocynkowaniu wszystkich elementów dostarczamy ją na teren budowy.</p>
        </>,
        <>
            <h3>Fundamenty</h3>
            <p>Oferujemy listę sprawdzonych wykonawców robót ziemnych i pomagamy w doborze odpowiedniego rodzaju fundamentów.</p>
        </>,
        <>
            <h3>Konstrukcja nośna</h3>
            <p>Montujemy konstrukcje na placu budowy stosując nowoczesne technologie gwarantujące trwałość i odporność na warunki atmosferyczne.</p>
        </>,
        <>
            <h3>Obudowa</h3>
            <p>W zależności od wymagań projektowych obudowe wykonujemy z płyt wartwowych, blachy trapezowej lub kasetonów.</p>
        </>,
        <>
            <h3>Wykończenia</h3>
            <p>Realizujemy montaż okien, drzwi, bram przemysłowych, świetlików oraz orynnowania całego budynku.</p>
        </>,
        <>
            <h3>Gwarancja i serwis</h3>
            <p>Gwarancją obejmujemy wszystkie elementy wykorzystane przy produkcji poszczególnych elementów i udzielamy jej na 3 lata.</p>
        </>

    ]

    return (
        <section className={styles.section}>
            <div className={styles.background}>
                <div className={styles.colorOverlay}></div>
                <video autoPlay muted loop playsInline>
                    <source src={`${process.env.basePath || ""}/videos/produkcja-bg.mp4`} type="video/mp4" />
                </video>
            </div>
            <div className={styles.overlay}>
                <h2>Etapy budowy hali</h2>
                <div className={`${styles.mainContainer}`}>
                    <StepsCarousel slides={SLIDES} />
                </div>
            </div>
        </section>
    )
}
export default Section2