"use client"
import styles from "@/styles/hale.module.css";
import { LoadingContext, Slider } from "@/components";
import { useContext, useEffect } from "react";
import hala1 from "@/public/images/hala-rolnicza1.jpg";
import hala2 from "@/public/images/hala-rolnicza2.jpg";
import hala3 from "@/public/images/hala-rolnicza3.jpg";
import hala4 from "@/public/images/hala-rolnicza4.jpg";
import hala5 from "@/public/images/hala-rolnicza5.jpg";
import hala6 from "@/public/images/hala-rolnicza6.jpg";
import hala7 from "@/public/images/hala-rolnicza7.jpg";
import hala8 from "@/public/images/hala-rolnicza8.jpg";
import hala9 from "@/public/images/hala-rolnicza9.jpg";

const HaleRolnicze = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <h1>Hale Rolnicze</h1>
                <p style={{ maxWidth: "700px" }}>Hallsystem realizuje hale dla rolnictwa przeznaczone do hodowli zwierząt, składowania produktów rolnych jak i do garażowania sprzętu rolniczego. Budowa konstrukcji stalowej niesie ze sobą wiele korzyści:</p>
                <div className={styles.background} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-rolnicza-bg.jpg")` }}>
                    <div className={styles.overlay}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" id="icons">
                                        <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" /><path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" /><path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
                                    </svg>
                                    <h4>Łatwość utrzymania czystości</h4>
                                    <p>Stalowe konstrukcje są łatwe w czyszczeniu i dezynfekcji, co jest kluczowe przy budynkach przeznaczonych dla zwierząt oraz przechowywania żywności i przekłada się na większą jakość produktów.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
                                    </svg>
                                    <h4>Elastyczność przestrzenna</h4>
                                    <p>Projektowanie hal z dużymi, otwartymi przestrzeniami umożliwia ich łatwe dostosowanie do różnorodnych celów rolniczych oraz efektywne wykorzystanie przestrzeni zgodnie z aktualnymi potrzebami.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                    </svg>
                                    <h4>Szybkość<br />budowy</h4>
                                    <p>Hale stalowe można wznosić znacznie szybciej niż tradycyjne budynki murowane, co jest kluczowe dla sprawnego reagowania na zmieniające się potrzeby gospodarstwa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider slideSize={"50%"} slideHeight={"600px"} slideStyle={{ filter: "contrast(1.2)" }} images={[hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9]} />
            </section>
        </main>
    )
}
export default HaleRolnicze