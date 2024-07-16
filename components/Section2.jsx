import styles from "@/styles/section2.module.css";
import { StepsCarousel } from ".";

const Section2 = () => {
    const SLIDES = [
        <>
            <h3>Projektowanie</h3>
            <p>To tu wszystko się zaczyna. Jesteśmy otwarci na propozycje klienta i doradzamy w przypadku wątpliwości dotyczących projektu.</p>
        </>,
        <>
            <h3>Fundamenty</h3>
            <p>Oferujemy listę sprawdzonych wykonawców robót ziemnych i pomagamy w doborze odpowiedniego rodzaju fundamentów.</p>
        </>,
        <>
            <h3>Konstrukcja stalowa</h3>
            <p>Konstrukcje wykonujemy we własnej hali produkcyjnej. Po malowaniu i ocynkowaniu elementów dostarczamy je na teren budowy.</p>
        </>,
        <>
            <h3>Obudowa hali</h3>
            <p>W zależności od wymagań projektu obudowę wykonujemy z płyt warstwowych, blachy trapezowej lub kasetonów.</p>
        </>,
        <>
            <h3>Stolarka i wykończenia</h3>
            <p>Realizujemy montaż okien, drzwi, witryn, bram przemysłowych oraz orynnowania całego budynku.</p>
        </>,
        <>
            <h3>Gwarancja i serwis</h3>
            <p>Gwarancją obejmujemy wszystkie materiały wykorzystane przy produkcji poszczególnych elementów i udzielamy jej na okres 3 lat.</p>
        </>

    ]

    return (
        <section className={styles.section}>
            <div className={styles.background}>
                <div className={styles.colorOverlay}></div>
                <video autoPlay muted loop playsInline>
                    <source src={`${process.env.basePath || ""}/videos/o-nas-bg.mp4`} type="video/mp4" />
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