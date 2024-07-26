"use client"
import { LoadingContext, Slider } from "@/components";
import styles from "@/styles/o-nas.module.css";
import { useContext, useEffect } from "react";
import konstrukcja from "@/public/images/Produkcja-i-montaz-konstrukcji-stalowych.JPG";
import doswiadczenieImage from "@/public/images/DSC_0317.JPG";
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
import Image from "next/image";

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
                        <source src={`${process.env.basePath || ""}/videos/o-nas-background.mp4`} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>O nas</h1>
                </div>

                <p className={styles.introduction}>Hallsystem to polska firma, która od ponad 25 lat wspiera rozwijające się przedsiębiorstwa potrzebujące większych powierzchni operacyjnych. Obsługujemy sektory rolnictwa, przemysłu i produkcji, oferując sprawną oraz profesjonalną realizację inwestycji. Współpracując z Hallsystem, wybierasz:</p>

                <div className={styles.bulletPointsContainer}>
                    <Image
                        data-loaded='false'
                        onLoad={event => {
                            event.currentTarget.setAttribute('data-loaded', 'true');
                        }}
                        src={konstrukcja}
                        alt="konstrukcja"
                        width={800}
                        height={600}
                    />
                    <div className={styles.bulletPoints}>
                        <div className={styles.bulletPoint}>
                            <div className={styles.iconContainer}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z" />
                                    </svg>
                                </div>
                            </div>
                            <h4>Trwała i solidna konstrukcja stalowa z certyfikowanej stali</h4>
                        </div>
                        <div className={styles.bulletPoint}>
                            <div className={styles.iconContainer}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <h4>Terminowość i sprawność realizacji projektu</h4>
                        </div>
                        <div className={styles.bulletPoint}>
                            <div className={styles.iconContainer}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5362 5.29854C3.861 5.23721 4.19511 5.34035 4.42884 5.57407L6.90007 8.0453C7.21718 8.36241 7.73131 8.36241 8.04842 8.0453C8.36553 7.7282 8.36553 7.21406 8.04842 6.89695L5.57841 4.42694C5.34457 4.1931 5.24146 3.85877 5.30297 3.53383C5.36449 3.2089 5.58266 2.93539 5.8858 2.8032C8.06696 1.85206 10.7034 2.26698 12.4903 4.05384C13.9041 5.46765 14.4588 7.41411 14.1581 9.24419L21.0366 16.1227C22.3936 17.4796 22.3936 19.6797 21.0366 21.0367C19.6796 22.3936 17.4796 22.3936 16.1226 21.0367L9.24405 14.1581C7.41401 14.4588 5.46762 13.904 4.05384 12.4903C2.26556 10.702 1.85139 8.06276 2.80548 5.88058C2.93789 5.57772 3.2114 5.35986 3.5362 5.29854ZM4.30644 8.2801C4.30858 9.29283 4.69632 10.3043 5.46805 11.076C6.50688 12.1149 7.97927 12.4581 9.30695 12.1009C9.6523 12.008 10.021 12.1066 10.2739 12.3595L17.5368 19.6225C18.1127 20.1984 19.0465 20.1984 19.6224 19.6225C20.1983 19.0466 20.1983 18.1128 19.6224 17.5369L12.3595 10.274C12.1066 10.0211 12.008 9.65241 12.1009 9.30705C12.4582 7.97934 12.1149 6.50691 11.076 5.46805C10.3059 4.69791 9.29699 4.31018 8.28635 4.30645L9.46264 5.48274C10.5608 6.58089 10.5608 8.36136 9.46264 9.45952C8.36448 10.5577 6.58401 10.5577 5.48586 9.45952L4.30644 8.2801Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <h4>Wsparcie techniczne i obsługa klienta na każdym etapie budowy</h4>
                        </div>
                        <div className={styles.bulletPoint}>
                            <div className={styles.iconContainer}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 16L10.1807 10.3483C10.032 9.87477 10 9.5226 10 9C10 6.23858 12.2386 4 15 4C17.7614 4 20 6.23858 20 9C20 11.7614 17.7614 14 15 14C14.4774 14 14.1317 13.9905 13.6582 13.8418L12 15.5H10V17.5H8V19.5H5V16Z" />
                                    </svg>
                                </div>
                            </div>
                            <h4>Kompleksowa budowa hali „pod klucz”</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.doswiadczenie}>
                    <div className={styles.doswiadczenieText}>
                        <h2>Nasze doświadczenie</h2>
                        <p>W ciągu 25-letniej działalności na rynku pomogliśmy ponad 300 klientom na terenie całego kraju. Wypracowaliśmy sobie własne know-how, dzięki czemu możemy zaoferować unikatowe podejście do budowy hal stalowych.</p>
                        <p>Nasze doświadczenie oraz znajomość sprawdzonych partnerów pozwala nam zagwarantować klientom najbardziej efektywne rozwiązania dostępne na rynku.</p>
                    </div>
                    <Image
                        data-loaded='false'
                        onLoad={event => {
                            event.currentTarget.setAttribute('data-loaded', 'true');
                        }}
                        src={doswiadczenieImage}
                        alt="doswiadczenie"
                        width={1000}
                        height={1000}
                        className={styles.image} />
                </div>
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
                <h2>Nasze realizacje</h2>
                <Slider
                    slideSize={"50%"}
                    slideHeight={"600px"}
                    images={[hala1, hala2, hala3, hala4, hala5, hala6, hala7, hala8, hala9]}
                    zoom
                    parallax
                />
            </section>
        </main>
    )
}
export default O_nas