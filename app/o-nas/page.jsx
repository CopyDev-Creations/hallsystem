"use client"
import { LoadingContext, Slider } from "@/components";
import styles from "@/styles/o-nas.module.css";
import { useContext, useEffect } from "react";

const O_nas = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section1}>
                <div className={styles.background}>
                    <div className={styles.colorOverlay}></div>
                    <video autoPlay muted loop playsInline>
                        <source src={`${process.env.basePath || ""}/videos/o-nas-bg.mp4`} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>O nas</h1>
                </div>

                <p className={styles.introduction}>Hallsystem to polska firma z siedzibą w Starachowicach przy ul. Ostrowieckiej 5 działająca na rynku od ponad 15 lat. Specjalizujemy się w projektowaniu, produkcji i montażu konstrukcji stalowych na terenie całego kraju, obsługując sektory rolnictwa, przemysłu, handlu czy usług.</p>

                <Slider slideSize={"20%"} slideSizeMobile={"50%"} slideHeight={"200px"} delay={2000} slideStyle={{ objectFit: "contain", padding: "20px" }}
                    images={[
                        "/logos/arcelor-mittal.svg",
                        "/logos/polimex-mostostal.svg",
                        "/logos/pruszynski.svg",
                        "/logos/ruukki.svg",
                        "/logos/skanska.svg",
                        "/logos/thyssenkrupp.svg",
                        "/logos/wisniowski.svg",
                    ]}
                />
            </section>
            <section className={styles.section2}>
                <h2>Nasz zespół</h2>
                <div className={styles.zespol}>
                    <p>Przez lata zbudowaliśmy zespół zaufanych i doświadczonych pracowników, i rozwinęliśmy własne podejście do budowy hal, oparte na naszych dotychczasowych doświadczeniach. Dzięki temu wiemy z kim współpracować i wybieramy jedynie sprawdzonych przez nas dostawców, co pozwala nam zagwarantować najwyższa jakość materiałów.</p>
                    <div className={styles.image} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hero.jpg")` }}></div>
                </div>

                <h2>Kierownictwo</h2>
                <div className={styles.kierownictwo}>
                    <div className={styles.person}>
                        <img src={`${process.env.basePath || ""}/images/hero.jpg`} alt="placeholder" />
                        <h4>Jakub Orłowski</h4>
                        <p>CEO</p>
                    </div>
                    <div className={styles.person}>
                        <img src={`${process.env.basePath || ""}/images/hero.jpg`} alt="placeholder" />
                        <h4>Tomasz Wójcicki</h4>
                        <p>CEO</p>
                    </div>
                    <div className={styles.person}>
                        <img src={`${process.env.basePath || ""}/images/hero.jpg`} alt="placeholder" />
                        <h4>Lorem ipsum</h4>
                        <p>Kierownik kontroli jakości</p>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <h2>Nasze realizacje</h2>
                <Slider quality={1.5} images={[
                    "/images/hala-produkcyjna4.jpg",
                    "/images/dastrans.jpg",
                    "/images/IMG_20240704_153232572.jpg",
                    "/images/hala-rolnicza5.jpg",
                    "/images/IMG_20240704_133948230.jpg",
                    "/images/IMG_20240704_123859614.jpg",
                    "/images/IMG_20240704_121409000.jpg",
                    "/images/hala-magazynowa6.jpg",
                    "/images/IMG_20240704_112043445.jpg",
                ]} />
            </section>
        </main>
    )
}
export default O_nas