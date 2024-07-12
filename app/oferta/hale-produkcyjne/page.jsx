"use client"
import styles from "@/styles/hale.module.css";
import { LoadingContext, Slider } from "@/components";
import { useContext, useEffect } from "react";

const HaleProdukcyjne = () => {
    let { stopLoading } = useContext(LoadingContext);

    useEffect(() => {
        stopLoading();
    }, [])

    return (
        <main>
            <section className={styles.section}>
                <h1>Hale Produkcyjne</h1>
                <p style={{ maxWidth: "900px" }}>Hallsystem oferuje kompleksową budowę nowoczesnych hal stalowych dedykowanych różnorodnym zastosowaniom produkcyjnym. Wykorzystujemy naszą wiedzę i doświadczenie, dopasowując budynek do potrzeb inwestora. Wzniesienie hali produkcyjnej niesie ze sobą szereg korzyści względem tradycyjnego budynku murowanego.</p>
                <div className={styles.background} style={{ backgroundImage: `url("${process.env.basePath || ""}/images/hala-produkcyjna-bg.jpg")` }}>
                    <div className={styles.overlay}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
                                    </svg>
                                    <h4>Duża efektywność operacyjna</h4>
                                    <p>Hale stalowe łatwo zaprojektować z otwartymi przestrzeniami, umożliwiając swobodę organizacji procesów produkcyjnych i wygodę działania.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" id="icons">
                                        <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" /><path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" /><path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
                                    </svg>
                                    <h4>Łatwość utrzymania czystości</h4>
                                    <p>Stalowe konstrukcje są łatwe w czyszczeniu i dezynfekcji, co pozwala na utrzymanie wysokich standardów higieny i gwarantuje sterylne warunki produkcji.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z" clipRule="evenodd" />
                                    </svg>
                                    <h4>Bezpieczeństwo</h4>
                                    <p>Solidna konstrukcja stalowa zapewnia bezpieczeństwo pracowników i sprzętu produkcyjnego. Hala stalowa charakteryzuje się również wysokim bezpieczeństwem przeciwpożarowym.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider images={[
                    "/images/hala-produkcyjna1.jpg",
                    "/images/hala-produkcyjna2.jpg",
                    "/images/hala-produkcyjna3.jpg",
                    "/images/hala-produkcyjna4.jpg",
                    "/images/hala-produkcyjna5.jpg",
                    "/images/hala-produkcyjna6.jpg",
                    "/images/hala-produkcyjna7.jpg",
                    "/images/hala-produkcyjna8.jpg",
                ]} />
            </section>
        </main>
    )
}
export default HaleProdukcyjne