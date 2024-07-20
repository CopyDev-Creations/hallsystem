"use client"
import styles from "@/styles/hale.module.css";
import { LoadingContext, Slider } from "@/components";
import { useContext, useEffect } from "react";
import Image from "next/image";
import hala1 from "@/public/images/hala-magazynowa1.jpg";
import hala2 from "@/public/images/hala-magazynowa2.jpg";
import hala3 from "@/public/images/hala-magazynowa3.jpg";
import hala4 from "@/public/images/hala-magazynowa4.jpg";
import hala5 from "@/public/images/hala-magazynowa5.jpg";
import hala6 from "@/public/images/hala-magazynowa6.jpg";
import hala7 from "@/public/images/hala-magazynowa7.jpg";

const HaleMagazynowe = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.heroSection}>
                <div className={styles.heroBackground} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hero_old.jpg")` }}></div>
                <div className={styles.heroOverlay}>
                    <h1>Hale Magazynowe</h1>
                </div>
            </section>
            <section className={styles.section}>
                <p>W Hallsystem specjalizujemy się w projektowaniu, produkcji i montażu hal stalowych przeznaczonych do użytku magazynowego. Wybierając konstrukcje stalowe zamiast budynków murowanych, możesz liczyć na następujące korzyści:</p>
                <div className={styles.background} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-magazynowa-bg.jpg")` }}>
                    <div className={styles.overlay}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                    </svg>
                                    <h4>Szybkość<br />budowy</h4>
                                    <p>Konstrukcje stalowe można zmontować znacznie szybciej niż tradycyjne budynki murowane, co pozwoli na szybkie rozpoczęcie działalności magazynowej.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                                    </svg>
                                    <h4>Niższe koszty<br />eksploatacji</h4>
                                    <p>Dzięki nowoczesnym metodom izolacji termicznej, nasze hale stalowe charakteryzują się wysoką efektywnością energetyczną, co przekłada się na niższe koszty eksploatacji.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
                                    </svg>
                                    <h4>Elastyczność<br />projektowa</h4>
                                    <p>Hale stalowe można łatwo rozbudować i modyfikować w przyszłości. Dodawanie kolejnych sekcji jest prostsze i tańsze w porównaniu do budynków murowanych.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider slideSize={"50%"} slideHeight={"600px"} images={[hala1, hala2, hala3, hala4, hala5, hala6, hala7]} />
            </section>
        </main>
    )
}
export default HaleMagazynowe