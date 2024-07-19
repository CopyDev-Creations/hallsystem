"use client"
import { LoadingContext, Slider } from "@/components";
import styles from "@/styles/o-nas.module.css";
import { useContext, useEffect } from "react";
import logo1 from "@/public/logos/arcelor-mittal.svg";
import logo2 from "@/public/logos/polimex-mostostal.svg";
import logo3 from "@/public/logos/pruszynski.svg";
import logo4 from "@/public/logos/ruukki.svg";
import logo5 from "@/public/logos/skanska.svg";
import logo6 from "@/public/logos/thyssenkrupp.svg";
import logo7 from "@/public/logos/wisniowski.svg";
import hala1 from "@/public/images/hala-produkcyjna4.jpg";
import hala2 from "@/public/images/dastrans.jpg";
import hala3 from "@/public/images/IMG_20240704_153232572.jpg";
import hala4 from "@/public/images/hala-rolnicza5.jpg";
import hala5 from "@/public/images/IMG_20240704_133948230.jpg";
import hala6 from "@/public/images/IMG_20240704_123859614.jpg";
import hala7 from "@/public/images/IMG_20240704_121409000.jpg";
import hala8 from "@/public/images/hala-magazynowa6.jpg";
import hala9 from "@/public/images/IMG_20240704_112043445.jpg";

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

                <Slider
                    slideSize={"20%"}
                    slideSizeMobile={"50%"}
                    slideHeight={"200px"}
                    delay={2000}
                    slideStyle={{ objectFit: "contain", padding: "20px" }}
                    images={[logo1, logo2, logo3, logo4, logo5, logo6, logo7]}
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
                <Slider slideSize={"50%"} slideHeight={"600px"} images={[hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9]} />
            </section>
        </main>
    )
}
export default O_nas